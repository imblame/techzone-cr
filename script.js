let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - ₡${item.precio}`;
    lista.appendChild(li);
  });
}

function enviarWhatsApp() {
  const nombre = document.getElementById('nombreCliente').value;
  const telefono = document.getElementById('telefonoCliente').value;
  if (!nombre || !telefono) {
    alert('Por favor completa tu nombre y número de teléfono.');
    return;
  }

  let mensaje = `Hola, soy ${nombre} (${telefono}). Quiero comprar:\n`;
  carrito.forEach(item => {
    mensaje += `- ${item.nombre} (₡${item.precio})\n`;
  });

  const numero = "50683398093";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

const productos = [
  {
    nombre: 'Audífonos Gamer',
    precio: 15000,
    descripcion: 'Audífonos con sonido envolvente y micrófono incorporado.',
    imagenes: ['img/prod1_1.jpg', 'img/prod1_2.jpg', 'img/prod1_3.jpg', 'img/prod1_4.jpg']
  },
  {
    nombre: 'Mouse Inalámbrico',
    precio: 8500,
    descripcion: 'Mouse ergonómico y recargable, conexión por USB o Bluetooth.',
    imagenes: ['img/prod2_1.jpg', 'img/prod2_2.jpg', 'img/prod2_3.jpg', 'img/prod2_4.jpg']
  }
];

function abrirModal(index) {
  const prod = productos[index];
  document.getElementById('modal-img-1').src = prod.imagenes[0];
  document.getElementById('modal-img-2').src = prod.imagenes[1];
  document.getElementById('modal-img-3').src = prod.imagenes[2];
  document.getElementById('modal-img-4').src = prod.imagenes[3];
  document.getElementById('modal-titulo').textContent = prod.nombre;
  document.getElementById('modal-descripcion').textContent = prod.descripcion;
  document.getElementById('modal-precio').textContent = '₡' + prod.precio;
  const btn = document.getElementById('btn-agregar');
  btn.onclick = () => agregarAlCarrito(prod.nombre, prod.precio, prod.imagenes[0]);
  document.getElementById('modal-producto').classList.remove('oculto');
}
function cerrarModal() {
  document.getElementById('modal-producto').classList.add('oculto');
}

function mostrarCarritoFlotante() {
  document.getElementById('carrito-detalles').style.display = 'block';
}
function ocultarCarritoFlotante() {
  document.getElementById('carrito-detalles').style.display = 'none';
}
function irACarrito() {
  window.location.href = "carrito.html";
}

function agregarAlCarrito(nombre, precio, imagen) {
  const item = { nombre, precio, imagen };
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(item);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarritoMini();
  alert("Producto agregado al carrito.");
}

function actualizarCarritoMini() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const lista = document.getElementById("lista-carrito-mini");
  const total = document.getElementById("total-mini");
  lista.innerHTML = "";
  let suma = 0;
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${item.imagen}" alt=""><span>${item.nombre}</span><strong>₡${item.precio}</strong>`;
    lista.appendChild(li);
    suma += item.precio;
  });
  total.textContent = "Total: ₡" + suma;
}
document.addEventListener("DOMContentLoaded", actualizarCarritoMini);
