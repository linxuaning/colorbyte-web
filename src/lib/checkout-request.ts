export const CHECKOUT_CREATE_TIMEOUT_MS = 45000;
export const CHECKOUT_CREATE_MAX_ATTEMPTS = 2;
export const CHECKOUT_CREATE_RETRY_DELAY_MS = 1200;
const SAME_ORIGIN_CHECKOUT_PATH = "/api/payment/dodo-create-checkout";

function shouldTryDirectCheckoutFallback(response: Response): boolean {
  return [404, 405, 410, 500, 502, 503, 504].includes(response.status);
}

function abortSignalAfter(timeoutMs: number): AbortSignal | undefined {
  if (typeof AbortSignal !== "undefined" && "timeout" in AbortSignal) {
    return AbortSignal.timeout(timeoutMs);
  }

  return undefined;
}

function isRetryableCheckoutError(err: unknown) {
  return (
    err instanceof TypeError ||
    (err instanceof DOMException &&
      (err.name === "TimeoutError" || err.name === "AbortError"))
  );
}

export async function fetchCheckoutWithRetry(
  url: string,
  init: Omit<RequestInit, "signal">,
): Promise<Response> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= CHECKOUT_CREATE_MAX_ATTEMPTS; attempt += 1) {
    try {
      return await fetch(url, {
        ...init,
        signal: abortSignalAfter(CHECKOUT_CREATE_TIMEOUT_MS),
      });
    } catch (err) {
      lastError = err;
      if (!isRetryableCheckoutError(err) || attempt === CHECKOUT_CREATE_MAX_ATTEMPTS) {
        throw err;
      }
      await new Promise((resolve) => window.setTimeout(resolve, CHECKOUT_CREATE_RETRY_DELAY_MS));
    }
  }

  throw lastError instanceof Error ? lastError : new Error("Checkout request failed.");
}

export async function fetchCheckoutWithFallback(
  apiBase: string,
  body: Record<string, unknown>,
): Promise<Response> {
  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  try {
    const sameOriginResponse = await fetchCheckoutWithRetry(SAME_ORIGIN_CHECKOUT_PATH, init);
    if (!sameOriginResponse.ok && apiBase && shouldTryDirectCheckoutFallback(sameOriginResponse)) {
      return fetchCheckoutWithRetry(`${apiBase}/api/payment/dodo-create-checkout`, init);
    }

    return sameOriginResponse;
  } catch (err) {
    if (!isRetryableCheckoutError(err) || !apiBase) throw err;
  }

  return fetchCheckoutWithRetry(`${apiBase}/api/payment/dodo-create-checkout`, init);
}
