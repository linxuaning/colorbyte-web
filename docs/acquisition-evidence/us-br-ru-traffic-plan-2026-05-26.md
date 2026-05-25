# US / Brazil / Russia Qualified Traffic Plan - 2026-05-26

Goal: drive buyer-intent traffic toward >=10 paid ArtImageHub orders/day. Priority order from founder: United States first, Brazil second, Russia third.

## Market Priorities

| Market | Current evidence | Action today | Target pages |
| --- | --- | --- | --- |
| US | Paid starts/successes already cluster on high-intent SEO/LLM pages, especially comparison, Gemini, enhancement apps, blur/fix pages. | Scale proven pages through Bing/Copilot recrawl, Quora/Reddit answers, and LLM-citation formatting. Do not dilute with broad social. | `/best-photo-restoration-software`, `/blog/best-photo-enhancement-apps-2026`, `/blog/can-gemini-restore-old-photos`, `/photo-restoration-no-subscription`, `/photo-restoration-cost` |
| Brazil | Two pt-BR buyer pages already exist and are in sitemap. Intent is purchase-model and price-sensitive. | Submit pt-BR buyer pages for crawl, use Portuguese answers on Quora/Reddit/FB groups only where rules allow, route to no-subscription and cost pages. | `/pt-BR/restaurar-fotos-antigas-sem-assinatura`, `/pt-BR/preco-restauracao-fotos-antigas` |
| Russia | No buyer-intent ru pages existed before this batch. | Ship two explicit `/ru/...` buyer pages and submit for crawl; use Russian-language search/answer distribution with disclosure. | `/ru/restavraciya-staryh-foto-bez-podpiski`, `/ru/stoimost-restavracii-staryh-foto` |

## Ready-to-Use UTM Links

### US

- Quora old-photo app answer: `https://artimagehub.com/blog/best-photo-enhancement-apps-2026?utm_source=quora&utm_medium=answer&utm_campaign=us_high_intent&utm_content=old_photo_app_answer`
- Quora free restoration answer: `https://artimagehub.com/blog/best-free-photo-restoration-apps?utm_source=quora&utm_medium=answer&utm_campaign=us_high_intent&utm_content=free_restoration_answer`
- Reddit genealogy help comment: `https://artimagehub.com/photo-restoration-no-subscription?utm_source=reddit&utm_medium=community&utm_campaign=us_high_intent&utm_content=genealogy_no_subscription`
- Bing/Copilot citation target: `https://artimagehub.com/best-photo-restoration-software?utm_source=copilot.com&utm_medium=llm_referral&utm_campaign=us_high_intent&utm_content=software_comparison`

### Brazil

- Quora/answer target: `https://artimagehub.com/pt-BR/restaurar-fotos-antigas-sem-assinatura?utm_source=quora&utm_medium=answer&utm_campaign=br_high_intent&utm_content=sem_assinatura`
- Cost-sensitive answer target: `https://artimagehub.com/pt-BR/preco-restauracao-fotos-antigas?utm_source=quora&utm_medium=answer&utm_campaign=br_high_intent&utm_content=preco_restauracao`
- Community target: `https://artimagehub.com/pt-BR/restaurar-fotos-antigas-sem-assinatura?utm_source=facebook&utm_medium=community&utm_campaign=br_high_intent&utm_content=fotos_antigas_familia`

### Russia

- Russian no-subscription answer target: `https://artimagehub.com/ru/restavraciya-staryh-foto-bez-podpiski?utm_source=otvet&utm_medium=answer&utm_campaign=ru_high_intent&utm_content=bez_podpiski`
- Russian cost answer target: `https://artimagehub.com/ru/stoimost-restavracii-staryh-foto?utm_source=otvet&utm_medium=answer&utm_campaign=ru_high_intent&utm_content=stoimost`
- Russian forum/community target: `https://artimagehub.com/ru/restavraciya-staryh-foto-bez-podpiski?utm_source=community&utm_medium=forum&utm_campaign=ru_high_intent&utm_content=family_archive_restore`

## Search / Answer Queries

US:

- `best app to restore old photos`
- `restore old family photos online`
- `photo restoration no subscription`
- `how much does photo restoration cost`
- `can Gemini restore old photos`

Brazil:

- `restaurar fotos antigas sem assinatura`
- `restauração de fotos antigas preço`
- `quanto custa restaurar foto antiga`
- `restaurar foto antiga online`
- `app para restaurar fotos antigas`

Russia:

- `восстановить старое фото онлайн`
- `реставрация старых фото без подписки`
- `сколько стоит реставрация старых фото`
- `реставрация семейных фотографий`
- `улучшить старое фото онлайн`

## Post-Deploy Crawl Queue

Submit after deploy, not before:

```json
{
  "host": "artimagehub.com",
  "urlList": [
    "https://artimagehub.com/best-photo-restoration-software",
    "https://artimagehub.com/blog/best-photo-enhancement-apps-2026",
    "https://artimagehub.com/blog/can-gemini-restore-old-photos",
    "https://artimagehub.com/photo-restoration-no-subscription",
    "https://artimagehub.com/photo-restoration-cost",
    "https://artimagehub.com/pt-BR/restaurar-fotos-antigas-sem-assinatura",
    "https://artimagehub.com/pt-BR/preco-restauracao-fotos-antigas",
    "https://artimagehub.com/ru/restavraciya-staryh-foto-bez-podpiski",
    "https://artimagehub.com/ru/stoimost-restavracii-staryh-foto"
  ]
}
```

## Manual Distribution Rules

- Post only where the question already has buyer intent: old family photo restoration, no subscription, one-time payment, cost, Gemini/Photoshop alternatives.
- Disclose relationship when linking: "I work on ArtImageHub; this comparison may help."
- No auto-comments, no private-message blasts, no broad social posts, no Product Hunt-style launch while payment incidents remain under watch.
- Record every action with: market, query/thread URL, target UTM, screenshot, 24h sessions, payment starts, paid successes.

## Success Signals

- US: more `blog_direct`, `buyer_guide_direct`, `quora`, `reddit`, `copilot.com`, `chatgpt.com` payment starts.
- Brazil: first clean pt-BR sessions reaching checkout from `br_high_intent` UTMs.
- Russia: indexed `/ru/...` pages and any checkout start from `ru_high_intent` UTMs.
