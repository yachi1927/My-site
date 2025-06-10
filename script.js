document.addEventListener('DOMContentLoaded', () => {
      const track = document.querySelector('.carousel-track');
      const items = document.querySelectorAll('.carousel-item');
      const prevBtn = document.querySelector('.carousel-button.prev');
      const nextBtn = document.querySelector('.carousel-button.next');

      let index = 0;

      const updatePosition = () => {
        const itemWidth = items[0].offsetWidth;
        track.style.transform = `translateX(-${index * itemWidth}px)`;
      };

      prevBtn.addEventListener('click', () => {
        index = (index - 1 + items.length) % items.length;
        updatePosition();
      });

      nextBtn.addEventListener('click', () => {
        index = (index + 1) % items.length;
        updatePosition();
      });

      window.addEventListener('resize', updatePosition);
      updatePosition();
    });