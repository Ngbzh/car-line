basic.forever(function () {
    if (5 == k_Bit.ultra() && k_Bit.ultra() == 30) {
        k_Bit.carStop()
        k_Bit.run(DIR.RunForward, 30)
        basic.showNumber(Math.round(k_Bit.ultra()))
        basic.showIcon(IconNames.Heart)
    } else {
        k_Bit.run(DIR.TurnLeft, 30)
    }
})
