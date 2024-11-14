var special_words = ['CPU', 'ULA', 'REGISTRADORES', 'RAM', 'ROM', 'EPROM', 'FLASH', 'MEMÓRIA DE MASSA', 'DMA', 'CS', 'ADDRESS BUS', 'DATA BUS', 'I5', 'I7', 'DUAL CORE', 'QUAD CORE'];

var questions_list = [
'Qual o componente eletronico conhecido por ser o “cérebro” do computador?',
'Qual a parte do processador responsavel por fazer operações matemáticas?',
'Qual o nome do tipo de memoria mais rapida dentro do computador?',
'Qual o tipo de memoria que armazena dados temporarios?',
'Qual a memoria usada para “guardar” a BIOS?',
'Qual o tipo de memoria que é usada para armazenar o firmware do sistema?',
'Qual o tipo de memoria que é usada para armazenar dados em dispositivos hibridos como pendrives e discos rigidos externos?', 
'Qual o segundo tipo de memoria usada em HD’s e SSD’s?',
'Qual processador lançando em 2009 pela Intel foi o primeiro a apresentar frequencia de 2.66Gz e Quad Core? Qual processador lançado em 2008 pela Intel é sucessor direto do Intel Core 2?',
'Como é denominado um processador com 2 núcleos independentes? Como é denominado um processador com 4 núcleos independentes?',
'Como se fala Barramento de endereço em inglês?', 
'Qual o Hardware responsável pelo transporte de dados entre componentes dentro de um sistema?', 
'Qual o nome do modelo de processador desenvolvido pela Intel que teve sua primeira versão lançada em meados de 2009?',
'Qual o recurso que permite que dispositivos de I/O transfiram dados para a memória principal sem envolver diretamente o processador, liberando a CPU para outras tarefas e melhorando a eficiência do sistema?',
'Qual o tipo de processador que possui dois núcleos independentes?',
'Qual o tipo de processador que possui 4 núcleos independentes?',
];


var filledCell = [3, 21, 39, 134, 135, 136, 60, 78, 96, 114, 132, 150,
    168, 186, 204, 222, 240, 258, 276, 60, 61, 62, 273, 291, 309, 237,
    255, 273, 291, 309, 117, 135, 153, 171, 189, 28, 46, 64, 82, 100, 118,
    136, 154, 172, 190, 208, 226, 244, 262, 280, 298, 204, 205, 206, 313,
    314, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 188, 21, 224,
    242, 260, 278, 296, 314, 118, 119, 114, 115, 38, 39, 40, 41, 42, 43,
    44, 45, 46, 4, 22, 40, 58, 76, 94, 112, 130, 148];


var firstIndex = [3, 134, 60, 61, 273, 237, 117, 28, 204, 313, 270, 188, 118, 114, 38, 4];

var pontuacao = 0;

var word = {

    word1: {
        letter: special_words[0].split(''),
        position: [3, 21, 39],
        write: function () {

            for (i in word.word1.letter) {
                var findCell = document.querySelector(`#cell_${word.word1.position[i]}`);

                findCell.innerHTML = word.word1.letter[i];
                console.log(word.word1.letter[i]);
            }
            cell_3.innerHTML = '<span style="color: red; font-size:10px">1</span>C';
        }
    },
    word2: {
        letter: special_words[1].split(''),
        position: [134, 135, 136],
        write: function () {
            for (i in word.word2.letter) {
                var findCell = document.querySelector(`#cell_${word.word2.position[i]}`);

                findCell.innerHTML = word.word2.letter[i];
                console.log(word.word2.letter[i]);
            }
            cell_134.innerHTML = '<span style="color: red; font-size:10px">2</span>U';

        }
    },
    word3: {
        letter: special_words[2].split(''),
        position: [60, 78, 96, 114, 132, 150, 168, 186, 204, 222, 240, 258, 276],
        write: function () {
            for (i in word.word3.letter) {
                var findCell = document.querySelector(`#cell_${word.word3.position[i]}`);

                findCell.innerHTML = word.word3.letter[i];
                console.log(word.word3.letter[i]);
            }
            cell_60.innerHTML = '<span style="color: red; font-size:10px">3_4</span>R';
            cell_114.innerHTML = '<span style="color: red; font-size:10px">14</span>I';
        }
    },
    word4: {
        letter: special_words[3].split(''),
        position: [60, 61, 62],
        write: function () {
            for (i in word.word4.letter) {
                var findCell = document.querySelector(`#cell_${word.word4.position[i]}`);

                findCell.innerHTML = word.word4.letter[i];
                console.log(word.word4.letter[i]);
            }
            cell_60.innerHTML = '<span style="color: red; font-size:10px">3_4</span>R';
        }
    },
    word5: {
        letter: special_words[4].split(''),
        position: [273, 291, 309],
        write: function () {
            for (i in word.word5.letter) {
                var findCell = document.querySelector(`#cell_${word.word5.position[i]}`);

                findCell.innerHTML = word.word5.letter[i];
                console.log(word.word5.letter[i]);
            }
            cell_273.innerHTML = '<span style="color: red; font-size:10px">5</span>R';
        }
    },
    word6: {
        letter: special_words[5].split(''),
        position: [237, 255, 273, 291, 309],
        write: function () {
            for (i in word.word6.letter) {
                var findCell = document.querySelector(`#cell_${word.word6.position[i]}`);

                findCell.innerHTML = word.word6.letter[i];
                console.log(word.word6.letter[i]);
            }
            cell_237.innerHTML = '<span style="color: red; font-size:10px">6</span>E';
        }
    },
    word7: {
        letter: special_words[6].split(''),
        position: [117, 135, 153, 171, 189],
        write: function () {
            for (i in word.word7.letter) {
                var findCell = document.querySelector(`#cell_${word.word7.position[i]}`);

                findCell.innerHTML = word.word7.letter[i];
                console.log(word.word7.letter[i]);
            }
            cell_117.innerHTML = '<span style="color: red; font-size:10px">7</span>F';
        }
    },
    word8: {
        letter: special_words[7].split(''),
        position: [28, 46, 64, 82, 100, 118, 136, 154, 172, 190, 208, 226, 244, 262, 280, 298],
        write: function () {
            for (i in word.word8.letter) {
                var findCell = document.querySelector(`#cell_${word.word8.position[i]}`);

                findCell.innerHTML = word.word8.letter[i];
                console.log(word.word8.letter[i]);
            }
            cell_28.innerHTML = '<span style="color: red; font-size:10px">8</span>M';
            cell_118.innerHTML = '<span style="color: red; font-size:10px">13</span>I';
            cell_154.innerHTML = '-';
            cell_208.innerHTML = '-';

        }
    },
    word9: {
        letter: special_words[8].split(''),
        position: [204, 205, 206, 313, 314],
        write: function () {
            for (i in word.word9.letter) {
                var findCell = document.querySelector(`#cell_${word.word9.position[i]}`);

                findCell.innerHTML = word.word9.letter[i];
                console.log(word.word9.letter[i]);
            }
            cell_204.innerHTML = '<span style="color: red; font-size:10px">9</span>D';
        }
    },
    word10: {
        letter: special_words[9].split(''),
        position: [313, 314],
        write: function () {
            for (i in word.word10.letter) {
                var findCell = document.querySelector(`#cell_${word.word10.position[i]}`);

                findCell.innerHTML = word.word10.letter[i];
                console.log(word.word10.letter[i]);
            }
            cell_313.innerHTML = '<span style="color: red; font-size:10px">10</span>C';
        }
    },
    word11: {
        letter: special_words[10].split(''),
        position: [270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280],
        write: function () {
            for (i in word.word11.letter) {
                var findCell = document.querySelector(`#cell_${word.word11.position[i]}`);

                findCell.innerHTML = word.word11.letter[i];
                console.log(word.word11.letter[i]);
            }
            cell_270.innerHTML = '<span style="color: red; font-size:10px">11</span>A';
            cell_277.innerHTML = '-';
        }
    },
    word12: {
        letter: special_words[11].split(''),
        position: [188, 206, 224, 242, 260, 278, 296, 314, 118, 119],
        write: function () {
            for (i in word.word12.letter) {
                var findCell = document.querySelector(`#cell_${word.word12.position[i]}`);

                findCell.innerHTML = word.word12.letter[i];
                console.log(word.word12.letter[i]);
            }
            cell_188.innerHTML = '<span style="color: red; font-size:10px">12</span>D';
            cell_260.innerHTML = '-';
        }
    },
    word13: {
        letter: special_words[12].split(''),
        position: [118, 119],
        write: function () {
            for (i in word.word13.letter) {
                var findCell = document.querySelector(`#cell_${word.word13.position[i]}`);

                findCell.innerHTML = word.word13.letter[i];
                console.log(word.word13.letter[i]);
            }
            cell_118.innerHTML = '<span style="color: red; font-size:10px">13</span>I';
        }
    },
    word14: {
        letter: special_words[13].split(''),
        position: [114, 115],
        write: function () {
            for (i in word.word14.letter) {
                var findCell = document.querySelector(`#cell_${word.word14.position[i]}`);

                findCell.innerHTML = word.word14.letter[i];
                console.log(word.word14.letter[i]);
            }
            cell_114.innerHTML = '<span style="color: red; font-size:10px">14</span>I';
        }
    },
    word15: {
        letter: special_words[14].split(''),
        position: [38, 39, 40, 41, 42, 43, 44, 45, 46],
        write: function () {
            for (i in word.word15.letter) {
                var findCell = document.querySelector(`#cell_${word.word15.position[i]}`);

                findCell.innerHTML = word.word15.letter[i];
                console.log(word.word15.letter[i]);
            }
            cell_38.innerHTML = '<span style="color: red; font-size:10px">15</span>D';
            cell_42.innerHTML = '-';
        }
    },
    word16: {
        letter: special_words[15].split(''),
        position: [4, 22, 40, 58, 76, 94, 112, 130, 148],
        write: function () {
            for (i in word.word16.letter) {
                var findCell = document.querySelector(`#cell_${word.word16.position[i]}`);

                findCell.innerHTML = word.word16.letter[i];
                console.log(word.word16.letter[i]);
            }
            cell_4.innerHTML = '<span style="color: red; font-size:10px">16</span>Q';
            cell_76.innerHTML = '-';
        }
    }
};

var widthTable = 18;
var heightTable = 18;

function fecharModal() {
    modal_inicio.style.display = 'none';
    renderizarTabela();
    listarPerguntas();
}

function verificarResposta() {
    var resposta = input_resposta.value;

    if (resposta != '') {
        resposta = resposta.toUpperCase();
        var incluiReposta = special_words.includes(resposta);

        if (incluiReposta) {
            span_situacao.classList.remove('wrongAnswer');
            span_situacao.classList.add('correctAnswer');
            span_situacao.innerHTML = 'Resposta Correta!';
            var indiceResposta = special_words.indexOf(resposta);
        }
        else {
            span_situacao.classList.remove('correctAnswer');
            span_situacao.classList.add('wrongAnswer');
            span_situacao.innerHTML = 'Resposta Incorreta, tente novamente';
        }

        span_situacao.value = '';
        continuarJogo(indiceResposta);
    }
    else {
        alert('Por Favor, digite uma resposta na caixa de texto');
    }
}



function continuarJogo(indiceResposta) {
    var words = [word.word1, word.word2, word.word3, word.word4, word.word5, word.word6,
        word.word7, word.word8, word.word9, word.word10, word.word11, word.word12,
        word.word13, word.word14, word.word15, word.word16];
    
    var spans_perguntas = [span_pergunta1, span_pergunta2, span_pergunta3, span_pergunta4,
        span_pergunta5, span_pergunta6, span_pergunta7, span_pergunta8,
        span_pergunta9, span_pergunta10, span_pergunta11, span_pergunta12,
        span_pergunta13, span_pergunta14, span_pergunta15, span_pergunta16];
    indiceResposta++;

    if (indiceResposta >= 1 && indiceResposta <= words.length) {
        var wordAtual = words[indiceResposta - 1];
        var spanAtual = spans_perguntas[indiceResposta - 1];

        wordAtual.write();

        if (spanAtual && spanAtual.style.color === 'green') {
            span_situacao.innerHTML = 'Você já respondeu essa...';
        } else if (spanAtual) {
            spanAtual.style.color = 'green'; 
            pontuacao++;
        }

        if (pontuacao == 16) {
            finalizarJogo();
        }
    }
}

function listarPerguntas() {
    var tamanho_lista = questions_list.length;
    var estrutura = '';
    for (var i = 0; i < tamanho_lista; i++) {
        estrutura +=
            `
        <span id="span_pergunta${i + 1}"><b>${i + 1}</b>. ${questions_list[i]}</span> <br> <br>
        `;
    }

    div_perguntas.innerHTML = estrutura;
}

function finalizarJogo() {
    div_perguntas.style.display = 'none';
    input_resposta.style.display = 'none';
    btn_verificar.style.display = 'none';
    h1_titulo.style.display = 'none';
    span_situacao.style.fontSize = '50px';
    btn_reiniciar.style.display = 'block';
    span_situacao.innerHTML = 'Parabéns!!<br>Você finalizou o jogo!';
}

function renderizarTabela() {
    var tableGame = '<table id="gridGame" cellspacing=0 cellpadding=0>';
    var cellContent_tableGame = '&nbsp';
    var cell = 0;
    for (var row = 1; row <= heightTable; row++) {

        tableGame += `<tr id="row_${row}">`;

        for (var column = 1; column <= widthTable; column++, cell++) {
            tableGame += `<td class="deadCell" id="cell_${cell}">` + cellContent_tableGame + '</td>';

        }
        tableGame += '</tr>';

    }
    tableGame += '</table>';

    document.querySelector('#div_canvasCruzada').innerHTML = tableGame;

    pintarCelulas();
}



function pintarCelulas() {

    for (item in filledCell) {
        var paintCell = document.getElementById(`cell_${filledCell[item]}`);
        paintCell.removeAttribute('deadCell');
        paintCell.setAttribute('class', 'availableCell');
    }

    for (var initial = 0; initial < firstIndex.length; initial++) {
        var paintIndex_cell = document.getElementById(`cell_${firstIndex[initial]}`);

        paintIndex_cell.innerHTML = `<span style="color: red; font-size:10px">${initial + 1}</span>`;

        if (initial == 2 || initial == 3) {
            paintIndex_cell.innerHTML = `<span style="color: red; font-size:10px">3_4</span>`;
        }
    }
}

function reiniciar() {
    window.location.reload(true);
}

    document.addEventListener('DOMContentLoaded', () => {
        const title = document.getElementById('animated-title');
        const text = title.textContent;
        title.innerHTML = ''; 

        
        text.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.classList.add('letter-animated');
            span.style.animationDelay = `${index * 0.1}s`; 
            title.appendChild(span);
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const title = document.getElementById('animated-title');
        const text = title.textContent;
        title.innerHTML = ''; 
    
        // Configuração da animação de título
        text.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.classList.add('letter-animated');
            span.style.animationDelay = `${index * 0.1}s`; 
            title.appendChild(span);
        });
    
        // Adiciona evento para tecla Enter no campo de entrada
        const inputResposta = document.getElementById('input_resposta');
        const btnVerificar = document.getElementById('btn_verificar');
        
        inputResposta.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                btnVerificar.click(); // Simula o clique no botão Verificar
                event.preventDefault(); // Evita o comportamento padrão do Enter
            }
        });
    });
    

