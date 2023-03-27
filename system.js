//Start:
/*
    Tipo é paramêtros genericos que representam dois valores 'acao' e 'valor'
*/

function calcular(tipo, valor){
  if(tipo === 'acao') {
    if(valor === 'c'){
      //limpar o visor
      document.querySelector('#resultado').value = ''
    }
    if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
      document.querySelector('#resultado').value += valor
    }
    if(valor === '=') {
      var valor_campo = eval(document.getElementById('resultado').value)
      document.querySelector('#resultado').value = valor_campo
    }
  } else if (tipo === 'valor') {

    document.querySelector('#resultado').value += valor
  }
}