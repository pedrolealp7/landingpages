
$(document).ready(function() {

    $("#btnClique").click(function(){
        alert('Ola pessoal !!!!!');
        var nome = prompt( 'Digite seu nome');
        alert(nome);
       
        $('#mensagem').html('<div class="alert alert-danger" role="alert"> '+nome+' </div>')
    });
'
});