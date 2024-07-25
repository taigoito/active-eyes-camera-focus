/**
 * Photos
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

class Photos {
  constructor() {
    document.querySelectorAll('.photo').forEach(elem => {
      elem.addEventListener('mousemove', (event) => {
        const rect = elem.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const image = elem.querySelector('.photo__image');
        image.style.transform = '';
        image.style.transformOrigin = `${x}px ${y}px`;
      });

      elem.addEventListener('mouseleave', () => {
        const image = elem.querySelector('.photo__image');
        image.style.transform = 'scale(1)';
      });
    });
  }
}

new Photos();
