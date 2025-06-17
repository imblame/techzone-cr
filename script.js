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
