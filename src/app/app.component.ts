import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  
}
function hideAll() {
  $('#idade').hide();
  $('#operadora').hide();
  $('#prioridade').hide();
  $('#cond').hide();
  $('#razao').hide();
  $('#correntista').hide();
  $('#correofertaEsp').hide();
  $('#seisUm').hide();
  $('#ofertaEsp').hide();
  $('#setUm').hide();
  $('#conta').hide();
  $('#nota').hide();
  $('#nvUm').hide();
  $('#dez').hide();
}

function show(question_number) {
  switch (question_number) {
    case 1:
      $('#idade').show();
      break;
    case 2:
      $('#operadora').show();
      break;
    case 3:
      $('#prioridade').show();
      break;
    case 4:
      $('#cond').show();
      break;
    case 5:
      $('#razao').show();
      break;
    case 6:
      $('#correntista').show();
      break;
    case 7:
      $('#correofertaEsp').show();
      break;
    case 8:
      $('#seisUm').show();
      break;
    case 9:
      $('#ofertaEsp').show();
      break;
    case 10:
      $('#setUm').show();
      break;
    case 11:
      $('#conta').show();
      break;
    case 12:
      $('#nota').show();
      break;
    case 13:
      $('#nvUm').show();
      break;
    case 14:
      $('#dez').show();
      break;
    default:
      hideAll();
  }
}


function redirect() {
  if (document.getElementById('#unDezo').checked) {
    window.location = "paginafinalizacao.html";
    return false;
  }
  return true;
}

//var inputs = $('[type="checkbox"]');
//inputs.on('click', function () {
//  inputs.get().forEach(function (el) {
//    el.checked = el == this && this.checked;
//  }, this);
//});

//function submitForm() {
//  var guardaForm = {
//    idade: $('#Idade').val(),
//    operadora: $('#operadora').val(),
//    prioridade: $('#prioridade').val(),
//    cond: $('#cond').val(),
//    razao: $('#razao').val(),
//    correntista: $('#correntista').val(),
//    correofertaEsp: $('#correofertaEsp').val(),
//    seisUm: $('#seisUm').val(),
//    ofertaEsp: $('#ofertaEsp').val(),
//    setUm: $('#setUm').val(),
//    conta: $('#conta').val(),
//    nota: $('#nota').val(),
///    nvUm: $('#nvUm').val(),
//    dez: $('#dez').val(),
//  };
//  $.post('http://Localhost:80/', submitForm)
//    .done(function (response) {})
//    .error();
//}
