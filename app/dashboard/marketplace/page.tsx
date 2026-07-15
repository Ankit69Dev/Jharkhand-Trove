'use client';

import { useMemo, useState } from 'react';
import { ShoppingBag, X, Info, Home as HomeIcon } from 'lucide-react';
import {
  PRODUCTS,
  HOMESTAYS,
  CATEGORY_LABELS,
  type ProductCategory,
  type Product,
} from '@/lib/marketplaceData';

const FILTERS: Array<{ key: ProductCategory | 'all'; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'textiles', label: CATEGORY_LABELS.textiles },
  { key: 'metal_craft', label: CATEGORY_LABELS.metal_craft },
  { key: 'wall_art', label: CATEGORY_LABELS.wall_art },
  { key: 'scroll_painting', label: CATEGORY_LABELS.scroll_painting },
  { key: 'jewellery', label: CATEGORY_LABELS.jewellery },
  { key: 'bamboo_craft', label: CATEGORY_LABELS.bamboo_craft },
];

function formatINR(n: number) {
  return `\u20B9${n.toLocaleString('en-IN')}`;
}

export default function MarketplacePage() {
  const [active, setActive] = useState<ProductCategory | 'all'>('all');
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = useMemo(() => {
    if (active === 'all') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === active);
  }, [active]);

  const cartItems = useMemo(() => {
    return Object.entries(cart)
      .map(([id, qty]) => {
        const product = PRODUCTS.find((p) => p.id === id);
        return product ? { product, qty } : null;
      })
      .filter((x): x is { product: Product; qty: number } => x !== null);
  }, [cart]);

  const cartTotal = cartItems.reduce((sum, { product, qty }) => sum + product.priceINR * qty, 0);
  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  function addToCart(id: string) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }
  function removeFromCart(id: string) {
    setCart((prev) => {
      const next = { ...prev };
      if (next[id] <= 1) delete next[id];
      else next[id] -= 1;
      return next;
    });
  }

  return (
    <main className="bg-[#0A1410] min-h-screen">
      <section className="px-6 md:px-16 pt-32 pb-10 max-w-5xl mx-auto">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#7DA98A] mb-5">
          Marketplace
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-[#F3EEE1] leading-tight">
          Buy from the people who made it.
        </h1>
        <p className="font-sans text-[#9BB2A0] text-base leading-relaxed mt-5 max-w-xl">
          Tussar silk, Dokra metalwork, Sohrai murals — all recently
          GI-tagged craft traditions from Jharkhand, sold closer to the
          source than a city gift shop ever gets you.
        </p>

        <div className="flex items-start gap-3 mt-8 border border-[#3A2E1A] bg-[#1A140F] rounded-xl p-4 max-w-xl">
          <Info size={16} className="text-[#E0A458] shrink-0 mt-0.5" />
          <p className="font-sans text-xs text-[#B99B7E] leading-relaxed">
            These are sample listings illustrating real, GI-tagged craft
            categories — not live vendors or bookable stays yet.
            Checkout is disabled until real artisans and homestay partners
            onboard.
          </p>
        </div>
      </section>

      {/* Cart button */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed top-24 right-6 z-40 flex items-center gap-2 bg-[#E0A458] text-[#2C1B0A] text-sm font-medium px-4 py-2 rounded-full shadow-lg hover:bg-[#eeb672] transition-colors"
      >
        <ShoppingBag size={16} />
        {cartCount > 0 ? `${cartCount} item${cartCount > 1 ? 's' : ''}` : 'Cart'}
      </button>

      {/* Products */}
      <section className="px-6 md:px-16 pb-16 max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`font-sans text-sm px-4 py-2 rounded-full border transition-colors ${
                active === f.key
                  ? 'bg-[#E0A458] text-[#2C1B0A] border-[#E0A458]'
                  : 'border-[#24352C] text-[#9BB2A0] hover:border-[#E0A458]/50 hover:text-[#E0A458]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="border border-[#22352B] rounded-2xl p-6 bg-[#0C1712] flex flex-col"
            >
              <span className="font-sans text-[10px] tracking-[0.12em] uppercase text-[#5DCAA5] mb-2">
                {CATEGORY_LABELS[product.category]}
              </span>
              <h3 className="font-serif text-lg text-[#F3EEE1]">{product.name}</h3>
              <p className="font-sans text-xs text-[#5A6E60] mt-1 mb-3">
                {product.origin}
              </p>
              <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed flex-1">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-5">
                <span className="font-serif text-lg text-[#E0A458]">
                  {formatINR(product.priceINR)}
                </span>
                <button
                  onClick={() => addToCart(product.id)}
                  className="font-sans text-xs bg-[#1C2B23] border border-[#2A3B31] text-[#F3EEE1] px-3 py-2 rounded-full hover:border-[#E0A458]/60 hover:text-[#E0A458] transition-colors"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Homestays */}
      <section className="px-6 md:px-16 pb-24 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <HomeIcon size={20} className="text-[#E0A458]" strokeWidth={1.6} />
          <h2 className="font-serif text-2xl text-[#F3EEE1]">Homestays</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {HOMESTAYS.map((stay) => (
            <div
              key={stay.id}
              className="border border-[#22352B] rounded-2xl p-6 bg-[#0C1712]"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-serif text-lg text-[#F3EEE1]">{stay.name}</h3>
                <span className="font-serif text-base text-[#E0A458] whitespace-nowrap ml-3">
                  {formatINR(stay.priceINRPerNight)}
                  <span className="font-sans text-xs text-[#5A6E60]">/night</span>
                </span>
              </div>
              <p className="font-sans text-xs text-[#5A6E60] mb-3">{stay.location}</p>
              <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed">
                {stay.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cart drawer */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end"
          onClick={() => setCartOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm h-full bg-[#0F1C16] border-l border-[#2A3B31] flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#22352B]">
              <p className="font-serif text-lg text-[#F3EEE1]">Your cart</p>
              <button
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
                className="text-[#9BB2A0] hover:text-[#E0A458] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {cartItems.length === 0 && (
                <p className="font-sans text-sm text-[#5A6E60]">Cart is empty.</p>
              )}
              {cartItems.map(({ product, qty }) => (
                <div key={product.id} className="flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-sans text-sm text-[#F3EEE1]">{product.name}</p>
                    <p className="font-sans text-xs text-[#5A6E60]">
                      {formatINR(product.priceINR)} × {qty}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="w-6 h-6 flex items-center justify-center rounded-full border border-[#2A3B31] text-[#9BB2A0] hover:text-[#E0A458] transition-colors"
                    >
                      −
                    </button>
                    <span className="font-sans text-xs text-[#F3EEE1] w-4 text-center">
                      {qty}
                    </span>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="w-6 h-6 flex items-center justify-center rounded-full border border-[#2A3B31] text-[#9BB2A0] hover:text-[#E0A458] transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-5 py-4 border-t border-[#22352B]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-[#9BB2A0]">Total</span>
                <span className="font-serif text-lg text-[#E0A458]">
                  {formatINR(cartTotal)}
                </span>
              </div>
              <button
                disabled
                title="Checkout is disabled until real vendors onboard"
                className="w-full font-sans text-sm bg-[#3A2E1A] text-[#7A6A4E] px-4 py-3 rounded-full cursor-not-allowed"
              >
                Checkout (sample catalog)
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}