// Buscar elementos HTML

// Selecionar todas as tags div.slide
const slides = document.querySelectorAll('.slide');
// Buscar btn prev
const prev = document.querySelector('#prev');
// Buscar btn next
const next = document.querySelector('#next');

// Configuração do autoplay
const auto = false;
//Tempo de Transição
const intervloTransicao = 2000;
// Tempo para exibição
let slideIntervalo;

// Eventos
next.addEventListener('click', (e) => {
    netxSlide(); // Chama a função

    if(auto) {
        clearInterval(slideIntervalo);
        slideIntervalo =setInterval(nextSlide, intervloTransicao)
    }
});




prev.addEventListener('click', (e) => {
    prevSlide();

    if (auto) {
        clearInterval(slideIntervalo);
        slideIntervalo = setInterval(nextSlide, intervloTransicao)
    }
    });

function netxSlide() {
    // Localizar o elemento que detém da classe .atual
    const atual = document.querySelector('.atual');
    // Removendo a classe do elemento
    atual.classList.remove('atual');

    if(atual.nextElementSibling){
        atual.nextElementSibling.classList.add('atual');
    } else {
        slides[0].classList.add('atual');
    }







        slides[0].classList.add('atual');
        }




function prevSlide() {
    // Localizar o elemento que detém da classe .atual
    const atual = document.querySelector('.atual');
    // Removendo a classe do elemento
    atual.classList.remove('atual');

    if(atual.previousElementSibling){
        atual.previousElementSibling.classList.add('atual');
    } else {
        slides[slides.length-1].classList.add('atual');
    }

    setTimeout(() => atual.classList.remove('atual'));
    };

    // Caso a variável esteja como true
    if (auto) {
        // Mostra o próximo slide após um tempo
        slideIntervalo = setInterval(nextSlide, intervaloTransicao)
    }

