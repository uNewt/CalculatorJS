class Calc {
    constructor(prevText, currText) {
        this.prevText = prevText
        this.currText = currText
        this.clear()
    }

    clear() {
        this.currNum = ''
        this.prevNum = ''
        this.op = undefined
    }

    del() {

    }

    appendNum(num) {
        this.currNum = this.currNum.toString() + num.toString()
    }

    chooseOp(op) {

    }

    compute() {

    }

    updateDisplay() {
        this.currText.innerText = this.currNum
    }
}

// Initiate Objects
const numButtons = document.querySelectorAll('[data-num]')
const opButtons = document.querySelectorAll('[data-op]')
const eqButton = document.querySelector('[data-eq]')
const delButton = document.querySelector('[data-del]')
const acButton = document.querySelector('[data-ac]')
const prevText = document.querySelector('[data-prev]')
const currText = document.querySelector('[data-curr]')

// Initiate Calculator
const calculator = new Calc(prevText, currText)

// Button Methods
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText)
        calculator.updateDisplay()
    })
})