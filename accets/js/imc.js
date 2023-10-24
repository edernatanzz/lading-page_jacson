
    function calcularIMC() {
        const peso = parseFloat(document.getElementById('peso').value);
        const alturaCm = parseFloat(document.getElementById('altura').value);

        if (isNaN(peso) || isNaN(alturaCm)) {
            document.getElementById('resultado-imc').innerHTML = '<p>Preencha o peso e a altura corretamente.</p>';
            return;
        }

        // Converta altura de cm para metros (dividindo por 100)
        const alturaMetros = alturaCm / 100;
        
        const imc = peso / (alturaMetros * alturaMetros);
        const resultado = `IMC = ${imc.toFixed(2)}`;

        let classificacao = '';
        if (imc < 18.5) {
            classificacao = 'Abaixo do Peso';
        } else if (imc < 24.9) {
            classificacao = 'Peso Normal';
        } else if (imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else if (imc < 34.9) {
            classificacao = 'Obesidade Grau I';
        } else if (imc < 39.9) {
            classificacao = 'Obesidade Grau II';
        } else {
            classificacao = 'Obesidade Grau III';
        }

        let pesoIdealMin = (18.5 * (alturaMetros * alturaMetros)).toFixed(2);
        let pesoIdealMax = (24.9 * (alturaMetros * alturaMetros)).toFixed(2);

        document.getElementById('resultado-imc').innerHTML = `<p>${resultado}</p><p>${classificacao}</p><p>Peso ideal: ${pesoIdealMin} Kg - ${pesoIdealMax} Kg</p>`;
    }

