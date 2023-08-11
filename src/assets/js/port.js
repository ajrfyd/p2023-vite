import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const port = () => {
  gsap.registerPlugin(ScrollTrigger);

  const horSection = gsap.utils.toArray(".port__item");
  console.log(horSection)

  gsap.to(horSection, {
    xPercent: -120 * (horSection.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: "#port",
      start: "top 56px",
      end: "+=3000",
      pin: true,
      scrub: 1,
      markers: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
});

};


console.log(gsap);