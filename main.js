$(document).ready(function () {
    $('#form-lista').submit(function (event) {
        event.preventDefault(); 

        var nomeTarefa = $('#nome-tarefa').val().trim();
        if (nomeTarefa !== "") {
            var novaTarefa = $('<tr><td>' + nomeTarefa + '</td></tr>');
            $('tbody').append(novaTarefa);
            $('#nome-tarefa').val(""); 
        }
    });

    
    $('tbody').on('click', 'td', function () {
        $(this).toggleClass('concluido');
    });
});
