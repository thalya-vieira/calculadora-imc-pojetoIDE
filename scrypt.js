const formulario = document.getElementById("formulario");
        const resultado = document.getElementById("resultado");

        function calcularIMC(peso, altura) {
            altura = altura / 100;
            return peso / (altura * altura);
        }

        formulario.addEventListener("submit", function(event) {
            event.preventDefault();

            const peso = Number(document.getElementById("peso").value);
            const altura = Number(document.getElementById("altura").value);

            if (peso <= 0 || altura <= 0) {
                resultado.textContent = "Informe um peso e uma altura válidos.";
                return;
            }

            const imc = calcularIMC(peso, altura);

            let classificacao;

            if (imc < 18.5) {
                classificacao = "Abaixo do peso";
            } else if (imc < 25) {
                classificacao = "Peso normal";
            } else if (imc < 30) {
                classificacao = "Sobrepeso";
            } else if (imc < 35) {
                classificacao = "Obesidade grau I";
            } else if (imc < 40) {
                classificacao = "Obesidade grau II";
            } else {
                classificacao = "Obesidade grau III";
            }

            resultado.textContent =
                "Seu IMC é " + imc.toFixed(2) + ". Classificação: " + classificacao;
        });
