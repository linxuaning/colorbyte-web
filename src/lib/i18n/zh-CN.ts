import type { LocaleSEO, ToolClientCopy } from "./types";

const zhRestoreClient: ToolClientCopy = {
  dropHeadline: "拖放照片到这里",
  dropHint: "或点击选择 · JPG、PNG、WEBP · 最大 20 MB",
  uploadCta: "上传照片并修复",
  pasteHint: "也可以使用 Ctrl+V 粘贴图片",
  colorizeToggle: "同时为黑白照片上色",

  uploading: "正在上传...",
  retryingUpload: "正在重试上传 ({n}/3)...",
  processingStarted: "已开始处理...",
  processingDefault: "处理中...",
  actionVerbIng: "修复中",
  warmupNotice: "首次修复时 AI 启动需要稍等。",
  elapsedSuffix: "已用时",
  serverWakingUp: "服务器正在启动，请稍等",
  aiWarmingUp: "AI 模型正在准备，马上就好",

  errorInvalidFileType: "不支持的文件格式。请上传 JPG、PNG 或 WEBP。",
  errorFileTooLarge: "文件过大。最大支持 20 MB。",
  errorUploadFailed: "上传失败",
  errorUploadTimeout:
    "上传超时。服务器可能正在启动，请稍等再试。",
  errorProcessingTimeout:
    "处理超时。AI 服务可能正在启动，请重试。",
  errorProcessingFailed: "处理失败，请重试。",
  errorTitle: "出现问题",
  errorBody:
    "出现了问题，请重试。文件已保留。需要帮助吗？",
  errorRetrySame: "用同一张照片重试",
  errorTryAgain: "再试一次",
  errorUploadDifferent: "上传其他照片",

  restartAnother: "修复另一张照片",
};

const zhColorizeClient: ToolClientCopy = {
  ...zhRestoreClient,
  dropHeadline: "拖放黑白照片到这里",
  uploadCta: "上传照片并上色",
  actionVerbIng: "上色中",
  warmupNotice: "首次上色时 AI 启动需要稍等。",
  restartAnother: "为另一张照片上色",
};

const zhEnhanceClient: ToolClientCopy = {
  ...zhRestoreClient,
  uploadCta: "上传照片并提高画质",
  colorizeToggle: "黑白照片同时上色",
  actionVerbIng: "高清化中",
  warmupNotice: "首次处理时 AI 启动需要稍等。",
  restartAnother: "处理另一张照片",
};

export const zhCN: LocaleSEO = {
  oldPhotoRestoration: {
    title: "免费修复老照片 — AI 让破损照片焕然一新",
    description:
      "用人工智能免费修复老照片。去除划痕、污渍，让褪色的回忆重现光彩。无需注册，几秒完成。",
    keywords: [
      "老照片修复 免费",
      "AI 照片修复",
      "破损照片修复",
      "旧照片翻新",
      "照片复原 在线免费",
    ],
    h1: "AI 修复老照片 — 免费。",
    subtitle: "只需上传照片。AI 会去除划痕和污渍，几秒内还原高清画质。",
    badge: "无需注册 · 几秒完成",
    ctaPrimary: "免费修复照片",
    ctaSecondary: "查看示例",
    faqItems: [
      { q: "上传照片前需要付费吗？", a: "是的，访问工具需要一次性付费。付费后可无限次修复。" },
      { q: "支持哪些图片格式？", a: "支持 JPG、PNG、WEBP 格式，最大 20MB。" },
      { q: "修复需要多长时间？", a: "取决于照片大小和损坏程度，通常 10-30 秒完成。" },
      { q: "AI 能修复哪些损坏？", a: "可修复划痕、污渍、褪色、撕裂、岁月磨损等问题。" },
      { q: "上传的照片会被保存吗？", a: "照片会被安全处理，不会永久保存到服务器。" },
    ],
    howToSteps: [
      { name: "一次付费解锁工具", text: "一次性付费即可获得修复工具的完整访问权限。" },
      { name: "上传老照片", text: "选择 JPG、PNG 或 WEBP 格式的照片（最大 20MB）。" },
      { name: "AI 自动修复", text: "AI 会在几秒内自动检测并修复划痕、污渍和损伤。" },
      { name: "下载修复后的照片", text: "下载高清还原的照片。" },
    ],
  },
  colorizer: {
    title: "免费给老照片上色 — AI 让黑白照片变彩色",
    description:
      "用人工智能免费给黑白照片上色。几秒内还原真实色彩。无需注册。",
    keywords: [
      "黑白照片上色 免费",
      "AI 黑白照片上色",
      "照片上色 在线免费",
      "黑白照片着色 免费",
      "AI 照片上色 免费",
    ],
    h1: "AI 给黑白照片上色 — 免费。",
    subtitle: "只需上传照片。AI 会在几秒内添加真实色彩。",
    badge: "无需注册 · 几秒完成",
    ctaPrimary: "免费给照片上色",
    ctaSecondary: "查看示例",
    faqItems: [
      { q: "上传前需要付费吗？", a: "是的，访问工具需要一次性付费 $4.99。付费后可无限次上色。无订阅。" },
      { q: "AI 上色需要多长时间？", a: "大多数照片 30 秒内完成。复杂图片最多 90 秒。" },
      { q: "我的照片安全吗？", a: "是的。所有照片通过加密 HTTPS 传输，24 小时内从服务器永久删除。我们不会分享照片或用于训练模型。" },
    ],
    howToSteps: [
      { name: "一次付费解锁工具", text: "一次性付费 $4.99 即可获得上色工具完整访问权限。无订阅。" },
      { name: "上传黑白照片", text: "上传黑白或灰度照片。支持格式：JPG、PNG、WEBP（最大 20MB）。" },
      { name: "下载上色后的照片", text: "AI 几秒内添加真实色彩。可按原始质量下载。" },
    ],
  },
  enhancer: {
    title: "免费提高照片画质 — AI 让模糊照片变清晰",
    description:
      "用人工智能免费提高照片画质。去除模糊，提升分辨率，还原失去的细节。无需注册，几秒完成。",
    keywords: [
      "照片画质提升 免费",
      "提高照片清晰度 免费",
      "模糊照片变清晰 AI",
      "照片高清化 免费",
      "AI 照片增强 免费",
    ],
    h1: "AI 提高照片画质 — 免费。",
    subtitle: "只需上传照片。AI 会去除模糊并几秒内提升分辨率。",
    badge: "无需注册 · 几秒完成",
    ctaPrimary: "免费提高照片画质",
    ctaSecondary: "查看示例",
    faqItems: [
      { q: "上传前需要付费吗？", a: "是的，访问工具需要一次性付费 $4.99。付费后可无限次处理。无订阅。" },
      { q: "AI 高清化需要多长时间？", a: "大多数照片 30 秒内完成。复杂图片最多 90 秒。" },
      { q: "我的照片安全吗？", a: "是的。所有照片通过加密 HTTPS 传输，24 小时内从服务器永久删除。我们不会分享照片或用于训练模型。" },
    ],
    howToSteps: [
      { name: "一次付费解锁工具", text: "一次性付费 $4.99 即可获得高清化工具完整访问权限。无订阅。" },
      { name: "上传照片", text: "上传模糊、低分辨率或低画质的照片。支持格式：JPG、PNG、WEBP（最大 20MB）。" },
      { name: "下载高清照片", text: "AI 去除模糊，分辨率最高提升 4 倍。可按原始质量下载。" },
    ],
  },
  toolClient: {
    restore: zhRestoreClient,
    colorize: zhColorizeClient,
    enhance: zhEnhanceClient,
  },
};
