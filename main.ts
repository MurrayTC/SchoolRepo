basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    control.waitMicros(10)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    control.waitMicros(10)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    control.waitMicros(10)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    control.waitMicros(10)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    control.waitMicros(10)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
    control.waitMicros(4)
    basic.showLeds(`
        . . . # .
        # # # # .
        . # # # .
        . # # # #
        . # . . .
        `)
    control.waitMicros(4)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    control.waitMicros(4)
    basic.showLeds(`
        . # . . .
        . # # # #
        . # # # .
        # # # # .
        . . . # .
        `)
    control.waitMicros(4)
    basic.showLeds(`
        . . . # .
        # # # # .
        . # # # .
        . # # # #
        . # . . .
        `)
    control.waitMicros(4)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    control.waitMicros(4)
    basic.showLeds(`
        . # . . .
        . # # # #
        . # # # .
        # # # # .
        . . . # .
        `)
})
