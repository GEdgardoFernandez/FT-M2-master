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
//*Buscador de Amigos
const buscar = document.querySelector('#search');
const input = document.querySelector('#input');
const cerrar = document.querySelector('#close');
const modal = document.querySelector('#modalAmigos');
buscar.addEventListener('click', () => {
    const mostrarAmigo = document.querySelector('#amigo');
    if (typeof input.value != "number" ) {
        modal.showModal();
        mostrarAmigo.innerText = 'Debe ingresar un número';
        
    }
    if (input.value == 0 || input.value > 6) {
        modal.showModal();
        mostrarAmigo.innerText = 'No existe ese ID';
    } else {
        $.get(urlAmigos, (amigos) => {
            const mostrarAmigo = document.querySelector('#amigo');
            modal.showModal();
            mostrarAmigo.innerText = amigos[input.value - 1].name;
        })
    }
    
})
cerrar.addEventListener('click', () => {
    modal.close();
})

//* eliminar Amigo
const eliminar = document.querySelector('#delete');
const eliminarInput = document.querySelector('#deleteInput');
const eliminadoCorrecto = document.querySelector('#success');
const modalDelete = document.querySelector('#modalDelete');
const cerrarDelete = document.querySelector('#cerrar');

eliminar.addEventListener('click', () => {
    if (typeof eliminarInput.value != "number" ) {
        modal.showModal();
        eliminadoCorrecto.innerText = 'Debe ingresar un número';
    }
    if (eliminarInput.value == 0 || eliminarInput.value > 6) {
        modalDelete.showModal();
        eliminadoCorrecto.innerText = 'No existe ese ID';
    } else {
        $.ajax({
            url: urlAmigos + '/' + (eliminarInput.value - 1),
            type: 'DELETE',
            success: function (data) {
                eliminadoCorrecto.innerText = 'Amigo eliminado';
            }
        })
    }
})
cerrar.addEventListener('click', () => {
    modalDelete.close();
})