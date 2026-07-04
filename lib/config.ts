/**
 * Semua URL & kontak eksternal terpusat di sini.
 * Ubah di satu tempat — seluruh website ikut ter-update.
 */

export const SITE_URL = "https://tukangseafood.com";

export const ORDER_URL = "https://dashboard.tukangseafood.com/pesan";
export const ORDER_DISPLAY = "dashboard.tukangseafood.com/pesan";

export const WHATSAPP_NUMBER = "085156238473";

export const THREADS_HANDLE = "@tukangseafood";
export const THREADS_URL = "https://www.threads.com/@tukangseafood";

export function waLink(productName?: string) {
  const msg = productName
    ? `Halo Tukang Seafood, saya ingin memesan ${productName}. Apakah stoknya masih tersedia?`
    : "Halo Tukang Seafood, saya ingin memesan seafood segar. Apakah stoknya masih tersedia?";
  return `https://wa.me/6285156238473?text=${encodeURIComponent(msg)}`;
}

export const WHATSAPP_URL = waLink();
