# IndexNow 批量提交脚本

用于将所有网站URL批量提交到IndexNow（Bing和Yandex搜索引擎）以加速索引。

## 方案1：浏览器Console执行（推荐）

**适用场景**：本地环境无法访问 vercel.app（如国内网络）

**步骤：**

1. 打开浏览器，访问 https://www.artimagehub.com
2. 打开开发者工具（F12 或 Cmd+Option+I）
3. 切换到 Console 标签
4. 复制 `scripts/submit-indexnow-browser.js` 的全部内容
5. 粘贴到 Console 并回车执行
6. 等待完成（约2-3分钟）

**预期输出：**
```
📊 Preparing to submit 130 URLs to IndexNow...
📍 Site: https://www.artimagehub.com

📦 Split into 2 batch(es)

🚀 Submitting batch 1/2 (100 URLs)...
✅ Batch 1 submitted successfully
🚀 Submitting batch 2/2 (30 URLs)...
✅ Batch 2 submitted successfully

✨ IndexNow submission complete!

📋 Summary:
   Total URLs: 130
   Main pages: 8
   Blog posts: 122
   Success: 2 batch(es)
   Failed: 0 batch(es)
```

## 方案2：Node.js执行

**适用场景**：服务器环境或可访问 vercel.app 的网络

**步骤：**

```bash
cd scripts
node submit-indexnow.js
```

## 提交的URL列表

- **首页**: `/`
- **功能页**: `/old-photo-restoration`
- **博客首页**: `/blog`
- **其他页面**: `/about`, `/resources`, `/privacy`, `/terms`, `/sitemap-html`
- **博客文章**: 122篇（`/blog/{slug}`）

**总计**: 130个URL

## 技术说明

- **IndexNow API**: https://www.indexnow.org/
- **支持的搜索引擎**: Bing, Yandex
- **批次大小**: 100个URL/批次
- **通知时效**: 24小时内
- **Google支持**: ❌ Google不支持IndexNow，需使用Google Search Console手动提交

## 故障排除

### 本地执行失败（fetch failed）

**原因**: 网络无法访问 vercel.app（常见于国内网络）

**解决**: 使用方案1（浏览器Console执行）

### API返回400错误

**原因**: URL格式错误或API key配置问题

**解决**:
1. 检查 `/api/indexnow` 端点是否部署成功
2. 确认 `public/7f8b9c2d4e5a6f1b3c8d9e0a1b2c3d4e.txt` 文件存在

### API返回500错误

**原因**: IndexNow服务端错误

**解决**: 等待1小时后重试，或检查IndexNow服务状态

## 验证索引状态

提交后，可通过以下方式验证：

1. **Bing Webmaster Tools**: https://www.bing.com/webmasters
   - 查看索引状态和覆盖率

2. **Site命令检查**:
   ```
   site:www.artimagehub.com
   ```
   在Bing搜索引擎中查看已索引页面数量

3. **等待时间**: 通常24-72小时内完成索引
