// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";

// gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start : any) {
  useEffect(() => {
    let scroll : any;
    import("locomotive-scroll").then((locomotiveModule) : any => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("#main-container"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
        getDirection: true,
        touchMultiplier: 2.5,
        lerp: 0.08,
        multiplier: 1,
        firefoxMultiplier: 0,
      });
    });

    // `useEffect`'s cleanup phase
    return () => scroll.destroy();
  });
}
