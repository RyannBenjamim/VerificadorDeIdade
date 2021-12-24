function verificar() {
    var txtano = document.getElementById("txtano") // Ano nascimento
    var res = document.getElementById("res") // Caixa de resposta
    var agora = new Date() // Função de tempo
    var ano = agora.getFullYear() // Ano atual

    if (txtano.value.length == 0){
        alert("[ERRO] Valor inválido")
    } else {
        var radio = document.getElementsByName("radsex") // Capturando os radios
        var idade = ano - Number(txtano.value) // Calculo da idade
        var genero = "" // Gênero
        var img = document.createElement("img")

        if (radio[0].checked){ // Masculino checado
            genero = "Homen"
            if (idade < 0){
                // Nem nasceu
                img.setAttribute("src", "foto-futuro.png")
            } else if (idade <= 4){
                // abaixo de 5 anos
                img.setAttribute("src", "foto-bebe1-m.png")
            } else if (idade <= 8){
                // entre 5 e 8 anos
                img.setAttribute("src", "foto-bebe2-m.png")
            } else if (idade <= 13){
                // entre 9 e 13 anos
                img.setAttribute("src", "foto-criança-m.png")
            } else if (idade <= 23){
                // entre 14 e 23 anos
                img.setAttribute("src", "foto-jovem-m.png")
            } else if (idade <= 49){
                // entre 24 e 49 anos
                img.setAttribute("src", "foto-adulto-m.png")
            } else if (idade <= 110){
                // entre 50 e 110 anos
                img.setAttribute("src", "foto-idoso-m.png")
            } else {
                // Acima de 111 anos
                img.setAttribute("src", "foto-caveira.png")
            }
        } else if (radio[1].checked){ // Feminino checado
            genero = "Mulher"
            if (idade < 0){
                // Nem nasceu
                img.setAttribute("src", "foto-futuro.png")
            } else if (idade <= 4){
                // abaixo de 5 anos
                img.setAttribute("src", "foto-bebe1-f.png")
            } else if (idade <= 8){
                // entre 5 e 8 anos
                img.setAttribute("src", "foto-bebe2-f.png")
            } else if (idade <= 13){
                // entre 9 e 13 anos
                img.setAttribute("src", "foto-criança-f.png")
            } else if (idade <= 23){
                // entre 14 e 23 anos
                img.setAttribute("src", "foto-jovem-f.png")
            } else if (idade <= 49){
                // entre 24 e 49 anos
                img.setAttribute("src", "foto-adulto-f.png")
            } else if (idade <= 110){
                // entre 50 e 110 anos
                img.setAttribute("src", "foto-idoso-f.png")
            } else {
                // Acima de 110 anos
                img.setAttribute("src", "foto-caveira.png")
            }
        }

        if (idade < 0){
            res.innerHTML = `Detectamos ${genero} que veio do futuro!!!`
        } else if (idade > 110){
            res.innerHTML = `Detectamos ${genero} com idade até demais...`
        } else {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        }
        res.style.textAlign = "center"
        img.style.marginTop = "12px"
        res.appendChild(img)
    }
}