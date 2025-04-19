const slideContainer = document.querySelector('.glide__slides');
const totalImages = 21;

for (let i = 1; i <= totalImages; i++) {
  const li = document.createElement('li');
  li.className = 'glide__slide';

  const a = document.createElement('a');
  a.href = `./images/gallery/${i}.webp`;
  a.setAttribute('data-fslightbox', '');

  const img = document.createElement('img');
  img.src = `./images/gallery/${i}.webp`;
  img.alt = `Image ${i}`;

  a.appendChild(img);
  li.appendChild(a);
  slideContainer.appendChild(li);
}

new Glide('.glide', {
  autoplay: 3000,
  hoverpause: true,
  peek: { 
    before: 50,
    after: 50
  },
  focusAt: 'center',
  gap: 32,
  type: 'carousel',
  perView: 2,
  breakpoints: {
    767: {
      gap: 10,
      perView: 0.9 
    }
  }
}).mount()