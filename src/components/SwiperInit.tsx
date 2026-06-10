"use client";
import { useEffect } from "react";

export default function SwiperInit() {
  useEffect(() => {
    // Swiper が読み込まれるのを待って初期化
    const init = () => {
      const win = window as unknown as { Swiper?: new (sel: string, opts: object) => void; lightningSwiper?: unknown };
      if (!win.Swiper) return;
      if (document.querySelector(".lightning_swiper") && !win.lightningSwiper) {
        win.lightningSwiper = new win.Swiper(".lightning_swiper", {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          autoplay: { delay: 4000 },
          pagination: { el: ".swiper-pagination", clickable: true },
          navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
          effect: "slide",
        });
      }
    };

    // すぐに試み、JSがまだ読み込み中なら少し待つ
    init();
    const t1 = setTimeout(init, 300);
    const t2 = setTimeout(init, 800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return null;
}
