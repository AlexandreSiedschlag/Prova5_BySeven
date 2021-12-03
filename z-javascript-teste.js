var cont_input = 1
var cont_date = 1
var cont_combobox = 1
var cont_textbox = 1

function xabuska(){
    let templates = JSON.parse(localStorage.getItem('templates')) || []
    console.log(templates)

    x = document.querySelector('#corpo')
    templates.forEach(template => {
        let div = document.createElement('div')

    div.innerHTML = `
    <div class="card" onclick="changeCard(1);return false;">
        <div class="card-image"></div>
        <div class="card-text">
            <span class="date">${template.descricao}</span>
            <h2>${template.nome}</h2>
            <p>Texto Random</p>
        </div>
        <div class="card-stats">
            <div class="stat">
                <div class="value">${template.elementos.filter((tartaruga)=>{return tartaruga.element=='nome'}).length}</div>
                <div class="type">Nome</div>
            </div>
            <div class="stat border">
                <div class="value">${template.elementos.filter((elemento)=>{return elemento.element=='data'}).length}</div>
                <div class="type">Data</div>
            </div>
            <div class="stat">
                <div class="value">1</div>
                <div class="type">Select</div>
            </div>
        </div>
    </div>
    `
    x.appendChild(div)
    })
}
xabuska()


 


function kkk(){
    let lista=[
        {
            'nome':'template1',
            'descricao':'ola1',
            'elementos':[
                {
                    'element': 'data'
                },
                {
                    'element': 'nome'
                },
                {
                    'element': 'data'
                },
                {
                    'element': 'data'
                }
            ]
        },
        {
            'nome':'template2',
            'descricao':'ola2',
            'elementos':[
                {
                    'element': 'data',
                },
                {
                    'element': 'nome'
                },
                {
                    'element': 'data'
                }
            ]
        },
        {
            'nome':'template3',
            'idade':15,
            'descricao':'ola3',
            'elementos':[
                {
                    'element': 'data'
                },
                {
                    'element': 'nome'
                },
                {
                    'element': 'nome'
                }
            ]
        }
    ]
    localStorage.setItem('templates', JSON.stringify(lista))
}


/* Mexer no Storage */
const Storage = {
    set(values){
        localStorage.setItem(`prova5.storage`, JSON.stringify(values))
    },
    get(origin){
        return JSON.parse(localStorage.getItem(`prova5.storage`)) || []
    },
    delete(){
        localStorage.removeItem('prova5.storage')
    }
}


















function changeCard(numero){
    if (numero == 1){
        document.getElementById('card1').style.display ='none'
        document.getElementById('card2').style.display ='none'
        document.getElementById('card3').style.display ='none'
        document.getElementById('card4').style.display ='grid'
        imagemCard4 = document.getElementById('idImagemCard4').style.background = 'url("1.jpg")';
    }
    if (numero == 2){
        document.getElementById('card1').style.display ='none'
        document.getElementById('card2').style.display ='none'
        document.getElementById('card3').style.display ='none'
        document.getElementById('card4').style.display ='grid'
        imagemCard4 = document.getElementById('idImagemCard4').style.background = 'url("orange.jpg")';
    }
    if (numero == 3){
        document.getElementById('card1').style.display ='none'
        document.getElementById('card2').style.display ='none'
        document.getElementById('card3').style.display ='none'
        document.getElementById('card4').style.display ='grid'
        imagemCard4 = document.getElementById('idImagemCard4').style.background = 'url("Matrix.jpeg")';
    }
    if (numero == 4){
        document.getElementById('card1').style.display ='grid'
        document.getElementById('card2').style.display ='grid'
        document.getElementById('card3').style.display ='grid'
        document.getElementById('card4').style.display ='none'
    }
}

/* Celular */
function addCelular(){
        conteudo =`<div id="divCelular${cont_input}" class="div2-inputs"><label for="celular">Numerico</label><input type="number" id="ddd${cont_input}" placeholder="DDD"><input type="number" id="celular${cont_input}" placeholder="Celular"><button id="remove-celular" onclick="deleteCelular('divCelular${cont_input}');return false;"><i class="fas fa-minus-square"></i></button></div>`;
        document.querySelector('#bloco-inputs').innerHTML += conteudo;
        cont_input += 1;
};
function deleteCelular(id) {
        document.querySelector(`#${id}`).remove()
}

/* Data */
function addDate(){
        conteudo =`<div id="date${cont_date}" class="div2-inputs"><label for="date">Data</label><input type="date" placeholder="Data"><button id="remove-date" onclick="deleteDate('date${cont_date}');return false;"><i class="fas fa-minus-square"></i></button></div>`;
        document.querySelector('#bloco-date').innerHTML += conteudo;
        cont_date += 1;
}
function deleteDate(id) {
        document.querySelector(`#${id}`).remove()
}

