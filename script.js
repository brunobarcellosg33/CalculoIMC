const form = document.querySelector('#formulario');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputAltura = e.target.querySelector('#altura');
        const inputPeso = e.target.querySelector('#peso');

        const altura = Number(inputAltura.value); 
        const peso = Number(inputPeso.value); 

        if (!altura) {
            setResultado('Altura inválida', false);
            return;
        } 

        if (!peso) {
            setResultado('Peso Inválido', false);
            return;
        }

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc)

        const msg = `Seu IMC  é ${imc} (${nivelImc}).`;
        
        setResultado(msg, true)
        console.log(imc, nivelImc);
    });

    function getImc (peso, altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    /*
    Menos que 18,5 - Abaixo do Peso
    Entre 18,5 e 24,9 - Peso normal
    Entre 25 e 29,9 - Sobrepeso
    Entre 30 e 34,9 - Obesidade Grau I
    Entre 35 e 39,9 - Obesidade Grau II
    Mais do que 40 - Obesidade Grau III
    */

    function getNivelImc (imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau I','Obesidade Grau II', 'Obesidade Grau III'];
        
        if (imc>= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if(imc < 18.5)  return nivel[0];
    }
        

    function criaP () {
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg, isValid) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';

        const p = criaP();

        if (isValid) {
            p.classList.add('paragrafo-resultado');
        } else {
            p.classList.add('bad');
        }
        
        p.innerHTML = msg;
        resultado.appendChild(p);
    };
