const products = [
    {
        id:1,
        name:"Pulsador 24mm",
        price:200,
        img:"/products/pulsador-24mm.jpg",
        stock:50,
        description:"Pulsador de 24 mm para placa arcade.",
    },
    {
        id:2,
        name:"Pulsador LED",
        price:350,
        img:"/products/pulsador-led.jpg",
        stock:30,
        description:"Pulsador LED 24 mm para placa arcade.",
    },
    {
        id:3,
        name:"Placa Zero Delay",
        price:600,
        img:"/products/placa-zerodelay.jpg",
        stock:50,
        description:"Placa Zero Delay USB para un jugador.",
    },
    {
        id:4,
        name:"Joystick bolita",
        price:1200,
        img:"/products/joystick-bolita.jpg",
        stock:20,
        description:"Joystick con palanca bolita para arcade.",
    },
    {
        id:5,
        name:"Joystick perita",
        price:1200,
        img:"/products/joystick-perita.jpg",
        stock:20,
        description:"Joystick con palanca perita para arcade.",
    },
    {
        id:6,
        name:"Cables para pulsador",
        price:150,
        img:"/products/cables-pulsador.jpg",
        stock:100,
        description:"Combo 12 cables para pulsadores arcade.",
    },
    {
        id:7,
        name:"Cable USB Zero Delay",
        price:200,
        img:"/products/cable-usb-zerodelay.jpg",
        stock:100,
        description:"Interfaz USB para placas arcade Zero Delay.",
    },
    {
        id:8,
        name:"Cable plano joystick",
        price:200,
        img:"/products/cable-plano-joystick.jpg",
        stock:100,
        description:"Interfaz para joystick y placas arcade Zero Delay.",
    }
]

const getProducts = () => {

    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })
}

export default getProducts;