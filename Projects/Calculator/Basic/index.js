const display = document.getElementById('display')
const numbers = document.querySelectorAll('.btn')
const random = Math.floor(Math.random() * 100)
const random2 = Math.floor(Math.random() * random)

// Add event listeners to number buttons
numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    const value = e.target.innerText
    if (value === '=') {
      if (display.value === '') return
      try {
        display.value = eval(display.value)
      } catch (e) {
        display.value = 'error'
      }
    } else if (value === 'C') {
      display.value = display.value.slice(0, -1)
    } else if (value === 'AC') {
      display.value = ''
    } else {
      display.value += value
    }
    // display.value += e.target.innerText
  })
})

window.addEventListener('load', () => {
  display.value += `${random}+${random2}`
})
