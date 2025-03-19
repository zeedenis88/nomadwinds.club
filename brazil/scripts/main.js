new Glide('.glide', {
  autoplay: 3000,
  hoverpause: true,
  peek: { 
    before: 150,
    after: 150
  },
  focusAt: 'center',
  gap: 32,
  type: 'carousel',
}).mount()