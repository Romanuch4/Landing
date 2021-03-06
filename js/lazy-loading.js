(() => {
  const images = document.querySelectorAll('[data-src]');
  const imgOptions = {
    threshold: 0,
    tootMargin: '0px 0px 300px 0px',
  };

  const preloadImage = img => {
    const src = img.getAttribute("data-src");
    if (!src) {
      return;
    };

    img.src = src;
  };

  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(
      entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          preloadImage(entry.target);
          imgObserver.unobserve(entry.target);
        };
      }
    );
  }, imgOptions);

  images.forEach(image => {
    imgObserver.observe(image);
  });
})();