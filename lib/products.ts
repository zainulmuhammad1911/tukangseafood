export type Product = {
  name: string;
  slug: string;
  src: string;
  category: "Ikan" | "Udang" | "Cumi" | "Kepiting";
  note: string;
  price: number; // starting price in Rupiah per kg
};

// URL & kontak eksternal dipusatkan di lib/config.ts;
// re-export agar import lama tetap berfungsi.
export {
  ORDER_URL,
  ORDER_DISPLAY,
  THREADS_HANDLE,
  THREADS_URL,
  waLink,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "./config";

export function formatPrice(price: number) {
  return `Rp${price.toLocaleString("id-ID")}/kg`;
}

export const products: Product[] = [
  { name: "Cumi Segar", slug: "cumi", src: "/products/cumi.png", category: "Cumi", note: "Cumi utuh segar, tekstur kenyal alami", price: 65000 },
  { name: "Udang Tiger", slug: "udang-tiger", src: "/products/udang-tiger.png", category: "Udang", note: "Udang tiger besar, manis dan padat", price: 169000 },
  { name: "Udang Vaname", slug: "udang-vaname", src: "/products/udang-vaname.png", category: "Udang", note: "Vaname pilihan, segar setiap hari", price: 109000 },
  { name: "Kepiting", slug: "kepiting", src: "/products/kepiting.png", category: "Kepiting", note: "Kepiting hidup, daging penuh", price: 129000 },
  { name: "Ikan Kakap Merah", slug: "ikan-kakap-merah", src: "/products/ikan-kakap-merah.png", category: "Ikan", note: "Kakap merah segar dari muara", price: 79000 },
  { name: "Ikan Kerapu Laut", slug: "ikan-kerapu", src: "/products/ikan-kerapu.png", category: "Ikan", note: "Kerapu premium, daging lembut", price: 69000 },
  { name: "Ikan Bawal Laut", slug: "ikan-bawal", src: "/products/ikan-bawal.png", category: "Ikan", note: "Bawal laut segar pilihan", price: 69000 },
  { name: "Ikan Gurame", slug: "ikan-gurame", src: "/products/ikan-gurame.png", category: "Ikan", note: "Gurame ukuran konsumsi terbaik", price: 64500 },
  { name: "Ikan Kuwe", slug: "ikan-kuwe", src: "/products/ikan-kuwe.png", category: "Ikan", note: "Kuwe segar, cocok bakar & kukus", price: 69000 },
  { name: "Ikan Napoleon", slug: "ikan-napoleon", src: "/products/ikan-napoleon.png", category: "Ikan", note: "Napoleon eksklusif, stok terbatas", price: 69000 },
  { name: "Ikan Kembung", slug: "ikan-kembung", src: "/products/ikan-kembung.png", category: "Ikan", note: "Kembung segar harian", price: 59000 },
];
