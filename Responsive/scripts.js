
const productos = [
    
    { 
        nombre: "Intel Core i5", 
        categoria: "Procesador", 
        precio: 3200, 
        detalle: "10 núcleos, hasta 4.6 GHz", 
        imagenAlta: "../Img/I5.jpg",     
        imagenBaja: "../Img/I5 Chica.jpg" 
    },
    { 
        nombre: "AMD Ryzen 7", 
        categoria: "Procesador", 
        precio: 4500, 
        detalle: "8 núcleos, hasta 5.0 GHz", 
        imagenAlta: "../Img/ryzen7.jpg", 
        imagenBaja: "../Img/ryzen7 Chica.jpg" 
    },
    { 
        nombre: "Intel Core i9", 
        categoria: "Procesador", 
        precio: 8500, 
        detalle: "24 núcleos, alto rendimiento", 
        imagenAlta: "../Img/i9.jpg", 
        imagenBaja: "../Img/i9 Chica.jpg" 
    },
    { 
        nombre: "RAM DDR4 16GB", 
        categoria: "Memoria RAM", 
        precio: 750, 
        detalle: "16 GB, 3200 MHz", 
        imagenAlta: "../Img/ddr4.jpg", 
        imagenBaja: "../Img/ddr4 Chica.jpg" 
    },
    { 
        nombre: "RAM DDR5 32GB", 
        categoria: "Memoria RAM", 
        precio: 1800, 
        detalle: "32 GB, 5600 MHz", 
        imagenAlta: "../Img/ddr5.jpg", 
        imagenBaja: "../Img/ddr5 Chica.jpg" 
    },
    { 
        nombre: "RAM DDR5 64GB", 
        categoria: "Memoria RAM", 
        precio: 3200, 
        detalle: "64 GB, 6000 MHz", 
        imagenAlta: "../Img/ddr32.jpg", 
        imagenBaja: "../Img/ddr32 Chica.jpg" 
    },
    { 
        nombre: "SSD 1TB", 
        categoria: "Almacenamiento", 
        precio: 1300, 
        detalle: "NVMe, alta velocidad", 
        imagenAlta: "../Img/ssd.jpg", 
        imagenBaja: "../Img/ssd chica.jpg" 
    },
    { 
        nombre: "SSD 2TB", 
        categoria: "Almacenamiento", 
        precio: 2400, 
        detalle: "NVMe, 2 TB", 
        imagenAlta: "../Img/ssd2t.jpg", 
        imagenBaja: "../Img/ssd2t Chica.jpg" 
    },
    { 
        nombre: "HDD 4TB", 
        categoria: "Almacenamiento", 
        precio: 1900, 
        detalle: "4 TB, 7200 RPM", 
        imagenAlta: "../Img/hdd grande.jpg", 
        imagenBaja: "../Img/hdd.jpg" 
    },
    { 
        nombre: "RTX 4060", 
        categoria: "Tarjeta gráfica", 
        precio: 6500, 
        detalle: "8 GB de memoria", 
        imagenAlta: "../Img/rtx4060 grande.jpg", 
        imagenBaja: "../Img/rtx4060.jpg" 
    },
    { 
        nombre: "RTX 4070", 
        categoria: "Tarjeta gráfica", 
        precio: 12000, 
        detalle: "12 GB de memoria", 
        imagenAlta: "../Img/rtx4070 grande.jpg", 
        imagenBaja: "../Img/rtx4070.jpg" 
    },
    { 
        nombre: "RX 7800 XT", 
        categoria: "Tarjeta gráfica", 
        precio: 10500, 
        detalle: "16 GB de memoria", 
        imagenAlta: "../Img/rx7800 grande.jpg", 
        imagenBaja: "../Img/rx7800.jpg" 
    }
];

const lista = document.getElementById("lista-productos");
const categoria = document.getElementById("categoria");

function mostrarProductos() {
    const seleccion = categoria.value;

    const filtrados = productos.filter(function(producto) {
        return seleccion === "todos" || producto.categoria === seleccion;
    });

    lista.innerHTML = "";

    filtrados.forEach(function(producto) {
    lista.innerHTML += `
        <article class="producto">
            <picture>
                <source media="(max-width: 639px)" srcset="${producto.imagenBaja}">
                <img src="${producto.imagenAlta}" alt="${producto.nombre}" loading="lazy">
            </picture>
            <h3>${producto.nombre}</h3>
            <p>${producto.detalle}</p>
            <p><strong>$${producto.precio.toLocaleString("es-MX")} MXN</strong></p>
            <button onclick="comprar('${producto.nombre}')">Comprar</button>
        </article>
    `;
});
}

function comprar(nombre) {
    alert("Seleccionaste: " + nombre);
}

categoria.addEventListener("change", mostrarProductos);

mostrarProductos();

