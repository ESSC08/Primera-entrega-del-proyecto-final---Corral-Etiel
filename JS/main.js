const IVA = 1.21;

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    calcularPrecio() {
        return this.precio * IVA;
    }
}

class Pedido {
    constructor(producto, cantidad) {
        this.productos = producto;
        this.cantidad = cantidad;
    }
}

const producto1 = new Producto("1","Pocion", 100);
const producto2 = new Producto("2","Superpocion", 200);
const producto3 = new Producto("3","Pokeball", 300);
const producto4 = new Producto("4","Superball", 400);
const producto5 = new Producto("5","Ultraball", 500);
const producto6 = new Producto("6","Piedra Lunar", 600);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6];
const carrito = []

function agregarProductoAlCarrito(id) {
    //  buscar producto en el arreglo de producto y agregarlo al carrito
    const productoEncontrado = productos.find(producto => producto.id == id);
    if(productoEncontrado == undefined){
    alert("No tenemos el producto solicitado");
    } else {
    const cantidad = prompt("Ok, ingrese cantidad solicitada de " + productoEncontrado.nombre)
    const nuevoPedido = new Pedido(productoEncontrado, cantidad)
    carrito.push(nuevoPedido);
    }
}

function mostrarCarritoActual() {} 

function mostrarProductosYSeleccionar() {
    let menuAMostrar = "¿Como puedo servirle?\n";
    productos.forEach(producto => {
        menuAMostrar += producto.id +") "+ producto.nombre +" - "+ producto.precio+"\n";
    })
    let respuesta = prompt(menuAMostrar);
    return respuesta;
}

function confirmarCompra() {
    const respuesta = prompt("Buenos dias ¿Quiere llevar algo?\n1) Si \n2) No");
    if (respuesta == "1") {
        return true;
    } else {
        return false;
    }
}

function comprarProducto() {
    while (confirmarCompra()) {
        let productoSeleccionado = mostrarProductosYSeleccionar();
        // Agregar productos al carro
        agregarProductoAlCarrito(productoSeleccionado);
        // Visualizacion de la compra
        mostrarCarritoActual();
    }
}

comprarProducto();