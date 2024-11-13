/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {
      keyframes: {
        cloudMove1: {
          '0%, 100%': { transform: 'translateX(0)' },
          '12%': { transform: 'translateX(-10vw)' },
          '12.01%': { transform: 'translateX(95vw)'}
        },
        cloudMove2: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-24vw)' },
          '25.01%': { transform: 'translateX(74vw)'}
        },
        cloudMove3: {
          '0%, 100%': { transform: 'translateX(0)' },
          '45%': { transform: 'translateX(-42vw)' }, 
          '45.01%': { transform: 'translateX(58vw)'}
        },
        cloudMove4: {
          '0%, 100%': { transform: 'translateX(0)' },
          '59.5%': { transform: 'translateX(-60.5vw)' },
          '59.51%': { transform: 'translateX(37.5vw)'}
        },
        cloudMove5: {
          '0%, 100%': { transform: 'translateX(0)' },
          '76%': { transform: 'translateX(-78vw)' },
          '76.01%': { transform: 'translateX(22vw)'}
        },
        cloudMove6: {
          '0%, 100%': { transform: 'translateX(0)' },
          '97%': { transform: 'translateX(-97vw)' },
          '97.01%': { transform: 'translateX(3vw)'}
        },
        charMove: {
          '0%': { transform: 'translateX(0)' },
          // '97%': { transform: 'translateX(-97vw)' },
          '100%': { transform: 'translateX(45vw)'}
        },
        grassMove1: {
          '0%': { transform: 'translateX(0)' },
          '10%':{ transform: 'translateX(-10vw)'},
          '10.01%': { transform: 'translateX(95vw)'}
        },
        grassMove2: {
          '0%': { transform: 'translateX(0)' },
          '25%':{ transform: 'translateX(-30vw)'},
          '25.01%': { transform: 'translateX(76vw)'}
        },
        grassMove3: {
          '0%': { transform: 'translateX(0)' },
          '45%':{ transform: 'translateX(-45vw)'},
          '45.01%': { transform: 'translateX(60vw)'}
        },
        grassMove4: {
          '0%': { transform: 'translateX(0)' },
          '55%':{ transform: 'translateX(-63vw)'},
          '55.01%': { transform: 'translateX(42vw)'}
        },
        grassMove5: {
          '0%': { transform: 'translateX(0)' },
          '75%':{ transform: 'translateX(-80vw)'},
          '75.01%': { transform: 'translateX(28vw)'}
        },
        grassMove6: {
          '0%': { transform: 'translateX(0)' },
          '92%':{ transform: 'translateX(-98vw)'},
          '92.01%': { transform: 'translateX(4vw)'}
        },
      },
      animation: {
        cloudMove1: 'cloudMove1 10s linear 1s infinite',
        cloudMove2: 'cloudMove2 10s linear 1s infinite',
        cloudMove3: 'cloudMove3 10s linear 1s infinite',
        cloudMove4: 'cloudMove4 10s linear 1s infinite',
        cloudMove5: 'cloudMove5 10s linear 1s infinite',
        cloudMove6: 'cloudMove6 10s linear 1s infinite',
        charMove: 'charMove 5s linear 0s 1 forwards',
        grassMove1: 'grassMove1 10s linear 1s infinite',
        grassMove2: 'grassMove2 10s linear 1s infinite',
        grassMove3: 'grassMove3 10s linear 1s infinite',
        grassMove4: 'grassMove4 10s linear 1s infinite',
        grassMove5: 'grassMove5 10s linear 1s infinite',
        grassMove6: 'grassMove6 10s linear 1s infinite',
      }
    }
  },
  plugins: [],
}

