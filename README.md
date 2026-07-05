# Tukang Seafood — Premium Scrollytelling Landing Page

Landing page premium untuk brand **Tukang Seafood**, dibangun dengan Next.js 15 (App Router), Tailwind CSS v4, Framer Motion, GSAP + Lenis smooth scrolling. Hanya menggunakan logo dan 11 foto produk yang di-upload (`public/logo.png`, `public/products/`).

## Struktur

- `components/Hero.tsx` — hero full-screen: logo di tengah, produk melayang dengan parallax mouse, bubbles & ocean mist
- `components/ScrollStory.tsx` — "Freshness Starts at the Source", editorial scene dengan scale/blur/light-sweep scroll-driven
- `components/ProductShowcase.tsx` — 11 produk + tile CTA, reveal elegan, hover lift & glow, glassmorphism
- `components/Features.tsx` — 5 kartu keunggulan
- `components/Gallery.tsx` — masonry 3 kolom dengan parallax per kolom, hover zoom, lightbox
- `components/Testimonials.tsx`, `components/Navbar.tsx`, `components/Footer.tsx` — CTA WhatsApp besar
- `components/Ocean.tsx` — bubbles & mist (deterministik, SSR-safe)
- `components/SmoothScroll.tsx`, `components/Preloader.tsx`

## Menjalankan

Butuh Node.js 18+ (install dari https://nodejs.org).

```bash
npm install
npm run dev      # development di http://localhost:3000
npm run build && npm start   # production
```

## Kontak & pemesanan

Semua URL & kontak eksternal terpusat di [`lib/config.ts`](lib/config.ts):
- WhatsApp: 085156238473 (`waLink()` otomatis mengisi pesan dengan nama produk)
- Pesan online: https://tukangseafood.com/pesan
- Threads: [@tukangseafood](https://www.threads.com/@tukangseafood)

Harga per produk juga diatur di file yang sama (`price`, dalam Rupiah per kg; `null` = "Harga mengikuti ukuran").

## Deploy ke Netlify

Sudah disiapkan `netlify.toml` (build `npm run build`, Node 22, plugin `@netlify/plugin-nextjs`). Cukup hubungkan repo ke Netlify atau jalankan `netlify deploy --build --prod` dengan Netlify CLI.
