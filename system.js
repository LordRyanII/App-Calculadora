//Start:
/*
    Tipo é paramêtros genericos que representam dois valores 'acao' e 'valor'
*/


function calcular(tipo, valor){
    if(tipo === 'acao') {
      if(valor === 'c'){
        //limpar o visor
        document.getElementById('resultado').value = ''
      }
      //Adiciona as operações matemáticas no visor
      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        document.getElementById('resultado').value += valor
      }
      //Soma os inputs
      if(valor === '=') {
        let valor_campo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = valor_campo
      }
    //Exibe o Resultado
    } else if (tipo === 'valor') {

      document.getElementById('resultado').value += valor
    }
  }