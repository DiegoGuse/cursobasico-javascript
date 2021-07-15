function calcular(){

    var inicio = document.getElementById("num")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res") 

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0)
    {
        res.innerHTML = "Impossivel Contar"

        //alert("[Erro] Faltam Dados !")
        
    }else{
        
        res.innerHTML="Contando : <br> "
        var inicio1 = Number(inicio.value)
        var fim1 = Number(fim.value)
        var passo1 = Number(passo.value)
        if(passo1 <=0)
        {
            alert("Passo invalido ! Considerando PASSO 1")
            passo1 = 1;
        }
        if(inicio1 < fim1)
        {   //Contagem Crescente
            for( var c = inicio1; c<=fim1  ; c += passo1)
            {
                res.innerHTML+=` ${c}  \u{1F449} `
            }
           
            //Contagem Regressiva
        }else{
            for( var c = inicio1; c >= fim1  ; c -= passo1)
            {
                res.innerHTML+=` ${c}  \u{1F449} `
            }

        }
        res.innerHTML+=`\u{1F3C1}`
        

    }
    



}