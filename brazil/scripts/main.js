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