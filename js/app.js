let todosAmigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    todosAmigos.push(amigo.value);
    
    if (lista.textContent == ''){
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
    
}

function sortear() {
    embaralha(todosAmigos);
    let sorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < todosAmigos.length; i++) {

        if (i == todosAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + todosAmigos[i] + ' --> ' + todosAmigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + todosAmigos[i] + ' --> ' + todosAmigos[i + 1] + '<br>';
        }
        
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {

}