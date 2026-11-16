"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "semua" | "makanan" | "minuman";

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  category: "makanan" | "minuman";
  image: string;
}

const products: Product[] = [
  {
    id: "kripik-salak",
    name: "Kripik Salak Premium",
    price: "Rp 25.000",
    description: "Camilan renyah dari salak Nglumut pilihan dengan proses vacuum frying.",
    category: "makanan",
    image: "/assets/umkm/kripik-salak.png",
  },
  {
    id: "dodol-salak",
    name: "Dodol Salak Asli",
    price: "Rp 20.000",
    description: "Manis legit dengan aroma salak yang kuat, diolah secara tradisional.",
    category: "makanan",
    image: "/assets/umkm/dodol-salak.png",
  },
  {
    id: "kopi-biji-salak",
    name: "Kopi Biji Salak",
    price: "Rp 45.000",
    description: "Inovasi minuman menyehatkan tanpa kafein dari biji salak pilihan.",
    category: "minuman",
    image: "/assets/umkm/kopi-biji-salak.png",
  },
  {
    id: "sirup-salak",
    name: "Sirup Salak Nglumut",
    price: "Rp 35.000",
    description: "Segar dan alami, tanpa pemanis buatan. Cocok untuk hidangan pesta.",
    category: "minuman",
    image: "/assets/umkm/sirup-salak.png",
  },
  {
    id: "bakpia-salak",
    name: "Bakpia Salak",
    price: "Rp 30.000",
    description: "Khas Jogja-Magelang dengan isian salak yang lumer di mulut.",
    category: "makanan",
    image: "/assets/umkm/bakpia-salak.png",
  },
  {
    id: "manisan-salak",
    name: "Manisan Salak",
    price: "Rp 15.000",
    description: "Buah salak segar dalam rendaman sirup yang manis dan menyegarkan.",
    category: "makanan",
    image: "/assets/umkm/manisan-salak.png",
  },
  {
    id: "selai-salak",
    name: "Selai Salak",
    price: "Rp 20.000",
    description: "Olesan manis dari salak Nglumut pilihan sempurna untuk sarapan dan camilan keluarga.",
    category: "makanan",
    image: "/assets/umkm/selai-salak.png",
  },
  {
    id: "kurma-salak",
    name: "Kurma Salak",
    price: "Rp 25.000",
    description: "Inovasi olahan salak yang menyerupai kurma manis, bergizi, dan satu-satunya dari dapur KWT Ngudi Luhur.",
    category: "makanan",
    image: "/assets/umkm/kurma-salak.png",
  },
];

export default function ProdukUmkm() {
  const [activeCategory, setActiveCategory] = useState<Category>("semua");

  const filteredProducts =
    activeCategory === "semua"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="katalog-produk" className="w-full bg-[#FAF9F6] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-wider"
            style={{ fontFamily: '"BricolageGrotesque", sans-serif', color: "#D4622E" }}
          >
            PRODUK KAMI
          </p>
          <h2
            className="mb-4 text-3xl font-extrabold leading-tight text-[#1C3829] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
          >
            Olahan Salak Terbaik
            <br />
            dari Dapur KWT
          </h2>
          <p
            className="text-base text-gray-700"
            style={{ fontFamily: '"Literata", serif' }}
          >
            Setiap produk dibuat dari bahan baku Salak Nglumut pilihan — segar,
            organik, dan diproses dengan standar higienitas tinggi.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 mb-12 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white p-1.5 shadow-sm border border-gray-100">
            <button
              onClick={() => setActiveCategory("semua")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeCategory === "semua"
                  ? "bg-[#1C3829] text-white shadow-sm"
                  : "text-gray-700 hover:text-black hover:bg-gray-50"
              }`}
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Semua
            </button>
            <button
              onClick={() => setActiveCategory("makanan")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeCategory === "makanan"
                  ? "bg-[#1C3829] text-white shadow-sm"
                  : "text-gray-700 hover:text-black hover:bg-gray-50"
              }`}
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Makanan Ringan
            </button>
            <button
              onClick={() => setActiveCategory("minuman")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeCategory === "minuman"
                  ? "bg-[#1C3829] text-white shadow-sm"
                  : "text-gray-700 hover:text-black hover:bg-gray-50"
              }`}
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Minuman
            </button>
          </div>
        </div>

        {/* Product Grid: 4 cols */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((item) => {
            const waMessage = encodeURIComponent(
              `Halo KWT Ngudi Luhur, saya ingin memesan produk: ${item.name} (${item.price}). Mohon informasi ketersediaannya.`
            );
            const waUrl = `https://wa.me/6281234567890?text=${waMessage}`;

            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md"
              >
                {/* Product Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3
                      className="mb-1 text-lg font-bold text-[#1C3829]"
                      style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="mb-2 text-sm font-bold"
                      style={{
                        fontFamily: '"BricolageGrotesque", sans-serif',
                        color: "#D4622E",
                      }}
                    >
                      {item.price}
                    </p>
                    <p
                      className="mb-5 text-xs leading-relaxed text-gray-600 line-clamp-2"
                      style={{ fontFamily: '"Literata", serif' }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* WhatsApp Order Button */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-xs font-bold text-white shadow-xs transition-colors hover:opacity-95 active:scale-98"
                    style={{
                      fontFamily: '"BricolageGrotesque", sans-serif',
                      backgroundColor: "#D4622E",
                    }}
                  >
                    {/* WhatsApp Icon */}
                    <svg
                      className="h-3.5 w-3.5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
                    </svg>
                    Pesan via WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
