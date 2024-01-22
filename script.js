$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Desenvolvedora", "Estudante"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:["Desenvolvedora", "Estudante"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});


document.getElementById('downloadButton').addEventListener('click', function() {
    // Caminho do seu currículo PDF
    var pdfUrl = './cv-emilly-victoria.pdf';

    // Nome do arquivo para download
    var fileName = 'seu_curriculo.pdf';

    // Criar um link temporário
    var a = document.createElement('a');
    a.href = pdfUrl;
    a.download = fileName;

    // Adicionar o link ao corpo do documento
    document.body.appendChild(a);

    // Clicar no link para iniciar o download
    a.click();

    // Remover o link do corpo do documento após o download
    document.body.removeChild(a);
});


function enviarFormulario() {
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    var corpo_email = "Nome: " + nome + "\n";
    corpo_email += "E-mail: " + email + "\n";
    corpo_email += "Mensagem:\n" + mensagem;

    window.location.href = "mailto:emilly.devs@gmail.com?subject=Nova mensagem do formulário de contato&body=" + encodeURIComponent(corpo_email);
}