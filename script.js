// Event listener para executar o código quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão de toggle do menu
    const menuToggle = document.getElementById('menu-toggle');
    // Seleciona o menu
    const menu = document.getElementById('menu');
    // Seleciona todas as imagens expandíveis
    const images = document.querySelectorAll('.expandable-image');
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Event listener para o botão de toggle do menu
    menuToggle.addEventListener('click', function () {
        // Verifica se o menu está visível
        if (menu.style.display === 'block') {
            // Oculta o menu
            menu.style.display = 'none';
            // Remove a animação quando o menu é oculto
            menu.style.animation = '';
        } else {
            // Exibe o menu
            menu.style.display = 'block';
            // Adiciona a animação de deslizar
            menu.style.animation = 'slideIn 0.5s forwards';
        }
    });

    // Criação da animação de deslizar para o menu
    var style = document.createElement('style');
    style.innerHTML = `
    @keyframes slideIn {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }
    `;
    document.head.appendChild(style);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Efeito de expansão da imagem ao clicar
    images.forEach(image => {
        image.addEventListener('click', function () {
            // Verifica se a imagem está expandida
            if (image.classList.contains('expanded')) {
                // Remove a classe de expansão
                image.classList.remove('expanded');
                // Define o fundo padrão
                image.parentElement.style.backgroundImage = "url('https://static.vecteezy.com/ti/fotos-gratis/p1/3025993-vivido-escuro-tinta-azul-cor-de-fundo-gratis-foto.jpg')";
            } else {
                // Adiciona a classe de expansão
                image.classList.add('expanded');
                // Remove o fundo da imagem expandida
                image.parentElement.style.backgroundImage = "none";
            }
        });
    });

    // Definição da classe para a imagem expandida
    style.innerHTML += `
    .expanded {
        transform: scale(3.0); /* Expande a imagem em 1.2 vezes */
        margin: auto; /* Centraliza a imagem */
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
    }
    `;
});
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Event listener para executar o código quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o elemento do slide
    const slides = document.querySelector('.slides');
    // Obtém a largura do slide
    const slideWidth = document.querySelector('.slide-container').offsetWidth;
    // Inicializa o slide atual como 0
    let currentSlide = 0;

    // Função para avançar para o próximo slide
    function nextSlide() {
        // Atualiza o índice do slide
        currentSlide = (currentSlide + 1) % slides.children.length;
        // Adiciona uma transição suave
        slides.style.transition = "transform 1s ease";
        // Desloca os slides para a esquerda
        slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    // Alterna os slides automaticamente a cada 2 segundos
    setInterval(nextSlide, 2000);
});
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Event listener para executar o código quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Event listener para o formulário de feedback
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        // Impede o comportamento padrão de enviar o formulário
        event.preventDefault();
        // Exibe um alerta de confirmação de envio de feedback
        alert("O seu feedback foi enviado!");
        // Limpa os campos do formulário após o envio
        document.getElementById('nome').value = '';
        document.getElementById('empresa').value = '';
        document.getElementById('ano_cliente').value = '';
        document.getElementById('opiniao').value = '';
    });
});
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Event listener para executar o código quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento do input do ano de cliente
    var anoClienteInput = document.getElementById('ano_cliente');
    // Obtém o ano atual
    var anoAtual = new Date().getFullYear();
    // Define o ano atual como o máximo valor do input
    anoClienteInput.setAttribute('max', anoAtual);
});
