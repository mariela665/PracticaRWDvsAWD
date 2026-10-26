const express = require('express');
const useragent = require('express-useragent');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));


app.use('/Img', express.static(path.join(__dirname, '../Img')));
// Conectamos con los estilos CSS 
app.use(express.static(path.join(__dirname, '../Responsive')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '.')); 

app.use(useragent.express());


const productos = [
    { 
        nombre: "Intel Core i5", 
        categoria: "Procesador", 
        precio: 3200, 
        detalle: "10 núcleos, hasta 4.6 GHz", 
        imagenAlta: "/Img/I5.jpg",      
        imagenBaja: "/Img/I5 Chica.jpg" 
    },
    { 
        nombre: "AMD Ryzen 7", 
        categoria: "Procesador", 
        precio: 4500, 
        detalle: "8 núcleos, hasta 5.0 GHz", 
        imagenAlta: "/Img/ryzen7.jpg", 
        imagenBaja: "/Img/ryzen7 Chica.jpg" 
    },
    { 
        nombre: "Intel Core i9", 
        categoria: "Procesador", 
        precio: 8500, 
        detalle: "24 núcleos, alto rendimiento", 
        imagenAlta: "/Img/i9.jpg", 
        imagenBaja: "/Img/i9 Chica.jpg" 
    },
    { 
        nombre: "RAM DDR4 16GB", 
        categoria: "Memoria RAM", 
        precio: 750, 
        detalle: "16 GB, 3200 MHz", 
        imagenAlta: "/Img/ddr4.jpg", 
        imagenBaja: "/Img/ddr4 Chica.jpg" 
    },
    { 
        nombre: "RAM DDR5 32GB", 
        categoria: "Memoria RAM", 
        precio: 1800, 
        detalle: "32 GB, 5600 MHz", 
        imagenAlta: "/Img/ddr5.jpg", 
        imagenBaja: "/Img/ddr5 Chica.jpg" 
    },
    { 
        nombre: "RAM DDR5 64GB", 
        categoria: "Memoria RAM", 
        precio: 3200, 
        detalle: "64 GB, 6000 MHz", 
        imagenAlta: "/Img/ddr32.jpg", 
        imagenBaja: "/Img/ddr32 Chica.jpg" 
    },
    { 
        nombre: "SSD 1TB", 
        categoria: "Almacenamiento", 
        precio: 1300, 
        detalle: "NVMe, alta velocidad", 
        imagenAlta: "/Img/ssd.jpg", 
        imagenBaja: "/Img/ssd chica.jpg" 
    },
    { 
        nombre: "SSD 2TB", 
        categoria: "Almacenamiento", 
        precio: 2400, 
        detalle: "NVMe, 2 TB", 
        imagenAlta: "/Img/ssd2t.jpg", 
        imagenBaja: "/Img/ssd2t Chica.jpg" 
    },
    { 
        nombre: "HDD 4TB", 
        categoria: "Almacenamiento", 
        precio: 1900, 
        detalle: "4 TB, 7200 RPM", 
        imagenAlta: "/Img/hdd grande.jpg", 
        imagenBaja: "/Img/hdd.jpg" 
    },
    { 
        nombre: "RTX 4060", 
        categoria: "Tarjeta gráfica", 
        precio: 6500, 
        detalle: "8 GB de memoria", 
        imagenAlta: "/Img/rtx4060 grande.jpg", 
        imagenBaja: "/Img/rtx4060.jpg" 
    },
    { 
        nombre: "RX 7800 XT", 
        categoria: "Tarjeta gráfica", 
        precio: 10500, 
        detalle: "16 GB de memoria", 
        imagenAlta: "/Img/rx7800 grande.jpg", 
        imagenBaja: "/Img/rx7800.jpg" 
    }
];

// Ruta AWD 
app.get('/adaptive', (req, res) => {
    if (req.useragent.isMobile) {
        
        console.log("-> Servidor detectó dispositivo MÓVIL. Sirviendo mobile.ejs");
        res.render('mobile', { productos });
    } else {
        
        console.log("-> Servidor detectó ESCRITORIO. Sirviendo desktop.ejs");
        res.render('desktop', { productos });
    }
});

app.get('/', (req, res) => {
    res.send(`<h2>Laboratorio AWD</h2><p>Ir a la ruta <a href="/adaptive">/adaptive</a></p>`);
});

app.listen(PORT, () => {
    console.log(`Servidor AWD corriendo en http://localhost:${PORT}/adaptive`);
});