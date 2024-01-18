$(document).ready(function(){
    $('#carousel-imagem').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    $('#Telefone').mask('(00) 00000-0000')

    $('form[name="contato-form"]').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            Telefone: {
                required: true
            },
            Mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages:{
            nome: 'Por favor insira seu nome'
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                console.log(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    });

    $('.lista-veiculos button').click(function() {
        const destino = $('#Contato');

    window.alert($(this).parent().find('h3').text());

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});
