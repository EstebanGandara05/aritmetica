input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(n1)
    basic.showNumber(n2)
    basic.showString(Palabra1)
})
input.onButtonPressed(Button.A, function () {
    suma = n1 + n2
    basic.showNumber(suma)
    Palabra1 = "sumaste"
})
input.onButtonPressed(Button.AB, function () {
    multiplicacion = n1 * n2
    basic.showNumber(multiplicacion)
    Palabra1 = "Multiplicaste"
})
input.onButtonPressed(Button.B, function () {
    resta = n1 - n2
    basic.showNumber(resta)
    Palabra1 = "restaste"
})
let multiplicacion = 0
let resta = 0
let suma = 0
let Palabra1 = ""
let n2 = 0
let n1 = 0
n1 = randint(1, 5)
n2 = randint(1, 5)
Palabra1 = "-"
suma = 0
resta = 0
multiplicacion = 0
