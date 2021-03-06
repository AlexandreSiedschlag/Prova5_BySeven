
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
    function enviarMensagem(phone, mensagem){
    let x = window.open(`https://web.whatsapp.com/send?phone=${phone}&text=${mensagem}&app_absent=0`)
    x.focus()
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
            // enviarMensagem(mensagem)
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
            template = {
                'indice': indexNovoDoTemplate,
                'ddd': {'quantidade':qtddd=0, 'valor':ddd=[]},
                'celular': {'quantidade':qtcelular=0, 'valor':celular=[]},
                'email': {'quantidade':qtemail=0, 'valor':email=[]},
                'data': {'quantidade':qtdata=0, 'valor':data=[]},
                'select': {'quantidade':qtselect=0, 'valor':select=[], 'nomeOpcoes':[]},
                'text': text='',
                'phone' : phone=[]
            }
            templates.push(template)
            setStorageTemplates(templates)
            location.reload()
            // x = document.getElementById('divNovoCard')
            // y = x.scrollIntoView()
            window.location.href='#divNovoCard' //faz scroll para o local dos templates
            
        }
        function cancelarFormularioDinamico(){
            console.log('Funcao: cancelarFormulario')
            console.log('Funcao: mostrarFormulario(numero)')
            document.getElementById('sectionPaginaPrincipal').style.display='block' //pagina inicial
            document.getElementById('sectionTemplatesInseridos').style.display = 'block'
            document.getElementById('sectionDinamico').style.display = 'none'// formulario Dinamico
            document.getElementById('sectionFixo').style.display = 'none'
        }
        function editarFormularioDinamico(indice){
            mostrarFormularioDinamico(indice)
        }
        function mostrarFormularioDinamico(indice){ // Troca de Telas -  Formulario Fixo ou Dinamico
            console.log('Funcao: mostrarFormularioDinamico(numero)')
            document.getElementById('sectionPaginaPrincipal').style.display='none' //pagina inicial
            document.getElementById('sectionTemplatesInseridos').style.display = 'none'
            document.getElementById('sectionDinamico').style.display = 'block'// formulario Dinamico
            document.getElementById('sectionFixo').style.display = 'none'
            gerarFormalarioDinamico(indice)
        }
        function gerarFormalarioDinamico(indice){ // Gerador De formulario Dinamico
            console.log('Funcao: gerarHTMLDoTemplateCriado')
            /*Passo1 - Gerar Formulario Normal*/
            let divFormularioDinamico = document.getElementById('formularioDinamico');
            let div = document.createElement('div');
            divFormularioDinamico.innerHTML = ''
            htmlASerGerado = `
                <div id='templateDinamico'> 
                    <div id='error'></div>
                    <div class='titulo' id='divtitutlo'>
                        <h2>Template</h2>
                    </div>

                    <div id='divddd'>
                        <div class='input-group'>
                            <span class="input-group-text" id="">DDD e Celular</span>
                            <input id='formularioDinamicoDDD' oninput='preview()' pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==2) return false;"  class='form-control'  type="number" placeholder="DDD" autofocus required value='${templates[indice].ddd.valor[0]?templates[indice].ddd.valor[0]:''}'>
                            <input id='formularioDinamicoCelular' oninput='preview()' pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==9) return false;" class='form-control' type="number" placeholder="Celular" value='${templates[indice].celular.valor[0]?templates[indice].celular.valor[0]:''}'>
                            <button class='btn btn-primary' id='btnAddddd' onclick='criarDDDeCelular()'>+</button>
                        </div>
                        <!--DDD e Celular Adicionados-->
                    </div>

                    <div id='divemail'>
                        <div class='input-group'>
                            <span class="input-group-text" id="">Email</span>
                            <input id='formularioDinamicoEmail' oninput='preview()' class='form-control' type="email" placeholder="Email" value='${templates[indice].email.valor[0]?templates[indice].email.valor[0]:''}'>
                            <button class='btn btn-primary' id='btnAddemail' onclick='criarEmail()'>+</button>
                        </div>
                        <!--Emails Adicionados-->
                    </div>

                    <div id='divdata'>
                        <div class='input-group'>
                            <span class="input-group-text" id="">Date</span>
                            <input id='formularioDinamicoDate' oninput='preview()' class='form-control' type="date" value='${templates[indice].data.valor[0]?templates[indice].data.valor[0]:''}'>
                            <button class='btn btn-primary' id='btnAddemail' onclick='criarData()'>+</button>
                        </div>
                        <!--Data Adicionados-->
                    </div>

                    <div id='divselect'>
                        <div class='input-group'>
                            <span class="input-group-text" id="" oninput='preview()'>Select</span>
                            <select id="formularioDinamicoSelect" class='form-control'>
                                <option value="">Option1</option>
                                <option value="">Option2</option>
                                <option value="">Option3</option>
                            </select>
                            <button class='btn btn-primary' id='btnAddselect' onclick='criarSelect()'>+</button>
                        </div>
                        <!--Select Adicionados-->
                    </div>

                    <div id='divtextarea'>
                        <div class='input-group'>
                            <span class="input-group-text">Textarea</span>
                            <textarea id="formularioDinamicoTextarea" oninput='preview()' class='form-control' cols="70" rows="5" placeholder="Texto"></textarea>
                        </div>
                        <!--Textarea Adicionados-->
                    </div>
                    <div class='class-botoes' id='divbotoes'>
                        <button id='formulario-limpar' class='btn btn-warning' type='button' onclick='limparFormularioDinamico("templateDinamico")'>Limpar</button>
                        <button id='formulario-cancelar' class='btn btn-danger' onclick='cancelarFormularioDinamico()'>Cancelar</button>
                        <button id='formulario-salvar' class='btn btn-primary' type='submit' onclick='pegarFormularioDinamicoEGravarNoStorage(${indice})'>Salvar</button>
                        <button id='formulario-enviar' class='btn btn-success' onclick='enviarMensagem()'>Salvar e Enviar</button>
                    </div>
                    <div id='divpreview'>
                        <!--Preview Feito-->
                        Preview Aparece Aqui
                    </div>
                    <div class='input-group' id='templateSalvo'>
                        <h1>Template Salvo</h1>
                    </div>
                </div>`
            
            div.innerHTML = htmlASerGerado
            divFormularioDinamico.appendChild(div)

            /*Passo2 - Gerar Formulario com a quantidade de ddd e celular*/
            function reloadDDDeCelularFormulario(){
                console.log('Funcao reloadDDDeCelularFormulario')
                for (let i=0; i<templates[indice].ddd.quantidade;i++){
                    x = i+1
                    let div = document.createElement('div')
                    let divddd = document.getElementById('divddd')
                    htmlASerGerado =
                                `
                                <div class='input-group' id='divformularioDinamicoDDD${i}'>
                                    <span class="input-group-text" id="">DDD e Celular${i}</span>
                                    <input id='formularioDinamicoDDD${i}' oninput='preview()' class='form-control' type="number" placeholder="DDD" value='${templates[indice].ddd.valor[x]?templates[indice].ddd.valor[x]:''}'>
                                    <input id='formularioDinamicoCelular${i}' oninput='preview()' class='form-control' type="number" maxlength='9' placeholder="Celular" value='${templates[indice].celular.valor[x]?templates[indice].celular.valor[x]:''}'>
                                    <button class='btn btn-danger' id='btnRemoveddd' onclick='deleteDDDeCelular(${i})'>-</button>
                                </div>
                                `
                    div.innerHTML = htmlASerGerado
                    divddd.appendChild(div)
                }
            }
            reloadDDDeCelularFormulario()

            /*Passo3 - Gerar Formulario com a quantidade de email*/
            function reloadEmailFormulario(){
                console.log('Funcao reloadEmailFormulario')
                for (let i=0; i<templates[indice].email.quantidade;i++){
                    x=i+1
                    let div = document.createElement('div')
                    let divddd = document.getElementById('divemail')
                    htmlASerGerado =
                                `
                                <div class='input-group' id='divformularioDinamicoEmail${i}'>
                                    <span class="input-group-text">Email${i}</span>
                                    <input id='formularioDinamicoEmail${i}' oninput='preview()' class='form-control' type="email" placeholder="Email" value='${templates[indice].email.valor[i]?templates[indice].email.valor[i]:''}'>
                                    <button class='btn btn-danger' id='btnRemoveemail' onclick='deleteEmail(${i})'>-</button>
                                </div>
                                `
                    div.innerHTML = htmlASerGerado
                    divddd.appendChild(div)
                }
            }
            reloadEmailFormulario()

            /*Passo4 - Gerar Formulario com a quantidade de data*/
            function reloadDataFormulario(){
                console.log('Funcao reloadDataFormulario')
                for (let i=0; i<templates[indice].data.quantidade;i++){
                    x=i+1
                    let div = document.createElement('div')
                    let divddd = document.getElementById('divdata')
                    htmlASerGerado =
                                `
                                <div class='input-group' id='divformularioDinamicoData${i}'>
                                    <span class="input-group-text" id="">Date${i}</span>
                                    <input id='formularioDinamicoDate${i}' oninput='preview()' class='form-control' type="date" placeholder="Data" value='${templates[indice].data.valor[x]?templates[indice].data.valor[x]:''}'>
                                    <button class='btn btn-danger' id='btnAddedata' onclick='deleteData(${i})'>-</button>
                                </div>
                                `
                    div.innerHTML = htmlASerGerado
                    divddd.appendChild(div)
                    
                }
            }
            reloadDataFormulario()
        }
        /*Quando Aperta Salvar Apenas*/
            /*Validations*/
            function pegarFormularioDinamicoEGravarNoStorage(indice){ // falta dividir em partes
                console.log('Funcao: pegarFormularioDinamicoEGravarNoStorage')

                //Pegar Valores Digitados
                ddd = pegarFormularioDinamico()[0]
                celular = pegarFormularioDinamico()[1]
                email = pegarFormularioDinamico()[2]
                data = pegarFormularioDinamico()[3]
                select = pegarFormularioDinamico()[4]
                text = pegarFormularioDinamico()[5]

                //Pegar Quantidades de campos
                qtddd = (document.getElementById('divddd').getElementsByTagName('input').length)/2-1
                qtcelular = (document.getElementById('divddd').getElementsByTagName('input').length)/2-1
                qtemail = (document.getElementById('divemail').getElementsByTagName('input').length)-1
                qtdata = (document.getElementById('divdata').getElementsByTagName('input').length)-1
                qtselect = (document.getElementById('divselect').getElementsByTagName('select').length)-1
                phone=[]
                function telefone(){
                    for (let i=0;i<(ddd.length);i++){
                        let x = String('55') + String(ddd[i]) + String(celular[i])
                        phone.push(x)
                    }
                    return phone
                }
                function validarFormulario(){
                    function validaDDD(){
                        let y=0
                        for (valor of ddd){
                            if (!JSON.stringify(valor).includes('e')){
                                if (valor && valor.length===2 && valor>0){
                                    y += 1
                                }
                                else{alert('Verifique o DDD'); break}
                            }
                            else{alert('Verifique o DDD'); break}
                        }
                        if (y==ddd.length){return true}
                        else{return false}
                    }
                    function validaCelular(){
                        let y=0
                        for (valor of celular){
                            if(!JSON.stringify(valor).includes('e')){
                                if(valor && valor.length===9 && valor>0){
                                    y+=1
                                }
                                else {alert('Celular Incorreto');break}
                            }
                            else {alert('Celular Incorreto');break}
                        }
                        if (y==celular.length){return true}
                        else{return false}
                    }
                    function validaEmail(){
                        let y=0
                        for (valor of email){
                            if (valor.includes('@') && valor.includes('.com')){
                                if (valor && valor.length>=5){
                                    y += 1
                                }
                                else{alert('Verifique o Email'); break}
                            }
                            else{alert('Verifique o Email'); break}
                        }
                        if (y==email.length){return true}
                        else{return false}
                    }
                    function validaData(){
                        let y=0
                        for (valor of data){
                            if (valor){
                                y += 1
                            }
                            else{alert('Verifique a Data'); break}
                        }
                        if (y==data.length){return true}
                        else{return false}
                    }
                    function validarFormulario2(){
                        if(validaDDD() && validaCelular() && validaEmail() && validaData()){
                            template = {
                                'indice': templates[indice].indice,
                                'ddd': {'quantidade':qtddd, 'valor':ddd},
                                'celular': {'quantidade':qtcelular, 'valor':celular},
                                'email': {'quantidade':qtemail, 'valor':email},
                                'data': {'quantidade':qtdata, 'valor':data},
                                'select': {'quantidade':qtselect, 'valor':select},
                                'text': text,
                                'phone' : telefone()}
                                //Overwrite no storage
                            templates.splice(indice,1, template)
                            setStorageTemplates(templates)
                            /*Push Template Salvo*/
                            document.getElementById('templateSalvo').style.display = 'block'
                            return true} 
                        else{alert('Formulario Nao Validado'); return false}
                    }
                    validarFormulario2()
                }
                validarFormulario()
            }
            function pegarFormularioDinamico(){
                function pegarFormularioDinamico2(){
                    let DDDeCelular = document.getElementById('divddd').getElementsByTagName('input')
                    let Email = document.getElementById('divemail').getElementsByTagName('input')
                    let Data = document.getElementById('divdata').getElementsByTagName('input')
                    let Select = document.getElementById('divselect').getElementsByTagName('select')
                    let Textarea = document.getElementById('divtextarea').getElementsByTagName('textarea')
                    return [DDDeCelular,Email,Data,Select,Textarea]
                }
                DDDeCelular = Array.from(pegarFormularioDinamico2()[0], x=> x.value) //pra cada item dentro desse array me traz o item.value
                                //[DDD, Celular]
                Email = Array.from(pegarFormularioDinamico2()[1], x=> x.value)
                                //[Email]
                Data = Array.from(pegarFormularioDinamico2()[2], x=> x.value)
                                //[Data]
                Textarea = Array.from(pegarFormularioDinamico2()[4], x=> x.value)
                                //[Textarea]
                Select = pegarFormularioDinamico2()[3][0].selectedOptions[0].text
                                //[Select]
                DDD = []
                Celular = []
                for (let i=0; i<DDDeCelular.length; i=i+2){
                    DDD.push(DDDeCelular[i])
                    Celular.push(DDDeCelular[i+1])
                }
                return [DDD, Celular, Email, Data, Select, Textarea]
            }
        /*Criar e Deletar Itens*/
            function criarDDDeCelular(){
                let div = document.createElement('div')
                let divddd = document.getElementById('divddd')
                htmlASerGerado = 
                            `
                            <div class='input-group' id='divformularioDinamicoDDD${contador_ddd}'>
                                <span class="input-group-text" id="">DDD e Celular${contador_ddd}</span>
                                <input id='formularioDinamicoDDD${contador_ddd}' oninput='preview()' class='form-control' type="number" placeholder="DDD">
                                <input id='formularioDinamicoCelular${contador_ddd}' oninput='preview()' class='form-control' type="tel" placeholder="Celular">
                                <button class='btn btn-danger' id='btnRemoveddd' onclick='deleteDDDeCelular(${contador_ddd})'>-</button>
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
                                <button class='btn btn-danger' id='btnRemoveemail' onclick='deleteEmail(${contador_email})'>-</button>
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
                                <button class='btn btn-danger' id='btnAddedata' onclick='deleteData(${contador_data})'>-</button>
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
        /*Select*/
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
                                <button class='btn btn-danger' id='btnAddselect' onclick='deleteSelect(${contador_select})'>-</button>
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
        /*Limpar Formualrio Dinamico*/
            function limparFormularioDinamico(id){
                console.log('Funcao: limparFormularioDinamico')
                let container = document.getElementById(id)
                let inputs = container.getElementsByTagName('input')
                for(let index = 0;index<inputs.length;index++){
                    x = inputs[index].id
                    document.getElementById(x).value =''
                }
            }
        /*Preview*/
            function preview(){
                let preview = document.getElementById('divpreview')
                let div = document.createElement('div')
                preview.innerHTML = ''
                htmlDoPreview = 
                ` 
                DDD: ${pegarFormularioDinamico()[0]}
                <br>Celular: ${pegarFormularioDinamico()[1]}
                <br>Email: ${pegarFormularioDinamico()[2]}
                <br>Data: ${pegarFormularioDinamico()[3]}
                <br>Select: ${pegarFormularioDinamico()[4]}
                <br>Text: ${pegarFormularioDinamico()[5]}
                `
                div.innerHTML = htmlDoPreview
                preview.appendChild(div)
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
    
    
