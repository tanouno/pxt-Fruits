enum Fruits {
    //% block="Banana"
    Banana,
    //% block="Mela"
    Apple,
    //% block="Pesca"
    Peach,
    //% block="Limone"
    Lemon
}

//% color="#AA278D"
namespace basic {

    //% block="Scegli la frutta %Friuts"
    export function turn(choice: Fruits) {
        switch(choice) {
            case Banana:
                basic.showLeds(`
                    . . # . .
                    . # . . .
                    . # . . .
                    . # . . .
                    . . # . .
                    `)break;
            
            case Apple:
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # . . . #
                    . # . # .
                    . . # . .
                    `)break;
            case Peach:
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # . . . #
                    # . . . #
                    . # # # .
                    `)break;
            case Lemon:
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    # . . . #
                    # . . . #
                    . # # # .
                    `)break;
        }

    }
}
