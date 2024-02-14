const ver = document.querySelector('#boton');
const lista = document.querySelector('#lista');
const urlAmigos = "http://localhost:5000/amigos"
const img = document.querySelector('img');

const crearAmigo = (amigo) => {
    const li = document.createElement('li');
    li.innerText = amigo.name;
    lista.appendChild(li);
}

const verAmigos = (amigo) => {
    lista.innerHTML = '';
    amigo.forEach(crearAmigo);
}
ver.addEventListener('click', () => {
    $.get(urlAmigos, verAmigos);
    img.src = "";
})
