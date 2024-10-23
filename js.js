const form = document.getElementById('form-contato')
const listaNome = [];
const listaTelefone = [];

let linhas = '';

console.log(form)

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    setLinhas();

})

function adicionaLinha(){
    let getNome = document.getElementById('form-nome')
    let getTelefone = document.getElementById('form-telefone')


    if (listaTelefone.includes(getTelefone.value)){
        alert(`O numero ${getTelefone.value} ja esta na lista telefonica`)

    }else {
        listaNome.push(getNome.value);
        listaTelefone.push(getTelefone.value);

        let linha = `<str>`;
        linha += `<td>${getNome.value}</td>`
        linha += `<td>${getTelefone.value}</td>`
        linha += `<td><img src="images/editor-de-selecao-de-fonte.png"></img>`
        linha += `<td><img src="images/excluir.png" alt="icone de lixera"></td>`
        linha += `</tr>`

        linhas += linha;
    }

    getNome.value = '';
    getTelefone.value = ''
}

function setLinhas(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}
