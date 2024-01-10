let tl = gsap.timeline();

tl.from("nav h1, nav #right a", {
  y: -80,
  duration: 0.1,
  delay: 0.1,
  stagger: 1,
});



tl.from("img", {
  scale: 0,
  opacity: 0,
  duration: 0.3,
  delay: 0.3,
});

tl.from("#shivam h1", {
  x: 900,
  duration: 0.2,
  delay: 0.2,
  stagger: 0.5,
});

tl.from("footer", {
  opacity: 0,
  duration: 1,
  delay: 1,
});

const links = document.querySelectorAll('#right a');

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { scale: 1.2, textDecoration: 'underline', duration: 0.3 });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(link, { scale: 1, textDecoration: 'none', duration: 0.3 });
    });
  });