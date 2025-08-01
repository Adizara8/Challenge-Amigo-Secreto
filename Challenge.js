const amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultado anterior

    if (amigos.length < 2) {
        alert("Debes añadir al menos 2 nombres para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const seleccionado = amigos[indiceAleatorio];

    const itemResultado = document.createElement('li');
    itemResultado.textContent = `🎉 El amigo secreto es: ${seleccionado}`;
    resultado.appendChild(itemResultado);
}
