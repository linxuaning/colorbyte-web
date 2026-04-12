import {
  type PaymentFunnelSource,
  trackPhotoDownload,
  trackPhotoDownloadFailure,
} from "@/lib/analytics";

const FALLBACK_DOWNLOAD_NAME = "artimagehub-result.jpg";

const getDownloadFilename = (response: Response) => {
  const disposition = response.headers.get("content-disposition") || "";
  const match =
    disposition.match(/filename\*=UTF-8''([^;]+)/i) ||
    disposition.match(/filename="?([^"]+)"?/i);
  const raw = match?.[1];

  if (!raw) {
    return FALLBACK_DOWNLOAD_NAME;
  }

  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
};

const getDownloadErrorMessage = async (response: Response) => {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const data = await response.clone().json().catch(() => null);
    if (typeof data?.detail === "string" && data.detail.trim()) {
      return data.detail.trim();
    }
  }

  const text = await response.clone().text().catch(() => "");
  if (text.trim()) {
    return text.trim().slice(0, 200);
  }

  return `Download failed (${response.status})`;
};

export const downloadProResult = async (
  url: string,
  source?: PaymentFunnelSource
) => {
  let hasTrackedFailure = false;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      trackPhotoDownloadFailure(`http_${response.status}`, source);
      hasTrackedFailure = true;
      throw new Error(await getDownloadErrorMessage(response));
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = objectUrl;
    anchor.download = getDownloadFilename(response);
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(objectUrl), 0);

    trackPhotoDownload("pro", source);
  } catch (error) {
    if (!hasTrackedFailure) {
      const detail =
        error instanceof Error && error.name === "AbortError"
          ? "abort_error"
          : error instanceof TypeError
            ? "network_error"
            : "unexpected_error";
      trackPhotoDownloadFailure(detail, source);
    }

    throw error;
  }
};
