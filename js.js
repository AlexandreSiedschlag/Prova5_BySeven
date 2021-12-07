/*Contadores */
templates = getStorageTemplates()
mensagens = getStorageMensagens()

/*Chamadas de funcoes*/
gerarHtmlDoTemplateCriado()

/*Templates*/
function deletarTemplate(indice){
    console.log('Funcao: deletarTemplate(indice)')
    console.log(indice)
    console.log(templates)
    templates.splice(indice, 1);
    console.log(templates)
    setStorageTemplates(templates)
    location.reload()
}
function gerarHtmlDoTemplateCriado(){ // Gerador De formulario Dinamico
    console.log('Funcao: gerarHTMLDoTemplateCriado')
    let divNovoCard = document.getElementById('divNovoCard');
    divNovoCard.innerHTML = ''
    if (templates.length>0){
        i=0
        while (i<templates.length){
            htmlASerGerado = `
                <div id='card${templates[i].indice}' class='classecards'> 
    
                    <div class='titulo' id='divtitutlo${templates[i].indice}'>
                        <h2>Card${templates[i].indice}</h2>
                    </div>
    
                    <div class='inputs' id='divddd${templates[i].indice}'>
                        <input id='ddd${templates[i].indice}' type="numeric" placeholder="DDD">
                        <button class='btn btn-primary' id='btnAddddd${templates[i].indice}'>+</button>
                    </div>
    
                    <div class='inputs' id='divcelular${templates[i].indice}'>
                        <input id='celular${templates[i].indice}' type="numeric" placeholder="Celular">
                        <button class='btn btn-primary' id='btnAddcelular${templates[i].indice}'>+</button>
                    </div>

                    <div class='inputs' id='divemail${templates[i].indice}'>
                        <input id='email${templates[i].indice}' type="email" placeholder="Email">
                        <button class='btn btn-primary' id='btnAddemail${templates[i].indice}'>+</button>
                    </div>
    
                    <div class='inputs' id='divdata${templates[i].indice}'>
                        <input id='date${templates[i].indice}' type="date" placeholder="Date">
                        <button class='btn btn-primary' id='btnAddemail${templates[i].indice}'>+</button>
                    </div>
    
                    <div class='inputs' id='divselect${templates[i].indice}'>
                        <select id="select${templates[i].indice}">
                            <option value="">Option1</option>
                            <option value="">Option2</option>
                            <option value="">Option3</option>
                        </select>
                        <button class='btn btn-primary' id='btnAddselect${templates[i].indice}'>+</button>
                    </div>
    
                    <div class='inputs' id='divtextarea${templates[i].indice}'>
                        <textarea id="textarea${templates[i].indice}" cols="70" rows="5" placeholder="Texto"></textarea>
                        <button class='btn btn-primary' id='btnAddtextarea${templates[i].indice}'>+</button>
                    </div>
    
                    <div class='inputs' id='divpreview${templates[i].indice}'>
                        Preview
                    </div>
    
                    <div class='class-botoes' id='divbotoes${templates[i].indice}'>
                        <button id='limpar${templates[i].indice}' class='btn btn-warning' onclick='limparFormularioDinamico(${i})'>Limpar Campos</button>
                        <button id='deletar${templates[i].indice}' class='btn btn-danger' onclick='deletarTemplate(${i})'>Deletar Card </button>
                        <button id='btn${templates[i].indice}' class='btn btn-success' onclick='pegarFormularioDinamico(${i})'>Card</button>
                    </div>`
            let div = document.createElement('div');
            div.innerHTML = htmlASerGerado
            divNovoCard.appendChild(div)
            i += 1;
        }
    }
}

/*EnviarMensagem*/
function enviarMensagem(mensagem){
    console.log('Funcao: enviarMensagem(mensagem)')
    alert(`Mensagem: ${JSON.stringify(mensagem)}`)
    
}

/*Formulario*/
    /*Fixo*/
    function enviarFormularioFixo(){
        //Pega Formulario Fixo, Armazena no Storage, Limpa Formulario, Atualiza a pagina e Envia mensagem por WhatsApp
        console.log('Funcao: enviarFormularioFixo')
        dddFixo = document.getElementById(`formularioFixoDDD`).value
        celularFixo = document.getElementById(`formularioFixoCelular`).value
        emailFixo = document.getElementById(`formularioFixoEmail`).value
        dataFixo = document.getElementById(`formularioFixoDate`).value
        selectFixo = document.getElementById(`formularioFixoSelect`).value
        textFixo = document.getElementById(`formularioFixoTextarea`).value
        mensagem = {
            'dddFixo': dddFixo,
            'celularFixo': celularFixo,
            'emmailFixo': emailFixo,
            'dataFixo': dataFixo,
            'selectFixo': selectFixo,
            'textFixo': textFixo
        }
        mensagens.push(mensagem)
        setStorageMensagens(mensagens)
        limparFormularioFixo()
        cancelarFormularioFixo()
        enviarMensagem(mensagem)
    }
    function limparFormularioFixo(){
        console.log('Funcao: limparFormularioFixo')
        document.getElementById(`formularioFixoDDD`).value = ''
        document.getElementById(`formularioFixoCelular`).value = ''
        document.getElementById(`formularioFixoEmail`).value = ''
        document.getElementById(`formularioFixoDate`).value = ''
        document.getElementById(`formularioFixoSelect`).value = ''
        document.getElementById(`formularioFixoTextarea`).value = ''
    }
    function formatarFormularioFixo(numero){
        console.log('Funcao: formatarFormularioFixo(numero)')
        ddd = document.getElementById(`formularioFixoDDD`)
        celular = document.getElementById(`formularioFixoCelular`)
        email = document.getElementById(`formularioFixoEmail`)
        data = document.getElementById(`formularioFixoDate`)
        select = document.getElementById(`formularioFixoSelect`)
        text = document.getElementById(`formularioFixoTextarea`)
    
        if (numero == 0){
            ddd.style.display =  'inline-block'
            celular.style.display = 'inline-block'
            email.style.display = 'none'
            data.style.display = 'none'
            select.style.display = 'none'
            text.style.display = 'inline-block'        
        }
        else if (numero == 1){
            ddd.style.display =  'inline-block'
            celular.style.display = 'inline-block'
            email.style.display = 'inline-block'
            data.style.display = 'none'
            select.style.display = 'none'
            text.style.display = 'inline-block' 
        }
        else if (numero == 2){
            ddd.style.display =  'inline-block'
            celular.style.display = 'inline-block'
            email.style.display = 'inline-block'
            data.style.display = 'inline-block'
            select.style.display = 'none'
            text.style.display = 'inline-block' 
        }
    }
    function mostrarFormularioFixo(numero){ // Troca de Telas -  Formulario Fixo ou Dinamico
        console.log('Funcao: mostrarFormulario(numero)')
        document.getElementById('sectionPaginaPrincipal').style.display='none' //pagina inicial
        document.getElementById('sectionTemplatesInseridos').style.display = 'none'
        document.getElementById('sectionDinamico').style.display = 'none'// formulario Dinamico
        document.getElementById('sectionFixo').style.display = 'block'
        formatarFormularioFixo(numero)
    }
    function cancelarFormularioFixo(){
        console.log('Funcao: cancelarFormulario')
        document.getElementById('sectionPaginaPrincipal').style.display = 'block' //pagina inicial
        document.getElementById('sectionTemplatesInseridos').style.display = 'block'
        document.getElementById('sectionDinamico').style.display = 'none'// formulario Dinamico
        document.getElementById('sectionFixo').style.display = 'flex' // formulario Fixo
       
    }

    
    /*Dinamico*/
    function limparFormularioDinamico(){ //falta fazer
        console.log('Funcao: limparFormularioDinamico')
        document.getElementById(`formularioDinamicoDDD`).value = ''
        document.getElementById(`formularioDinamicoCelular`).value = ''
        document.getElementById(`formularioDinamicoEmail`).value = ''
        document.getElementById(`formularioDinamicoDate`).value = ''
        document.getElementById(`formularioDinamicoSelect`).value = ''
        document.getElementById(`formularioDinamicoTextarea`).value = ''
    }
    function pegarFormularioDinamicoEGravarNoStorage(){ // falta dividir em partes
        console.log('Funcao: pegarFormularioDinamicoEGravarNoStorage')
        ddd = document.getElementById(`formularioDinamicoDDD`).value
        celular = document.getElementById(`formularioDinamicoCelular`).value
        email = document.getElementById(`formularioDinamicoEmail`).value
        data = document.getElementById(`formularioDinamicoDate`).value
        select = document.getElementById(`formularioDinamicoSelect`).value
        text = document.getElementById(`formularioDinamicoTextarea`).value

        let indexNovoDoTemplate = 0
        if (templates.length>0){
            indexNovoDoTemplate = templates[templates.length -1].indice +1
        }
        else {
            indexNovoDoTemplate = 4
        }

        template = {
            'indice': indexNovoDoTemplate,
            'ddd': ddd,
            'celular': celular,
            'email': email,
            'data': data,
            'select': select,
            'text': text
        }
        templates.push(template)
        setStorageTemplates(templates);
    }
    function pegarFormularioDinamico(){ //falta fazer
        console.log('Funcao: PegarFormularioDinamico')
    }
    function formatarFormularioDinamico(){ //falta fazer
        console.log('Funcao: formatarFormularioFixo(numero)')
        ddd = document.getElementById(`formularioFixoDDD`)
        celular = document.getElementById(`formularioFixoCelular`)
        email = document.getElementById(`formularioFixoEmail`)
        data = document.getElementById(`formularioFixoDate`)
        select = document.getElementById(`formularioFixoSelect`)
        text = document.getElementById(`formularioFixoTextarea`)
    
        ddd.style.display =  'inline-block'
        celular.style.display = 'inline-block'
        email.style.display = 'inline-block'
        data.style.display = 'inline-block'
        select.style.display = 'inline-block'
        text.style.display = 'inline-block' 
        document.getElementById('formularioDinamicoDate').disabled = false
        
    }
    function mostrarFormularioDinamico(){ // Troca de Telas -  Formulario Fixo ou Dinamico
        console.log('Funcao: mostrarFormulario(numero)')
        document.getElementById('sectionPaginaPrincipal').style.display='none' //pagina inicial
        document.getElementById('sectionTemplatesInseridos').style.display = 'none'
        document.getElementById('sectionDinamico').style.display = 'block'// formulario Dinamico
        document.getElementById('sectionFixo').style.display = 'none'
        formatarFormularioDinamico()
    }
    function cancelarFormularioDinamico(){
        console.log('Funcao: cancelarFormulario')
        console.log('Funcao: mostrarFormulario(numero)')
        document.getElementById('sectionPaginaPrincipal').style.display='block' //pagina inicial
        document.getElementById('sectionTemplatesInseridos').style.display = 'block'
        document.getElementById('sectionDinamico').style.display = 'none'// formulario Dinamico
        document.getElementById('sectionFixo').style.display = 'none'
    }
    function enviarFormularioDinamico(){
        console.log('Funcao: enviarFormularioDinamico')
        pegarFormularioDinamicoEGravarNoStorage()
        limparFormularioDinamico()
        cancelarFormularioDinamico()
        gerarHtmlDoTemplateCriado()
    }

/*Storage*/
    /*Templates*/
    function setStorageTemplates(conteudo){
        console.log('Funcao: setStorageTemplates(conteudo)')
        localStorage.setItem(`Templates`, JSON.stringify(conteudo));
    }
    function getStorageTemplates(){
        console.log('Funcao: getStorageTemplates')
        return JSON.parse(localStorage.getItem(`Templates`)) || []
    }
    function deleteStorageTemplates(){
        console.log('Funcao: deleteStorageTemplates')
        if (templates.length>0){
            localStorage.removeItem(`Templates`)
            console.log('Deletado')
        }
        else console.log('Nao Deletado, Pois nao Existe')
        
    }
    /*Mensagens*/
    function setStorageMensagens(conteudo){
        console.log('Funcao: setStorageMensagens(conteudo)')
        localStorage.setItem(`Mensagens`, JSON.stringify(conteudo));
    }
    function getStorageMensagens(){
        console.log('Funcao: getStorageMensagens')
        return JSON.parse(localStorage.getItem(`Mensagens`)) || []
    }
    function deleteStorageMensagens(){
        console.log('Funcao: deleteStorageMensagens')
        if (mensagens.length>0){
            localStorage.removeItem(`Mensagens`)
            console.log('Deletado')
        }
        else console.log('Nao Deletado, Pois nao Existe')
    }
    
    
