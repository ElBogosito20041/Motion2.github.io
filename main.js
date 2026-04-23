gsap.registerPlugin(MotionPathPlugin);

/* ── Swiper ── */
new Swiper('.f1', {
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  speed: 700,
  pagination: { el: '.swiper-pagination', clickable: true },
  keyboard: { enabled: true },
  mousewheel: { enabled: true },
});

/* ── Voitures — chacune avec sa propre vitesse et easing ── */
const cars = [

  /* Monaco — 3 voitures */
  { id: 'm1', path: 'p1', dur: 5.8,  ease: 'power3.inOut', offset: 0    },
  { id: 'm2', path: 'p1', dur: 8.5,  ease: 'power1.inOut', offset: 0.3  },
  { id: 'm3', path: 'p1', dur: 13.0, ease: 'sine.inOut',   offset: 0.62 },

  /* Spa — 4 voitures */
  { id: 's1', path: 'p2', dur: 5.2,  ease: 'circ.inOut',   offset: 0    },
  { id: 's2', path: 'p2', dur: 7.0,  ease: 'power2.inOut', offset: 0.22 },
  { id: 's3', path: 'p2', dur: 10.5, ease: 'power1.inOut', offset: 0.50 },
  { id: 's4', path: 'p2', dur: 16.0, ease: 'sine.inOut',   offset: 0.74 },

  /* Silverstone — 5 voitures */
  { id: 'v1', path: 'p3', dur: 4.8,  ease: 'power3.inOut', offset: 0    },
  { id: 'v2', path: 'p3', dur: 6.5,  ease: 'circ.inOut',   offset: 0.18 },
  { id: 'v3', path: 'p3', dur: 9.2,  ease: 'power2.inOut', offset: 0.38 },
  { id: 'v4', path: 'p3', dur: 13.5, ease: 'power1.inOut', offset: 0.60 },
  { id: 'v5', path: 'p3', dur: 19.0, ease: 'sine.inOut',   offset: 0.80 },

  /* Suzuka — 3 voitures */
  { id: 'z1', path: 'p4', dur: 6.0,  ease: 'power2.inOut', offset: 0    },
  { id: 'z2', path: 'p4', dur: 9.5,  ease: 'circ.inOut',   offset: 0.34 },
  { id: 'z3', path: 'p4', dur: 15.0, ease: 'sine.inOut',   offset: 0.68 },

  /* Interlagos — 4 voitures */
  { id: 'i1', path: 'p5', dur: 5.5,  ease: 'power3.inOut', offset: 0    },
  { id: 'i2', path: 'p5', dur: 7.8,  ease: 'power2.inOut', offset: 0.25 },
  { id: 'i3', path: 'p5', dur: 11.5, ease: 'power1.inOut', offset: 0.54 },
  { id: 'i4', path: 'p5', dur: 18.0, ease: 'sine.inOut',   offset: 0.78 },

];

cars.forEach(c => {
  gsap.to('#' + c.id, {
    duration: c.dur,
    ease: c.ease,
    repeat: -1,
    motionPath: {
      path: '#' + c.path,
      align: '#' + c.path,
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
      start: c.offset,
      end: c.offset + 1,
    }
  });
});
