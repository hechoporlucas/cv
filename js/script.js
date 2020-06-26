function requerido(input){
    if(input.value != ""){
        //el imput tiene texto
        input.className = "form-control is-valid";
        return true;
    }else{
        //el imput no tiene texto
        input.className = "form-control is-invalid";
        return false;
    };
};

function revisarEmail(input){
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email.test(input.value)){
        input.className = "form-control is-valid";
        return true;
    } else{
        input.className = 'form-control is-invalid';
        return false;
    };
};

let checkTerminos = document.getElementById('check');

checkTerminos.addEventListener('change', revisarTerminos);

function revisarTerminos(){
    if(checkTerminos.checked){
        checkTerminos.className = 'form-group danger';
        return true;
    } else{
        checkTerminos.className = 'form-group success';
        return false;
    };
};

function validarFormulario(event){
    if(requerido(document.getElementById('name')) && revisarEmail(document.getElementById('email'))){
        alert('form ready to send');
    } else{
        alert('undefinded');
    };
};