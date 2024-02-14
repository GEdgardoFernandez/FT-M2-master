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
//*Eliminar Amigos
const eliminar = document.querySelector('#delete');
const eliminarInput = document.querySelector('#inputDelete');
const eliminadoCorrecto = document.querySelector('#success');
const modalDelete = document.querySelector('#modalDelete');
const cerrarDelete = document.querySelector('#cerrar');

eliminar.addEventListener('click', () => {
    const amigoId = parseInt(eliminarInput.value);

    if (isNaN(amigoId)) {
        modalDelete.showModal();
        eliminadoCorrecto.innerText = 'Debe ingresar un número';
    } else {
        // Realizar la solicitud DELETE con AJAX
        $.ajax({
            url: `http://localhost:5000/amigos/${amigoId}`,
            type: 'DELETE',
            success: function () {
                modalDelete.showModal();
                eliminadoCorrecto.innerText = "Se ha eliminado el amigo correctamente";           },
            error: function (error) {
                console.error(error);
                modalDelete.showModal();
                eliminadoCorrecto.innerText = 'Error al eliminar amigo';
            }
        });
    }
});

cerrarDelete.addEventListener('click', () => {
    modalDelete.close();
});