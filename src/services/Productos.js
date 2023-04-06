export class Productos{ 
    static products= [ 
    {
        "id": "p01",   
        "imagen": "./img/p01.jpg",
        "nombre": "Futón Clásico",
        "descripcion": "Futón de tela gris grafito con base metálica reforzada. Dimensiones 170 x 70 x 81 cm.",
        "precio": "$300.000",
        "cantidad": 0,
        "stock": 10,
        "categoria": "",
        "etiqueta":""
        },
    {
        "id": "p02",
        "imagen": "./img/p02.jpg",
        "nombre": "Lámpara mesa",
        "descripcion": "Lámpara metal negro mate. Dimensiones 45 x 20 x 20 cm.",
        "precio": "$25.000",
        "cantidad": 0,
        "stock": 10,
        "categoria": "",
        "etiqueta":""
    },
    {   
        "id": "p03",
        "imagen": "./img/p03.jpg",
        "nombre": "Silla Velvet",
        "descripcion": "Silla tela aterciopelada gris grafito con base de madera. Dimensiones 100 x 60 x 70cm ",
        "precio": "$100.000",
        "cantidad": 0,
        "stock": 10,
        "categoria": "",
        "etiqueta":""
    },
    {
        "id": "p04",
        "imagen": "./img/p04.jpg",
        "nombre": "Estante Victoria",
        "descripcion": "Estante madera teñida negro mate. Dimensiones 200 x 80 x 40 cm.",
        "precio": "$420.000",
        "cantidad": 0,
        "stock": 10,"categoria": "",
        "etiqueta":""
    },
    {
        "id": "p05",
        "imagen": "./img/p05.jpg",
        "nombre": "Lampara Albert",
        "descripcion": "Lámpara de pie con base metálida y pantalla semi rigida. Dimensiones 150 x 40 x 60cm.",
        "precio": "$80.000",
        "cantidad": 0,
        "stock": 10,
        "categoria": "",
        "etiqueta":""
    },
    {
        "id": "p04",
        "imagen": "./img/p06.jpg",
        "nombre": "Silla Coral",
        "descripcion": "Silla tela aterciopelada verde. Soporte madera color negro mate. Dimensiones 90 x 60 x 70cm.",
        "precio": "$120.000",
        "cantidad": 0,
        "stock": 10,
        "categoria": "",
        "etiqueta":""
    },
    {
        "id": "p05",
        "imagen": "./img/p07.jpg",
        "nombre": "Sofá Sofía",
        "descripcion": "Sofá de 3 cuerpos blanco invierno, Soporte madera color natiral. Dimensiones 170 x 70 x 81 cm.",
        "precio": "$500.000",
        "cantidad": 0,
        "stock": 10,
        "categoria": "",
        "etiqueta":""
    },
     {
        "id": "p06",
        "imagen": "./img/p08.jpg",
        "nombre": "Closet Dark Nordic",
        "descripcion": "Closet de dos puerta y dos cajones cierre suave. Melamina 18mm negro mate y alamo. Dimensiones 200 x 98 x 58 cm.",
        "precio": "380000",
        "cantidad": 0,
        "stock": 10,
        "categoria": "",
        "etiqueta":""
    },
    {
        "id": "p07",
        "imagen": "./img/p09.jpg",
        "nombre": "Mesa Dark Thin",
        "descripcion": "Mesa comedor negro mate, superficie melamina 18mm y base metálica. Dimensiones 110 x 67 x 75 cm.",
        "precio": "200000",
        "cantidad": 0,
        "stock": 10,
        "categoria": "",
        "etiqueta":""
    },
    {
        "id": "p08",
        "imagen": "./img/p10.jpg",
        "nombre": "Escritorio Dark Nordic",
        "descripcion": "Escritorio con dos cajones cierre suave. Superficie de madera tinte negro y base metálica. Dimensiones 110 x 60 x 75 cm.",
        "precio": "160000",
        "cantidad": 0,
        "stock": 10,
        "categoria": "",
        "etiqueta":""
    },
    {
        "id": "p09",
        "imagen": "./img/p11.jpg",
        "nombre": "Escritorio Brown Mini",
        "descripcion": "Escritorio melamina 18mm color chocolate y base metal. Cajón cierre suave. Dimensiones 65 x 40 x 75 cm.",
        "precio": "110000",
        "cantidad": 0,
        "stock": 10,
        "categoria": "",
        "etiqueta":""
    },
    {
        "id": "p10",
        "imagen": "./img/p12.jpg",
        "nombre": "Silla Dark Thin",
        "descripcion": "Silla estructura metálica negro mate. Asiento y respaldo madera tinte negro. Dimensiones 55 x 53 x 78 cm.",
        "precio": "100000",
        "cantidad": 0,
        "stock": 10,
        "categoria": "",
        "etiqueta":""
    }
    ];

    static getAllProducts(){
        return this.products;
    }
}


