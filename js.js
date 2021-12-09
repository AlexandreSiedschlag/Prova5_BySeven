/*  1- Acessar id pelo childNodes
    Quantidade, Valor(conteudo que o usuario inseriu)

    2- Mudar o Template Gerado para apenas preview
*/
/*Contadores */
templates = getStorageTemplates()
mensagens = getStorageMensagens()
contador_ddd = 0
contador_celular = contador_ddd
contador_email = 0
contador_data = 0
contador_select = 0

/*Chamadas de funcoes*/
gerarHtmlDoTemplateCriado()

/*Templates*/
function deletarTemplate(indice){
    console.log('Funcao: deletarTemplate(indice)')
    console.log(indice)
    console.log(templates)
    templates.splice(indice, 1)
    console.log(templates)
    setStorageTemplates(templates)
    location.reload()
}
function gerarHtmlDoTemplateCriado(){ // Gerador De formulario Dinamico
    console.log('Funcao: gerarHTMLDoTemplateCriado')
    let divFormularioDinamico = document.getElementById('divNovoCard');
    divFormularioDinamico.innerHTML = ''
    if (templates.length>0){
        i=0
        while (i<templates.length){
            htmlASerGerado = `
                <div id='Template${templates[i].indice}' class='classecards'> 
                    <div class='titulo' id='divtitutlo${templates[i].indice}'>
                        <h2>Template${templates[i].indice}</h2>
                    </div>
                    <div> 
                    </div>
                    <div class='class-botoes' id='divbotoes'>
                        <button id='deletar${templates[i].indice}' class='btn btn-danger' onclick='deletarTemplate(${i})'>Deletar</button>
                        <button id='btn${templates[i].indice}' class='btn btn-success' onclick='editarFormularioDinamico(${i})'>Editar</button>
                    </div>
                </div>`
            let div = document.createElement('div');
            div.innerHTML = htmlASerGerado
            divFormularioDinamico.appendChild(div)
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
        document.getElementById('sectionFixo').style.display = 'none' // formulario Fixo
    }
    
    /*Dinamico*/
    function addFormularioNosTemplatesCriados(){
        let indexNovoDoTemplate = 0
        if (templates.length>0){indexNovoDoTemplate = templates[templates.length -1].indice +1}
        else {indexNovoDoTemplate = 4}
        ddd='', celular='', email='', data='', select='', text=''
        dddinfo = {'quantidade': 0,'valor': []}
        celularinfo = {'quantidade': 0,'valor': []}
        emailinfo = {'quantidade': 0,'valor': []}
        datainfo = {'quantidade': 0,'valor': []}
        selectinfo = {'quantidade': 0,'valor': []}
        template = {
            'indice': indexNovoDoTemplate,
            'ddd': ddd,
            'celular': celular,
            'email': email,
            'data': data,
            'select': select,
            'text': text,
            'dddinfo': dddinfo,
            'celularinfo': celularinfo,
            'emailinfo': emailinfo,
            'datainfo': datainfo,
            'selectinfo': selectinfo
        }
        templates.push(template)
        setStorageTemplates(templates)
        location.reload()
        // x = document.getElementById('divNovoCard')
        // y = x.scrollIntoView()
        window.location.href='#divNovoCard'
        
    }
    function cancelarFormularioDinamico(){
        console.log('Funcao: cancelarFormulario')
        console.log('Funcao: mostrarFormulario(numero)')
        document.getElementById('sectionPaginaPrincipal').style.display='block' //pagina inicial
        document.getElementById('sectionTemplatesInseridos').style.display = 'block'
        document.getElementById('sectionDinamico').style.display = 'none'// formulario Dinamico
        document.getElementById('sectionFixo').style.display = 'none'
    }
    function mostrarFormularioDinamico(indice){ // Troca de Telas -  Formulario Fixo ou Dinamico
        console.log('Funcao: mostrarFormulario(numero)')
        document.getElementById('sectionPaginaPrincipal').style.display='none' //pagina inicial
        document.getElementById('sectionTemplatesInseridos').style.display = 'none'
        document.getElementById('sectionDinamico').style.display = 'block'// formulario Dinamico
        document.getElementById('sectionFixo').style.display = 'none'
        gerarFormalarioDinamico(indice)
    }
    function gerarFormalarioDinamico(indice){ // Gerador De formulario Dinamico
        console.log('Funcao: gerarHTMLDoTemplateCriado')
        let divFormularioDinamico = document.getElementById('formularioDinamico');
        let div = document.createElement('div');
        divFormularioDinamico.innerHTML = ''
        htmlASerGerado = `
            <div id='templateDinamico' class='classecards'> 

                <div class='titulo' id='divtitutlo'>
                    <h2>Template</h2>
                </div>

                <div id='divddd'>
                    <div class='input-group'>
                        <span class="input-group-text" id="">DDD e Celular</span>
                        <input id='formularioDinamicoDDD${indice}' oninput='preview()' class='form-control' type="numeric" placeholder="DDD" autofocus>
                        <input id='formularioDinamicoCelular${indice}' oninput='preview()' class='form-control' type="numeric" placeholder="Celular">
                        <button class='btn btn-primary' id='btnAddddd' onclick='criarDDDeCelular()'>+</button>
                    </div>
                    <!--DDD e Celular Adicionados-->
                </div>

                <div class='inputs' id='divemail'>
                    <div class='input-group'>
                        <span class="input-group-text" id="">Email</span>
                        <input id='formularioDinamicoEmail${indice}' oninput='preview()' class='form-control' type="email" placeholder="Email">
                        <button class='btn btn-primary' id='btnAddemail' onclick='criarEmail()'>+</button>
                    </div>
                    <!--Emails Adicionados-->
                </div>

                <div class='inputs' id='divdata'>
                    <div class='input-group'>
                        <span class="input-group-text" id="">Date</span>
                        <input id='formularioDinamicoDate${indice}' oninput='preview()' class='form-control' type="date" placeholder="Data">
                        <button class='btn btn-primary' id='btnAddemail' onclick='criarData()'>+</button>
                    </div>
                    <!--Data Adicionados-->
                </div>

                <div class='inputs' id='divselect'>
                    <div class='input-group'>
                        <span class="input-group-text" id="" oninput='preview()'>Select</span>
                        <select id="formularioDinamicoSelect${indice}" class='form-control'>
                            <option value="">Option1</option>
                            <option value="">Option2</option>
                            <option value="">Option3</option>
                        </select>
                        <button class='btn btn-primary' id='btnAddselect' onclick='criarSelect()'>+</button>
                    </div>
                    <!--Select Adicionados-->
                </div>

                <div class='inputs' id='divtextarea'>
                    <div class='input-group'>
                        <span class="input-group-text">Textarea</span>
                        <textarea id="formularioDinamicoTextarea${indice}" oninput='preview()' class='form-control' cols="70" rows="5" placeholder="Texto"></textarea>
                    </div>
                    <!--Textarea Adicionados-->
                </div>
                <div class='class-botoes' id='divbotoes'>
                    <button id='formulario-limpar' class='btn btn-warning' type='reset' onclick='limparFormularioDinamico('templateDinamico')'>Limpar</button>
                    <button id='formulario-cancelar' class='btn btn-danger' onclick='cancelarFormularioDinamico()'>Cancelar</button>
                    <button id='formulario-enviar' class='btn btn-success' onclick='pegarFormularioDinamico()'>Criar</button>
                </div>
                <div class='inputs' id='divpreview'>
                    <!--Preview Feito-->
                    Preview Aparece Aqui
                </div>
            </div>`
        
        div.innerHTML = htmlASerGerado
        divFormularioDinamico.appendChild(div)
    }
    function editarFormularioDinamico(indice){
        mostrarFormularioDinamico(indice)
    }
    function preview(){ //Preview
        let preview = document.getElementById('divpreview')
        let div = document.createElement('div')
        preview.innerHTML =''
        htmlDoPreview = 
        ` 
        `
        div.innerHTML = htmlDoPreview
        preview.appendChild(div)
    }
    function pegarFormularioDinamico(){
        // console.log('Funcao: PegarFormularioDinamico')
        let DDDeCelular = document.getElementById('divddd').getElementsByTagName('input')
        let Email = document.getElementById('divemail').getElementsByTagName('input')
        let Data = document.getElementById('divdata').getElementsByTagName('input')
        let Select = document.getElementById('divselect').getElementsByTagName('select')
        let Textarea = document.getElementById('divtextarea').getElementsByTagName('textarea')
        return [DDDeCelular,Email,Data,Select,Textarea]
    }
    function pegarFormularioDinamico2(){
        DDDeCelular = Array.from(pegarFormularioDinamico()[0], x=> x.value) //pra cada item dentro desse array me traz o item.value
                        //[DDD, Celular]
        Email = Array.from(pegarFormularioDinamico()[1], x=> x.value)
                        //[Email]
        Data = Array.from(pegarFormularioDinamico()[2], x=> x.value)
                        //[Data]
        Select = Array.from(pegarFormularioDinamico()[3], x=> x.value) //Esse ainda nao esta pronto
                        //[Select, Opcoes]
        Textarea = Array.from(pegarFormularioDinamico()[4], x=> x.value)
                        //[Textarea]
        DDD = []
        Celular = []
        console.log(DDD)
        console.log(DDDeCelular.length)
        for (let i=0; i<DDDeCelular.length; i=i+2){
            DDD.push(DDDeCelular[i])
            console.log(DDD)
            
        }
    }
    /*Criar e Deletar Itens*/
    function criarDDDeCelular(){
        let div = document.createElement('div')
        let divddd = document.getElementById('divddd')
        htmlASerGerado = 
                    `
                    <div class='input-group' id='divformularioDinamicoDDD${contador_ddd}'>
                        <span class="input-group-text" id="">DDD e Celular${contador_ddd}</span>
                        <input id='formularioDinamicoDDD${contador_ddd}' oninput='preview()' class='form-control' type="numeric" placeholder="DDD">
                        <input id='formularioDinamicoCelular${contador_ddd}' oninput='preview()' class='form-control' type="numeric" placeholder="Celular">
                        <button class='btn btn-primary' id='btnRemoveddd' onclick='deleteDDDeCelular(${contador_ddd})'>-</button>
                    </div>
                    `
        div.innerHTML = htmlASerGerado
        divddd.appendChild(div)
        contador_ddd+=1
    }
    function deleteDDDeCelular(indice){
        let div = document.getElementById(`divformularioDinamicoDDD${indice}`)
        div.remove()
    }
    /*Email*/
    function criarEmail(){
        let div = document.createElement('div')
        let divemail = document.getElementById('divemail')
        htmlASerGerado = 
                    `
                    <div class='input-group' id='divformularioDinamicoEmail${contador_email}'>
                        <span class="input-group-text">Email${contador_email}</span>
                        <input id='formularioDinamicoEmail${contador_email}' oninput='preview()' class='form-control' type="email" placeholder="Email">
                        <button class='btn btn-primary' id='btnRemoveemail' onclick='deleteEmail(${contador_email})'>-</button>
                    </div>
                    `
        div.innerHTML = htmlASerGerado
        divemail.appendChild(div)
        contador_email+=1
    }
    function deleteEmail(indice){
        let div = document.getElementById(`divformularioDinamicoEmail${indice}`)
        div.remove()
    }
    /*Data*/
    function criarData(){
        let div = document.createElement('div')
        let divemail = document.getElementById('divdata')
        htmlASerGerado = 
                    `
                    <div class='input-group' id='divformularioDinamicoData${contador_data}'>
                        <span class="input-group-text" id="">Date${contador_data}</span>
                        <input id='formularioDinamicoDate${contador_data}' oninput='preview()' class='form-control' type="date" placeholder="Data">
                        <button class='btn btn-primary' id='btnAddemail' onclick='deleteData(${contador_data})'>-</button>
                    </div>
                    `
        div.innerHTML = htmlASerGerado
        divemail.appendChild(div)
        contador_data+=1
    }
    function deleteData(indice){
        let div = document.getElementById(`divformularioDinamicoData${indice}`)
        div.remove()
    }
    function criarSelect(){
        let div = document.createElement('div')
        let divemail = document.getElementById('divselect')
        htmlASerGerado = 
                    `
                    <div class='input-group' id='divformularioDinamicoSelect${contador_select}'>
                        <span class="input-group-text" oninput='preview()'>Select${contador_select}</span>
                        <select id="formularioDinamicoSelect${contador_select}" class='form-control'>
                            <option >Option1</option>
                            <option >Option2</option>
                            <option >Option3</option>
                        </select>
                        <button class='btn btn-primary' id='btnAddselect' onclick='deleteSelect(${contador_select})'>-</button>
                    </div>
                    `
        div.innerHTML = htmlASerGerado
        divemail.appendChild(div)
        contador_select+=1
    }
    function deleteSelect(indice){
        let div = document.getElementById(`divformularioDinamicoSelect${indice}`)
        div.remove()
    }
    function limparFormularioDinamico(divElement){ //falta fazer
        console.log('Funcao: limparFormularioDinamico')
        var ele = document.getElementById(divElement);
        // IT WILL READ ALL THE ELEMENTS. <p>, <div>, <input> ETC.
        for (i = 0; i < ele.childNodes.length; i++) {
            // SINCE THE <input> FIELDS ARE INSIDE A <p> TAG, 
            // I'LL USE THE "firstChild" PROPERTY TO GET THE <input> TAG.
            var child = ele.childNodes[i];
            console.log(child);

            // CHECK IF CHILD NOT NULL.
            // THIS IS IMPORTANT AS IT WILL RETURN A TEXT FOR EVERY "Whitespace".
            // 'Whitespace' IS A TEXT OR NODE BETWEEN <div> AND <p> AND AFTER <p>.
            if (child) {
                switch (child.type) {
                    case 'button':
                    case 'text':
                    case 'submit':
                    case 'password':
                    case 'file':
                    case 'email':
                    case 'date':
                    case 'number':
                        child.value = '';
                    case 'checkbox':
                    case 'radio':
                        child.checked = false;
                }
            }       
        }
    }
    
        /*Em Espera*/
        
        function pegarFormularioDinamicoEGravarNoStorage(){ // falta dividir em partes
            console.log('Funcao: pegarFormularioDinamicoEGravarNoStorage')

            let indexNovoDoTemplate = 0
            if (templates.length>0){indexNovoDoTemplate = templates[templates.length -1].indice +1}
            else {indexNovoDoTemplate = 4}

            ddd = document.getElementById(`formularioDinamicoDDD`).value
            celular = document.getElementById(`formularioDinamicoCelular`).value
            email = document.getElementById(`formularioDinamicoEmail`).value
            data = document.getElementById(`formularioDinamicoDate`).value
            select = document.getElementById(`formularioDinamicoSelect`).value
            text = document.getElementById(`formularioDinamicoTextarea`).value

            template = {
                'indice': indexNovoDoTemplate,
                'ddd': ddd,
                'celular': celular,
                'email': email,
                'data': data,
                'select': select,
                'text': text,
                'dddinfo': dddinfo,
                'celularinfo': celularinfo,
                'emailinfo': emailinfo,
                'datainfo': datainfo,
                'selectinfo': selectinfo
            }
            templates.push(template)
            setStorageTemplates(templates)
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
    
    
