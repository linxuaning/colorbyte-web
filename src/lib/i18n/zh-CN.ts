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
    // 2026-05-15: expanded to 8 native Simplified Chinese FAQ items per
    // Wave 4 P2c Nick Brown hub pattern. Uses Chinese quote style only in copy
    // and keeps pay-first + GFPGAN / Real-ESRGAN citation language aligned.
    faqItems: [
      { q: "上传照片前需要先付费吗？", a: "是的。ArtImageHub 使用先付费模式，一次性支付 $4.99 后，同一个邮箱即可解锁上传、AI 处理和高清原图下载。没有月费、没有订阅，也没有按照片重复收费。我们选择先付费，而不是免费预览后再收费，是为了避免很多修图工具常见的体验：先给低清或带水印预览，最后才要求用户付款。付款后，你用同一个邮箱回到工具页面，就可以上传褪色、划痕、破损、水渍、黑白老照片等图片。访问权限绑定在邮箱上，之后如果需要继续修复其他照片，或在 24 小时有效期内重新下载结果，不会进入新的订阅周期。这个流程更适合想快速修好家庭旧照、又不想被长期订阅绑定的用户。" },
      { q: "ArtImageHub 老照片修复支持哪些图片格式和文件大小？", a: "ArtImageHub 支持 JPG、JPEG、PNG、WEBP 格式，单个文件最大 20 MB。如果你是从纸质老照片扫描，建议使用 600 DPI 或更高分辨率，并尽量保存为 PNG，这样 AI 能获得更多像素信息，尤其有利于人脸细节、服装纹理、纸面划痕和褪色边界的判断。普通手机拍摄或小尺寸扫描图使用 JPG 也可以。WEBP 可以上传，但在老照片扫描场景中并不常见。超过 20 MB 的文件可以先用扫描软件或图片工具压缩；超过 24 百万像素的极高采样通常不会显著提高修复质量，反而会增加处理时间。iPhone 的 HEIC 目前不直接支持，建议先转换为 JPG 再上传。" },
      { q: "AI 修复一张老照片通常需要多长时间？", a: "大多数照片从上传到完成修复需要 30 到 90 秒。损坏非常严重、多人合影、原始文件很大，或同时开启黑白照片上色时，可能需要 3 分钟左右。处理流程会把划痕减轻、褪色校正、对比度平衡、GFPGAN 系人脸增强和 Real-ESRGAN 系 4x 超分辨率放大合并在一次流程里完成，不需要用户像 Photoshop 那样手动串联多个步骤。总耗时主要取决于原图大小、检测到的人脸数量，以及受损区域的范围。如果处理超过 3 分钟，页面会显示进度，完成后结果会出现在与你付款邮箱绑定的访问页面中。对于常见家庭相册、毕业照、婚礼照、祖辈肖像等场景，通常不需要等待很久。" },
      { q: "上传到 ArtImageHub 的照片会保持隐私和安全吗？", a: "会。照片上传、AI 处理和下载都通过 HTTPS 加密连接完成。上传的原始照片和修复后的结果，会在处理完成后 24 小时内从服务器自动永久删除；我们不做长期留存、不做相册归档，也不会在 24 小时窗口之外保留云端备份。你的照片不会分享给第三方，不会出售给数据经纪商，也不会用于训练 AI 模型。ArtImageHub 使用的主要人脸增强和超分辨率能力来自已公开的预训练 GFPGAN 与 Real-ESRGAN 系模型，我们不会用客户上传的家庭照片进行微调。修复结果与原图遵循同样的 24 小时删除策略，因此请在有效期内下载高清文件。邮箱层面的访问记录会保留，用于识别已付款权限。" },
      { q: "AI 可以修复严重破损、撕裂或水泡过的老照片吗？", a: "AI 修复最适合那些仍然保留一定图像信息的老照片。比如褪色、细小划痕、水渍、轻微折痕、发黄、边缘小破损、整体模糊等中等损伤，通常能得到自然且明显的改善。AI 可以让人脸更清楚、背景更干净、纸面污渍更轻，并恢复整体对比度。如果照片中关键区域已经完全缺失，例如半张脸被撕掉、重要人物大面积缺失、画面严重过曝或全黑，AI 只能根据周围信息进行合理推测，结果可能适合家庭分享，但不能当作完全准确的历史修复。为了获得更好效果，建议把原件放平，避免反光，用扫描仪或手机在均匀光线下拍摄，并尽量上传最高质量的原图。" },
      { q: "黑白老照片可以在修复时一起上色吗？", a: "可以。黑白照片或棕褐色老照片可以在同一流程中完成修复和上色。系统会先处理划痕、模糊、褪色、纸面污渍等问题，再根据人脸、服装、背景和年代特征推测自然颜色。需要注意的是，上色结果是历史上合理的颜色推断，并不保证完全还原当时真实颜色。比如军装、校服、民族服饰、老汽车、室内墙纸等，如果颜色具有历史或纪念意义，建议结合家庭记忆或参考资料进行判断。你也可以选择不上色，只保留黑白风格，同时提升清晰度和对比度。对重要家庭照片，最好同时保存未上色修复版和上色版，这样既保留原始氛围，也方便亲友观看。" },
      { q: "ArtImageHub 和 Photoshop 或人工照片修复有什么区别？", a: "Photoshop 和专业修复师仍然适合非常精细的修复，例如手工重绘缺失背景、修补复杂破损、为印刷做精细调色，或需要逐像素控制的商业项目。但这类方式通常需要几十分钟到数小时，外包成本也更高。ArtImageHub 的定位是用 AI 快速改善家庭旧照，让普通用户不需要学习修图软件，也能处理祖辈肖像、老毕业照、婚礼照、相册扫描件和旧证件照。它会自动处理划痕、褪色、模糊和人脸不清晰的问题，通常几分钟内就能得到适合家庭分享、数字相册和小尺寸打印的结果。它不是历史鉴定级人工修复，也不是商业级精修服务，而是面向日常家庭照片的低成本、高速度修复工具。" },
      { q: "修复后的照片可以用什么质量下载？", a: "使用已付款邮箱处理的照片，可以下载无水印的高清原图质量结果。AI 会根据原图状态增强人脸细节、降低噪点、改善对比度，并在需要时进行高分辨率放大。对于小尺寸纸质照片、手机翻拍图和普通扫描图，目标是生成适合家庭群分享、数字相册、社交媒体发布和小到中等尺寸再打印的版本。不过，如果原始图片分辨率极低、严重失焦，或关键区域已经完全缺失，AI 无法凭空恢复不存在的真实信息。下载前建议查看预览，确认人脸、手部、文字和背景没有明显异常。对重要照片，请同时保留未经处理的原始文件，以便未来需要人工精修或重新扫描时使用。" },
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
  homePage: {
    metaTitle: "ArtImageHub — AI 老照片修复、画质增强与上色",
    metaDescription:
      "用 AI 修复老照片、提升画质、为黑白照片上色。免费开始，HD 原图仅需 $4.99 下载。",
    ogTitle: "ArtImageHub — AI 老照片修复",
    ogDescription:
      "用 ArtImageHub 修复老照片、提升画质、为黑白照片上色。一次性支付 $4.99。30–90 秒出结果。无需订阅。",

    heroEyebrow: "自 2024 年 · AI 修复工作室",
    heroH1: "用 AI 老照片修复，让褪色的回忆重焕新生。",
    heroSubhead:
      "上传一张受损、褪色或黑白的照片 — 我们的 AI 在数秒内将其修复至惊艳清晰度。免费开始，如有需要可选择 $4.99 的 HD 原图。",
    heroCtaPrimary: "免费修复你的照片",
    heroBullets: ["免费预览", "HD 原图 $4.99", "即时出结果"] as const,
    heroTrustStrip: [
      "结账前免费预览",
      "服务器 24 小时内删除",
      "JPG、PNG、WEBP，最大 20 MB",
    ] as const,
    heroTrustSignals: [
      "专业级修复品质",
      "30 秒出结果",
      "一次性付款，无需订阅",
    ] as const,
    heroBadges: [
      "安全支付",
      "100% 隐私",
      "24 小时后删除 · 请在过期前下载",
      "退款保障",
    ] as const,
    heroSidebarLabel: "全球家庭信赖之选",
    heroSidebarStat: "10,000+",
    heroSidebarStatLabel: "已修复回忆",
    heroBottomBorder: "面部增强 · 超分辨率 · 上色",
    heroBottomEst: "Est. 2024",

    featuresEyebrow: "能力",
    featuresH2: "你的照片所需的一切。",
    featuresSubhead:
      "六十年的照片劣化，由专门设计的神经网络在三十秒内逆转。",
    features: [
      {
        title: "面部细节修复",
        desc: "重建因岁月或损伤而丢失的面部细节。基于 GFPGAN 神经网络，我们恢复清晰的眼睛、自然的肌肤纹理和保留下来的表情。",
      },
      {
        title: "4× 超分辨率",
        desc: "用 AI 提升至 4 倍分辨率 — 即便是最低质量的扫描件、老旧相片和破损原件，也能恢复晶莹剔透的细节。",
      },
      {
        title: "自动上色",
        desc: "为黑白照片添加自然且符合历史的色彩。蓝天蓝、肤色暖 — 一键完成。",
      },
      {
        title: "划痕与损伤修复",
        desc: "去除裂纹、水渍、折痕和岁月斑点。我们的修复模型无缝填补丢失的细节。",
      },
      {
        title: "画质增强",
        desc: "同时修正曝光、对比度和噪点。每个像素都经过分析与校正，输出自然均衡的画面。",
      },
      {
        title: "立即下载",
        desc: "通过我们的交互式滑块对比修复前后，然后下载完整分辨率的修复照片。",
      },
    ] as const,

    stats: [
      { number: "10,000+", label: "已修复照片", sub: "且持续增长" },
      { number: "30 秒", label: "平均处理时间", sub: "数秒出结果" },
      { number: "4.8★", label: "用户评分", sub: "来自 2,400+ 条评价" },
    ] as const,
    testimonialsEyebrow: "用户评价",
    testimonialsH2: "全球家庭信赖之选",
    testimonials: [
      {
        quote:
          "起初我半信半疑，但结果令我惊叹。我曾祖父 1942 年那张受损肖像看起来焕然一新。AI 甚至修复了一些我自己都没注意到的细节。",
        author: "Michael Chen",
        location: "旧金山，加州",
      },
      {
        quote:
          "作为一名专业家谱研究者，我向所有客户推荐这款工具。它比传统修复更快、更实惠，质量始终出色。",
        author: "Dr. Patricia Moore",
        location: "波士顿，马萨诸塞州",
      },
      {
        quote:
          "过去一个月里我修复了 50 多张家族照片。上色功能令人惊叹 — 它让我祖母的黑白婚礼照片焕发了生命。物超所值。",
        author: "James Rodriguez",
        location: "奥斯汀，得克萨斯州",
      },
    ] as const,

    howEyebrow: "流程",
    howH2: "三步。三十秒。",
    howSteps: [
      {
        n: "1",
        title: "解锁付费访问",
        desc: "请先从结账开始，让该邮箱在进入工具之前就开通上传与处理权限。",
      },
      {
        n: "2",
        title: "用相同邮箱上传",
        desc: "付款后回到工具，上传你的受损、褪色、黑白或低质量照片。",
      },
      {
        n: "3",
        title: "处理并下载",
        desc: "处理成功后，相同邮箱将持续保留原图品质的下载通道。",
      },
    ] as const,
    howCtaPrimary: "免费修复你的照片",

    compareEyebrow: "选择前先比较",
    compareH2: "从最高购买意向的问题开始。",
    compareSubhead:
      "正在比较工具的买家比一般访客更接近行动。我们将这种意图引导至直接的对比页面，再连接到修复流程。",
    compareLabel: "高意向落地页",
    compareCards: [
      {
        title: "ArtImageHub vs Remini",
        desc: "适合在多款 AI 增强工具间犹豫、希望为老旧家庭照片找到更好工作流的用户。",
        points: [
          "比较修复质量、价格与瑕疵控制",
          "看清哪款更适合褪色肖像与受损相片",
          "比较后直接进入我们的修复流程",
        ],
        cta: "阅读 Remini 对比",
      },
      {
        title: "AI 修复 vs Photoshop",
        desc: "适合在投入手动编辑前权衡速度、工作量与输出质量的用户。",
        points: [
          "比较总工作量、出片速度和真实感",
          "明确手动编辑何时对家庭照片来说过度",
          "从评估直接进入实时 AI 修复",
        ],
        cta: "阅读 Photoshop 对比",
      },
    ] as const,
    compareDirectCta: "直接进入修复",

    faqEyebrow: "常见问题",
    faqH2: "为你解答。",
    faqSubheadPrefix: "开始之前你需要了解的一切。找不到答案？",
    faqVisitJournalLink: "查看我们的专栏",
    faqSubheadSuffix: "。",
    faqItems: [
      {
        q: "你们支持哪些图像格式？",
        a: "支持 JPG、PNG 和 WEBP 格式 — 单个文件最大 20 MB。",
      },
      {
        q: "付款后会发生什么？",
        a: "付款会为该邮箱地址解锁上传与 AI 处理权限。处理完成后，相同邮箱解锁原图品质 HD 下载 — 无水印，无需订阅。",
      },
      {
        q: "我的照片数据是否私密且安全？",
        a: "是的。所有上传的照片在 24 小时后自动删除。我们绝不存储、共享或用你的图像训练模型。",
      },
      {
        q: "访问机制如何运作？",
        a: "付款会为该邮箱解锁上传与处理权限。处理成功后，同一个邮箱也会解锁原图品质下载。",
      },
      {
        q: "我需要订阅吗？",
        a: "不需要。这是一次性付款，仅为该邮箱解锁访问。无周期性扣款。",
      },
    ] as const,

    finalH2: "你的回忆值得再次闪耀。",
    finalSubhead:
      "一次付款即可为该邮箱解锁上传与处理权限，然后在工具内继续操作。让你的家族历史重焕生机，不再回到免费预览的承诺里。",
    finalCtaPrimary: "免费修复你的照片",
    finalCtaSecondary: "查看价格",
    finalTagline: "上传前付费访问 · 一次性付款 · 无需订阅",
  },
  toolClient: {
    restore: zhRestoreClient,
    colorize: zhColorizeClient,
    enhance: zhEnhanceClient,
    objectRemover: zhObjectRemoverClient,
  },
};
