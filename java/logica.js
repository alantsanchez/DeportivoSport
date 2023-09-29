
//console.table(productos);

let carrito = document.getElementById('carrito');
carrito.addEventListener('click',dispararAlert);

function dispararAlert(){
    alert('Hiciste click');
}

const contenedorProds = document.getElementById('misprods');
const tablaBody = document.getElementById('tablabody');

//DOM
function renderizarProds(listaProds) {
    for (const prod of listaProds) {
        contenedorProds.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src=${prod.foto} alt=${prod.nombre}/>
                    <div class="card-body">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text">$ ${prod.precio}</p>
                        <button id=${prod.id} class="btn btn-primary compra">Comprar</button>
                    </div>
            </div>
        `;
    }

    //eventos
    let botones = document.getElementsByClassName('compra');//coleccion de nodos
    for (const boton of botones) {
        //opcion 1 - addEventListener
        boton.addEventListener('click', () => {
            console.log('Hiciste click en el boton cuyo id es ' + boton.id);
            const prodACarro = listaProds.find((producto) => producto.id == boton.id);
            console.log(prodACarro);
            //cargar producto encontrado al carro
            agregarAlCarrito(prodACarro);
        });

        //opcion 2
        boton.onmouseover = () => boton.classList.replace('btn-primary', 'btn-warning');
        boton.onmouseout = () => boton.classList.replace('btn-warning', 'btn-primary');
    }
}

renderizarProds(productos);

//carrito de compras 

const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

// final carrito de compras 

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

