/*Contadores */
cont_cards = 4


/*Storage */
function setStorage(numero, conteudo){
    localStorage.setItem(`Card${numero}-Input`, JSON.stringify(conteudo));
}
function getStorage(numero){
    return JSON.parse(localStorage.getItem(`Card${numero}-Input`)) || []
}
function deleteStorage(numero){
    localStorage.removeItem(`Card${numero}`)
}

/*Cards*/
function criarCard(){
    // conteudo = {
    //     'indice': cont_cards,
    //     'ddd': '',
    //     'celular': '',
    //     'email': '',
    //     'data': '',
    //     'select': '',
    //     'text': ''
    // }
    // setStorage(cont_cards, conteudo);
    
    // for (let i=0; i< localStorage.length;i++ ){
    //     let key = localStorage.key(i)
    //     console.log(`${key}: ${localStorage.getItem(key)}`)
    //     console.log(key[1])
    // }
    let keys = Object.keys(localStorage)
    for (let key of keys){
        console.log(`${key}: ${localStorage.getItem(key)}`)
        console.log(typeof(key))
    }
    console.log(`index: ${localStorage.getItem(index)}`)
    
    
    
    
}
function deletarCard(numero){
    console.log(numero)
    deleteStorage(numero)
    document.getElementById(`card${numero}`).remove()
}
function editarCard(numero){
}
function limparCard(numero){
    document.getElementById(`ddd${numero}`).value = ''
    document.getElementById(`ddd${numero}`).value = ''
    document.getElementById(`celular${numero}`).value = ''
    document.getElementById(`email${numero}`).value = ''
    document.getElementById(`date${numero}`).value = ''
    document.getElementById(`select${numero}`).value = ''
    document.getElementById(`textarea${numero}`).value = ''
}
function pegarValoresCard(numero){
    ddd = document.getElementById(`ddd${numero}`).value
    celular = document.getElementById(`celular${numero}`).value
    email = document.getElementById(`email${numero}`).value
    data = document.getElementById(`date${numero}`).value
    select = document.getElementById(`select${numero}`).value
    text = document.getElementById(`textarea${numero}`).value
    conteudo = {
        'ddd': ddd,
        'celular': celular,
        'email': email,
        'data': data,
        'select': select,
        'text': text
    }
    setStorage(numero, conteudo);
    limparCard(numero)
}
function mostrarCard(numero){
    getStorage(numero)
}
function conteudoCard(){
    let div = document.createElement('div')
    let divNovoCard = document.getElementById('div-novo-card')
    div.innerHTML = `
    <div id='card${cont_cards}' class='classe-cards'> 

                <div class='titulo'>
                    <h2>Card${cont_cards}</h2>
                </div>

                <div class='inputs'>
                    <input id='ddd${cont_cards}' type="numeric" placeholder="DDD">
                </div>

                <div class='inputs'>
                    <input id='celular${cont_cards}' type="numeric" placeholder="Celular">
                </div>

                <div class='inputs'>
                    <input id='email${cont_cards}' type="email" placeholder="Email">
                </div>

                <div class='inputs'>
                    <input id='date${cont_cards}' type="date" placeholder="Date">
                </div>

                <div class='inputs'>
                    <select id="select${cont_cards}">
                        <option value="">Option1</option>
                        <option value="">Option2</option>
                        <option value="">Option3</option>
                    </select>
                </div>

                <div class='inputs'>
                    <textarea id="textarea${cont_cards}" cols="70" rows="5" placeholder="Texto"></textarea>
                </div>

                <div class='class-botoes'>
                    <button id='limpar${cont_cards}' onclick='limparCard(${cont_cards})'>Limpar Campos ${cont_cards}</button>
                    <button id='deletar${cont_cards}' onclick='deletarCard(${cont_cards})'>Deletar Card ${cont_cards}</button>
                    <button id='btn${cont_cards}' onclick='pegarValoresCard(${cont_cards})'>Card${cont_cards}</button>
                </div>
    `
    divNovoCard.appendChild(div)
    cont_cards += 1
}