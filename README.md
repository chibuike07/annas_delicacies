# Ann's SoleCraft Studio - Designer Shoes in Nigeria

Responsive landing page built with Next.js, TypeScript, and styled-components. It showcases Nigerian designer shoes by category and enables instant checkout via WhatsApp integration.

## Quick Start

**Requirements**

- Node.js 24.13.0
- npm 11.6.2

1. Install dependencies:
   - `npm install`
2. Run the dev server:
   - `npm run dev`
3. Build static output:
   - `npm run build`

## GitHub Pages Deployment

This project is configured for static export. For GitHub Pages:

1. Set `NEXT_PUBLIC_BASE_PATH` to your repository name (for example: `/annas_solecraft_studio`).
2. (Optional) Set `NEXT_PUBLIC_SITE_URL` to your full site origin (for example: `https://yourname.github.io`).
3. (Optional) Set `NEXT_PUBLIC_OG_IMAGE_URL` to a public PNG/JPG for WhatsApp previews.
4. (Optional) Set `NEXT_PUBLIC_LOGO_URL` to a public PNG/JPG for structured data.
5. Run `npm run build`.
6. Deploy the `out` folder using your preferred GitHub Pages workflow.

## Customize

- Update the WhatsApp number in `WHATSAPP_NUMBER` constant inside `src/lib/utils/dummyData.ts` (currently: 2348121485310).
- Replace placeholder product images inside `public/products` with real shoe and lifestyle images.
- Replace animated spotlight GIFs inside `public/animations` with your own footwear-themed billboards.
- Update product data inside `src/lib/utils/dummyData.ts` (products array and categories) to match your designer shoe catalog.
- Adjust the green UI palette in `src/app/globals.css` if you want a different theme.
