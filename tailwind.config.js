module.exports = {
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      colors: {
        buttonBlue: '#3BA4D0',
        circle39: 'rgba(255, 255, 255, 0.39)',
        circle15: 'rgba(255, 255, 255, 0.15)',
        circle10: 'rgba(255, 255, 255, 0.10)',
        circle20: 'rgba(255, 255, 255, 0.20)',
        circle30: 'rgba(255, 255, 255, 0.30)',
        shadowButton: 'rgba(0, 0, 0, 0.25)'

      },
      fontSize: {
        'xxs': '10px'
      },
    },
    screens: {
      'hp': '375px',
      'tab': '600px',
      'sm': '640px',
      'lg': '1024px',
      'lepi': '1920px'
      
    }
  },
  plugins: [],
}
