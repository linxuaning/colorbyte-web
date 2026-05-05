import type { LocaleSEO, ObjectRemoverClientCopy, ToolClientCopy } from "./types";

// Object Remover (Phase 1, 2026-05-04). Translations parallel
// `enObjectRemoverClient` in en.ts. Strings activate when /zh-CN/ai-tools/object-remover
// route ships (deferred per foreman 5-4 — no empty-content risk while route absent).
const zhObjectRemoverClient: ObjectRemoverClientCopy = {
  payGateHeadline: "解锁物体消除工具",
  payGateBody:
    "一次付费，无限次使用高清物体消除。返回时使用相同邮箱即可上传并清理你的照片。",
  unlockButton: "解锁访问",
  alreadyPaidLabel: "已付款？输入邮箱恢复访问",
  alreadyPaidPlaceholder: "you@example.com",
  alreadyPaidCheckButton: "查询",
  alreadyPaidFound: "访问已恢复 — 现在可以上传你的照片。",
  alreadyPaidNotFound: "未找到该邮箱的有效订阅。",

  uploadHeadline: "上传一张照片",
  uploadHint: "下一步会让你画出想要消除的部分",
  uploadCta: "选择照片",
  uploadFormatHint: "JPG、PNG、WEBP，最大 20MB",

  brushLabel: "画笔",
  undoButton: "撤销",
  clearButton: "清空",
  differentPhotoButton: "换张照片",
  removeButton: "消除",
  maskInstructions: "画出想要消除的区域。边缘多涂一些 — 留出余地 AI 修补效果更干净。",

  submittingShort: "正在上传图片和蒙版...",
  submittingMid: "AI 正在重建你画过的区域...",
  submittingLong: "正在生成最终结果 — 即将完成。",
  submittingExtra: "服务器响应较慢，请稍候。",
  submittingNote: "请保持本页打开。照片处理过程加密，24 小时内自动删除。",

  doneTitle: "物体已消除",
  originalLabel: "原图",
  cleanedLabel: "清理后",
  downloadButton: "下载高清结果",
  downloadHint: "已为此邮箱解锁原始质量",
  restartAnother: "清理另一张照片",

  errorTitle: "出了点问题",
  errorBodyPrefix: "物体消除失败，请重试，或者发邮件到 ",
  errorRetrySame: "重试当前照片",
  errorTryAgain: "再试一次",
  errorUploadDifferent: "换一张照片重试",
  errorInvalidFileType: "文件类型不支持，请使用 JPG、PNG 或 WEBP。",
  errorFileTooLarge: "文件过大，最大支持 20MB。",
  errorMaskExportFailed: "蒙版导出失败，请重试。",
  errorServiceBusy: "服务暂时繁忙，请稍后再试。",
  errorRequestTimeout: "请求超时。你的网络可能较慢 — 请重试。",
};

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
  denoiser: {
    title: "AI 照片降噪器 — 在线去除噪点和颗粒感",
    description: "用 AI 消除照片中的噪点、传感器噪声和数字伪影。NAFNet 在保留细节的同时清洁每个像素。一次性支付 $4.99，无需订阅。",
    keywords: ["照片降噪", "去除照片噪点 AI", "在线降噪工具", "传感器噪声去除", "图像降噪 AI"],
    h1: "用 AI 去除照片中的噪点和颗粒感",
    subtitle: "上传照片，AI 几秒内去除噪点和颗粒感。一次性支付 $4.99，无需订阅。",
    badge: "一次付费 · 无需订阅",
    ctaPrimary: "去除照片噪点",
    ctaSecondary: "查看示例",
    faqItems: [
      { q: "可以去除哪些类型的噪声？", a: "智能手机传感器噪声、高 ISO 颗粒感、色彩噪声和亮度噪声，以及 JPEG 压缩伪影等。" },
      { q: "处理需要多长时间？", a: "根据图片大小和服务器负载，通常需要 30–60 秒。" },
      { q: "价格是多少？", a: "一次性支付 $4.99。无需订阅。" },
    ],
  },
  deblurrer: {
    title: "AI 照片去模糊 — 在线修复运动模糊和抖动",
    description: "AI 几秒内修复运动模糊、相机抖动和焦点不准问题。NAFNet GoPro 模型恢复清晰细节。一次性支付 $4.99。",
    keywords: ["照片去模糊", "模糊照片修复 AI", "运动模糊去除", "相机抖动修复在线", "AI 照片锐化"],
    h1: "用 AI 修复模糊和抖动的照片",
    subtitle: "AI 几秒内修复运动模糊、相机抖动和焦点不准问题。一次性支付 $4.99，无需订阅。",
    badge: "一次付费 · 无需订阅",
    ctaPrimary: "修复模糊照片",
    ctaSecondary: "查看示例",
    faqItems: [
      { q: "可以修复哪些类型的模糊？", a: "运动模糊、轻度失焦、相机抖动和整体柔和感。NAFNet GoPro 模型专门针对真实运动模糊进行训练。" },
      { q: "处理需要多长时间？", a: "根据图片大小和服务器负载，通常需要 30–60 秒。" },
      { q: "价格是多少？", a: "一次性支付 $4.99。无需订阅。" },
    ],
  },
  jpegFix: {
    title: "AI JPEG 伪影消除器 — 在线去除压缩噪声",
    description: "SwinIR 几秒内去除 JPEG 压缩产生的方块噪声、振铃效应和色带。恢复压缩图像的原始质量。一次性支付 $4.99。",
    keywords: ["JPEG 伪影去除", "JPEG 压缩噪声消除", "改善 JPEG 图片质量", "方块噪声去除 AI", "SwinIR 在线"],
    h1: "用 AI 去除 JPEG 压缩伪影",
    subtitle: "AI 几秒内去除 JPEG 压缩产生的方块噪声、振铃效应和色带。一次性支付 $4.99，无需订阅。",
    badge: "一次付费 · 无需订阅",
    ctaPrimary: "去除 JPEG 伪影",
    ctaSecondary: "查看示例",
    faqItems: [
      { q: "什么是 JPEG 伪影？", a: "将图像保存为 JPEG 时，压缩会产生可见缺陷：方块噪声、边缘附近的振铃效应和色带。SwinIR 在恢复原始细节的同时消除这些缺陷。" },
      { q: "处理需要多长时间？", a: "通常需要 30–60 秒。" },
      { q: "价格是多少？", a: "一次性支付 $4.99。无需订阅。" },
    ],
  },
  toolClient: {
    restore: zhRestoreClient,
    colorize: zhColorizeClient,
    enhance: zhEnhanceClient,
    objectRemover: zhObjectRemoverClient,
  },
};
