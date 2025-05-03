# IPM‑32 Personality Test – React Template

## 빠른 시작

```bash
git clone <your-repo-url>
cd ipm32-site
npm install
npm start         # http://localhost:3000
```

## 배포

- **Netlify**: `npm run build` 후 자동.
- **Vercel**: 저장소 연결만 하면 자동.

## 설정

1. `/public/index.html`  
   - `<script data-ad-client="ca-pub-XXXXXXXX" ...></script>` → **Google AdSense** 코드를 붙여넣으세요.
   - `Kakao SDK` script의 `appKey` 값을 본인 키로 교체하세요.

2. `/src/data/descriptions.ts`  
   - ChatGPT가 제공한 **ipm32_full_descriptions.json** 파일을 `/src/data/full.json`으로 복사하고 import 경로를 유지하세요.

3. 캐릭터 PNG 32장을 `/src/assets/images` 폴더에, 파일명은 `EHCAO.png` 등으로 넣어주세요.

## 빌드 커맨드

```bash
npm run build
```

빌드 결과는 `/build` 폴더에 생성됩니다.
