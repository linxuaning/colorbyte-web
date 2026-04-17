import type { LocaleSEO, ToolClientCopy } from "./types";

const koRestoreClient: ToolClientCopy = {
  dropHeadline: "여기에 사진을 놓으세요",
  dropHint: "또는 클릭하여 선택 · JPG, PNG, WEBP · 최대 20 MB",
  uploadCta: "복원할 사진 업로드",
  pasteHint: "Ctrl+V로 이미지를 붙여넣을 수도 있습니다",
  colorizeToggle: "흑백 사진 컬러화",

  uploading: "업로드 중...",
  retryingUpload: "업로드 재시도 중 ({n}/3)...",
  processingStarted: "처리 시작됨...",
  processingDefault: "처리 중...",
  actionVerbIng: "복원 중",
  warmupNotice: "첫 복원은 AI가 시작되는 동안 시간이 조금 걸릴 수 있습니다.",
  elapsedSuffix: "경과",
  serverWakingUp: "서버를 시작하는 중입니다. 잠시만 기다려 주세요",
  aiWarmingUp: "AI 모델을 준비 중입니다. 거의 완료되었습니다",

  errorInvalidFileType: "지원하지 않는 파일 형식입니다. JPG, PNG 또는 WEBP를 업로드하세요.",
  errorFileTooLarge: "파일이 너무 큽니다. 최대 크기는 20MB입니다.",
  errorUploadFailed: "업로드에 실패했습니다",
  errorUploadTimeout:
    "업로드 시간이 초과되었습니다. 서버가 시작 중일 수 있습니다. 잠시 후 다시 시도해 주세요.",
  errorProcessingTimeout:
    "처리 시간이 초과되었습니다. AI 서비스가 준비 중일 수 있습니다. 다시 시도해 주세요.",
  errorProcessingFailed: "처리에 실패했습니다. 다시 시도해 주세요.",
  errorTitle: "문제가 발생했습니다",
  errorBody:
    "문제가 발생했습니다. 다시 시도해 주세요. 파일은 그대로 있습니다. 도움이 필요하신가요?",
  errorRetrySame: "같은 사진으로 재시도",
  errorTryAgain: "다시 시도",
  errorUploadDifferent: "다른 사진 업로드",

  restartAnother: "다른 사진 복원하기",
};

const koColorizeClient: ToolClientCopy = {
  ...koRestoreClient,
  dropHeadline: "여기에 흑백 사진을 놓으세요",
  uploadCta: "컬러화할 사진 업로드",
  actionVerbIng: "컬러화 중",
  warmupNotice: "첫 컬러화는 AI가 시작되는 동안 시간이 조금 걸릴 수 있습니다.",
  restartAnother: "다른 사진 컬러화하기",
};

const koEnhanceClient: ToolClientCopy = {
  ...koRestoreClient,
  uploadCta: "화질 개선할 사진 업로드",
  colorizeToggle: "흑백이면 함께 컬러화",
  actionVerbIng: "화질 개선 중",
  warmupNotice: "첫 화질 개선은 AI가 시작되는 동안 시간이 조금 걸릴 수 있습니다.",
  restartAnother: "다른 사진 화질 개선하기",
};

export const ko: LocaleSEO = {
  oldPhotoRestoration: {
    title: "오래된 사진 무료 복원 — AI로 손상된 사진 복구",
    description:
      "인공지능으로 오래된 사진을 무료로 복원하세요. 스크래치 제거, 색상 복구, 화질 개선을 몇 초 만에. 회원가입 불필요.",
    keywords: [
      "오래된 사진 복원 무료",
      "사진 복원 AI",
      "손상된 사진 복구",
      "오래된 사진 복구 온라인",
      "사진 복원 무료 온라인",
    ],
    h1: "오래된 사진을 AI로 복원하세요 — 무료.",
    subtitle: "사진을 업로드하세요. AI가 손상된 부분을 복원하고 화질을 개선합니다. 몇 초면 완료.",
    badge: "회원가입 불필요 · 몇 초 만에 완료",
    ctaPrimary: "무료로 사진 복원하기",
    ctaSecondary: "예시 보기",
    faqItems: [
      { q: "사진을 업로드하기 전에 결제가 필요한가요?", a: "네, 도구에 접근하려면 일회성 결제가 필요합니다. 결제 후에는 원하는 만큼 복원할 수 있습니다." },
      { q: "어떤 이미지 형식을 지원하나요?", a: "JPG, PNG, WEBP 형식으로 최대 20MB까지 지원합니다." },
      { q: "복원에 얼마나 걸리나요?", a: "사진 크기와 상태에 따라 다르지만 보통 10~30초 안에 완료됩니다." },
      { q: "AI가 수리할 수 있는 손상 유형은 무엇인가요?", a: "스크래치, 얼룩, 색상 바램, 찢김, 시간이 지남에 따른 일반적인 열화를 복원할 수 있습니다." },
      { q: "업로드한 사진이 서버에 저장되나요?", a: "사진은 안전하게 처리되며 서버에 영구적으로 저장되지 않습니다." },
    ],
    howToSteps: [
      { name: "일회 결제로 잠금 해제", text: "일회성 결제로 복원 도구에 대한 전체 액세스가 활성화됩니다." },
      { name: "오래된 사진 업로드", text: "JPG, PNG, WEBP 형식(최대 20MB)의 사진을 선택하세요." },
      { name: "AI가 이미지 복원", text: "AI가 몇 초 안에 손상, 스크래치, 열화를 자동으로 감지하고 복원합니다." },
      { name: "복원된 사진 다운로드", text: "고해상도로 복원된 사진을 다운로드하세요." },
    ],
  },
  colorizer: {
    title: "오래된 사진 무료 색상화 — AI로 흑백 사진을 컬러로",
    description:
      "인공지능으로 흑백 사진을 무료로 색상화하세요. 실감나는 색상을 몇 초 만에. 회원가입 불필요.",
    keywords: [
      "사진 색상화 무료",
      "사진 색상화 AI",
      "흑백 사진 컬러화 온라인",
      "오래된 사진 색상화 무료",
      "사진 컬러화 AI 무료",
    ],
    h1: "흑백 사진을 AI로 색상화하세요 — 무료.",
    subtitle: "사진을 업로드하세요. AI가 실감나는 색상을 몇 초 만에 추가합니다.",
    badge: "회원가입 불필요 · 몇 초 만에 완료",
    ctaPrimary: "무료로 사진 색상화하기",
    ctaSecondary: "예시 보기",
    faqItems: [
      { q: "사진을 업로드하기 전에 결제가 필요한가요?", a: "네, 도구에 접근하려면 $4.99의 일회성 결제가 필요합니다. 결제 후에는 원하는 만큼 색상화할 수 있습니다. 구독 불필요." },
      { q: "AI 색상화에 얼마나 걸리나요?", a: "대부분의 사진은 30초 안에 색상화됩니다. 복잡한 이미지는 최대 90초가 걸릴 수 있습니다." },
      { q: "사진은 안전하게 보호되나요?", a: "네. 모든 사진은 암호화된 HTTPS로 전송되며 24시간 이내에 서버에서 영구적으로 삭제됩니다. 사진을 공유하거나 모델 훈련에 사용하지 않습니다." },
    ],
    howToSteps: [
      { name: "일회 결제로 잠금 해제", text: "$4.99 일회성 결제로 색상화 도구에 대한 전체 액세스가 활성화됩니다. 구독 불필요." },
      { name: "흑백 사진 업로드", text: "흑백 또는 그레이스케일 사진을 업로드하세요. 지원 형식: JPG, PNG, WEBP (최대 20MB)." },
      { name: "색상화된 사진 다운로드", text: "AI가 몇 초 만에 실감나는 색상을 추가합니다. 원본 품질로 다운로드하세요." },
    ],
  },
  enhancer: {
    title: "사진 화질 개선 무료 — AI로 흐릿한 사진을 선명하게",
    description:
      "인공지능으로 사진 화질을 무료로 개선하세요. 흐림 제거, 해상도 향상, 손실된 디테일 복구를 몇 초 만에. 회원가입 불필요.",
    keywords: [
      "사진 화질 개선 무료",
      "사진 화질 개선 무료",
      "흐릿한 사진 선명하게 AI",
      "사진 해상도 높이기 무료",
      "사진 화질 향상 AI 무료",
    ],
    h1: "오래된 사진 화질을 AI로 개선하세요 — 무료.",
    subtitle: "사진을 업로드하세요. AI가 흐림을 제거하고 해상도를 높입니다. 몇 초면 완료.",
    badge: "회원가입 불필요 · 몇 초 만에 완료",
    ctaPrimary: "무료로 사진 화질 개선하기",
    ctaSecondary: "예시 보기",
    faqItems: [
      { q: "사진을 업로드하기 전에 결제가 필요한가요?", a: "네, 도구에 접근하려면 $4.99의 일회성 결제가 필요합니다. 결제 후에는 원하는 만큼 화질 개선할 수 있습니다. 구독 불필요." },
      { q: "AI 화질 개선에 얼마나 걸리나요?", a: "대부분의 사진은 30초 안에 개선됩니다. 복잡한 이미지는 최대 90초가 걸릴 수 있습니다." },
      { q: "사진은 안전하게 보호되나요?", a: "네. 모든 사진은 암호화된 HTTPS로 전송되며 24시간 이내에 서버에서 영구적으로 삭제됩니다. 사진을 공유하거나 모델 훈련에 사용하지 않습니다." },
    ],
    howToSteps: [
      { name: "일회 결제로 잠금 해제", text: "$4.99 일회성 결제로 화질 개선 도구에 대한 전체 액세스가 활성화됩니다. 구독 불필요." },
      { name: "사진 업로드", text: "흐릿하거나 저해상도 또는 저품질의 사진을 업로드하세요. 지원 형식: JPG, PNG, WEBP (최대 20MB)." },
      { name: "화질 개선된 사진 다운로드", text: "AI가 흐림을 제거하고 해상도를 최대 4배 높입니다. 원본 품질로 다운로드하세요." },
    ],
  },
  toolClient: {
    restore: koRestoreClient,
    colorize: koColorizeClient,
    enhance: koEnhanceClient,
  },
};
