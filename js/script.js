function requerido(input) {
    if (input.value != "") {
        //el imput tiene texto
        input.className = "form-control is-valid";
        return true;
    } else {
        //el imput no tiene texto
        input.className = "form-control is-invalid";
        return false;
    };
};

function revisarEmail(input) {
    //lucasmart.tuc@gmail.com
    let expresion = /\w+@\w+\.[a-z]/;

    if (input.value != '' && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    };
};

function revisarConsulta(textArea) {
    if (textArea.value.length >= 10) {
        textArea.className = 'form-control is-valid';
        return true;
    } else {
        textArea.className = 'form-control is-invalid';
        return false;
    };
};

//agregar un evento a un objeto html...
let checkTerminos = document.getElementById('check');

//agregar evento...
checkTerminos.addEventListener('change', revisarTerminos);

function revisarTerminos() {
    if (checkTerminos.checked) {
        checkTerminos.className = 'form-check-input is-valid';
    } else {
        checkTerminos.className = 'form-check-input is-invalid';
    };
};

function validarGeneral(event) {
    event.preventDefault();
    if (requerido(document.getElementById('name')) && revisarEmail(document.getElementById('email')) && revisarConsulta(document.getElementById('consulta'))) {
        enviarEmail();
        console.log('validar general si se ejecuta')
    } else {
        return undefined;
    };
};

function enviarEmail() {
    let template_params = {
        "from_name": document.getElementById('name').value,
        "to_name": "administrador",
        "message_html": `email ${document.getElementById('email').value} - consulta: ${document.getElementById('consulta').value}`
    };

    let service_id = "default_service";
    let template_id = "template_Hznj3Dzp";
    emailjs.send(service_id, template_id, template_params).then(function (response) {
        //esto se envia si fue enviado el mail...
        console.log(response);
        document.getElementById('mensajeEnvio').className = "alert alert-success mt-3";
        document.getElementById('mensajeEnvio').innerText = 'Su consulta fue enviada con exito';
    },
        function (error) {
            console.log(error);
            document.getElementById('mensajeEnvio').className = "alert alert-danger mt-3";
            document.getElementById('mensajeEnvio').innerText = 'Ocurrio un error en el envio';
        }
    )
};