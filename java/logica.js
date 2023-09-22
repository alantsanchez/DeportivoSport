
console.table(productos);

function filtroDePrecio(precioMaximo){
    const productosFiltrados = productos.filter((producto) => producto.precio <= precioMaximo);

    if (productosFiltrados.length != 0) { 
        
        let infoDeAlert='';
        productosFiltrados.forEach((producto) => {
            infoDeAlert += `ID: ${producto.id} - Nombre: ${producto.nombre} - Precio $ ${producto.precio}\n`;
        });
        alert(infoDeAlert);
    } else {
        alert('Lamentablemente no contamos con productos dentro de ese rango de precio🟥');
    }
}

let precio = parseFloat(prompt('Ingresa el precio maximo que deseas abonar (0-Para salir del sistema)'));

while(precio != 0){
    filtroDePrecio(precio);

    precio = parseFloat(prompt('Ingresa el precio maximo que deseas abonar (0-Para salir del sistema)'));
}






const carrito = document.getElementById('carrito');

document.getElementById('agregar-producto-1').addEventListener('click', () => {
    function agregarAlCarrito(productoId) {
        const producto = productos.find((p) => p.id === productoId);

        if (producto) {
            const elementoCarrito = document.createElement('div');
            elementoCarrito.innerHTML = `${producto.nombre} - $${producto.precio}`;
            
            carrito.appendChild(elementoCarrito);
        }
      }
});

document.getElementById('agregar-producto-2').addEventListener('click', () => {
    function agregarAlCarrito(productoId) {
        const producto = productos.find((p) => p.id === productoId);

        if (producto) {
            const elementoCarrito = document.createElement('div');
            elementoCarrito.innerHTML = `${producto.nombre} - $${producto.precio}`;
            
            carrito.appendChild(elementoCarrito);
        }
      }
});

document.getElementById('agregar-producto-3').addEventListener('click', () => {
    function agregarAlCarrito(productoId) {
        const producto = productos.find((p) => p.id === productoId);

        if (producto) {
            const elementoCarrito = document.createElement('div');
            elementoCarrito.innerHTML = `${producto.nombre} - $${producto.precio}`;
            
            carrito.appendChild(elementoCarrito);
        }
      }
});

document.getElementById('agregar-producto-4').addEventListener('click', () => {
    function agregarAlCarrito(productoId) {
        const producto = productos.find((p) => p.id === productoId);

        if (producto) {
            const elementoCarrito = document.createElement('div');
            elementoCarrito.innerHTML = `${producto.nombre} - $${producto.precio}`;
            
            carrito.appendChild(elementoCarrito);
        }
      }
});

document.getElementById('agregar-producto-5').addEventListener('click', () => {
    function agregarAlCarrito(productoId) {
        const producto = productos.find((p) => p.id === productoId);

        if (producto) {
            const elementoCarrito = document.createElement('div');
            elementoCarrito.innerHTML = `${producto.nombre} - $${producto.precio}`;
            
            carrito.appendChild(elementoCarrito);
        }
      }
});

document.getElementById('agregar-producto-6').addEventListener('click', () => {
    function agregarAlCarrito(productoId) {
        const producto = productos.find((p) => p.id === productoId);

        if (producto) {
            const elementoCarrito = document.createElement('div');
            elementoCarrito.innerHTML = `${producto.nombre} - $${producto.precio}`;
            
            carrito.appendChild(elementoCarrito);
        }
      }
});

document.getElementById('agregar-producto-7').addEventListener('click', () => {
    function agregarAlCarrito(productoId) {
        const producto = productos.find((p) => p.id === productoId);

        if (producto) {
            const elementoCarrito = document.createElement('div');
            elementoCarrito.innerHTML = `${producto.nombre} - $${producto.precio}`;
            
            carrito.appendChild(elementoCarrito);
        }
      }
});

document.getElementById('agregar-producto-8').addEventListener('click', () => {
    function agregarAlCarrito(productoId) {
        const producto = productos.find((p) => p.id === productoId);

        if (producto) {
            const elementoCarrito = document.createElement('div');
            elementoCarrito.innerHTML = `${producto.nombre} - $${producto.precio}`;
            
            carrito.appendChild(elementoCarrito);
        }
      }
});

document.getElementById('agregar-producto-9').addEventListener('click', () => {
    function agregarAlCarrito(productoId) {
        const producto = productos.find((p) => p.id === productoId);

        if (producto) {
            const elementoCarrito = document.createElement('div');
            elementoCarrito.innerHTML = `${producto.nombre} - $${producto.precio}`;
            
            carrito.appendChild(elementoCarrito);
        }
      }
});

document.getElementById('agregar-producto-10').addEventListener('click', () => {
    function agregarAlCarrito(productoId) {
        const producto = productos.find((p) => p.id === productoId);

        if (producto) {
            const elementoCarrito = document.createElement('div');
            elementoCarrito.innerHTML = `${producto.nombre} - $${producto.precio}`;
            
            carrito.appendChild(elementoCarrito);
        }
      }
});

document.getElementById('agregar-producto-11').addEventListener('click', () => {
    function agregarAlCarrito(productoId) {
        const producto = productos.find((p) => p.id === productoId);

        if (producto) {
            const elementoCarrito = document.createElement('div');
            elementoCarrito.innerHTML = `${producto.nombre} - $${producto.precio}`;
            
            carrito.appendChild(elementoCarrito);
        }
      }
});

document.getElementById('agregar-producto-12').addEventListener('click', () => {
    function agregarAlCarrito(productoId) {
        const producto = productos.find((p) => p.id === productoId);

        if (producto) {
            const elementoCarrito = document.createElement('div');
            elementoCarrito.innerHTML = `${producto.nombre} - $${producto.precio}`;
            
            carrito.appendChild(elementoCarrito);
        }
      }
});