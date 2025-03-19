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
}).mount()