window.onload = function(){
    //Acionando  a perda de foco do campo num2
    document.getElementById("num2").addEventListener("focusout", function(){
        //Armazenando os valores recebidos
        num1 = parseInt(document.getElementById("num1").value);
        num2 = parseInt(document.getElementById("num2").value);
        
        //Somando os valores
        document.getElementById("resultSum").value = num1 + num2;
    });

    //Acionando a perda de foco do campo num4
    document.getElementById("num4").addEventListener("focusout",function(){
        //Armazenando os valores recebidos
        num1 = parseInt(document.getElementById("num3").value);
        num2 = parseInt(document.getElementById("num4").value);

        //Subtraindo os valores
        document.getElementById("resultSub").value = num1 - num2;
    });

    //Acionando a perda de foco do campo num6
    document.getElementById("num6").addEventListener("focusout",function(){
        //Armazenando os valores recebidos
        num1 = parseInt(document.getElementById("num5").value);
        num2 = parseInt(document.getElementById("num6").value);

        //Subtraindo os valores
        document.getElementById("resultMult").value = num1 * num2;
        });
    //Acionando a perda de foco do campo num8
    document.getElementById("num8").addEventListener("focusout",function(){
        //Armazenando os valores recebidos
        num1 = parseInt(document.getElementById("num7").value);
        num2 = parseInt(document.getElementById("num8").value);

        //Subtraindo os valores
        document.getElementById("resultDiv").value = num1 / num;
    });


    element_1 = document.getElementById("num1");

    element_1.addEventListener("click", function(){
        element_1.value= "";
    })


}
