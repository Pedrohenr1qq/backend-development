window.onload = function(){
    document.getElementById("CEP").addEventListener("focusout", function(){
        searchCEP(this.value);
    });
}


function clearForms(){
    document.getElementById("rua").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
}

function my_callback(response) {
    if(!("erro" in response)){
        document.getElementById("rua").value = (response.logradouro);
        document.getElementById("bairro").value = (response.bairro);
        document.getElementById("cidade").value = (response.localidade);
        document.getElementById("estado").value = (response.uf);
    }
    else{
        clearForms();
        alert("CEP não encontrado.");
    }
}

function searchCEP(value){
    var cep = value.replace(/\D/g, '');

    if(cep != ''){
        var checkCEP = /^[0-9]{8}$/;

        if(checkCEP.test(cep)){
            document.getElementById("rua").value = "...";
            document.getElementById("bairro").value = "...";
            document.getElementById("cidade").value = "...";
            document.getElementById("estado").value = "...";

            var script = document.createElement('script');
            script.src = "https://viacep.com.br/ws/"+ cep + "/json/?callback=my_callback";

            document.body.appendChild(script);
        }
        else{
            clearForms();
            alert("Formato do CEP invalido");
        }
    }else{  
        clearForms();
    }

}