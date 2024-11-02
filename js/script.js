const body = document.body;
const subMenu = document.querySelector('.sub-menu');
const themeImg = document.querySelector('.imgTheme');
const menu = document.querySelector('.menu')

function theme() {
    body.classList.toggle('dark-theme')
}

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    } else {
        header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0)";
    }
});

window.addEventListener("DOMContentLoaded", () => {
    if (body.classList.contains('dark-theme')) {
        themeImg.src = 'assets/light.svg'
        themeImg.alt = 'Tema Escuro';
    } else {
        themeImg.src = 'assets/dark.svg'
        themeImg.alt = 'Tema Escuro';
    }
})

themeImg.addEventListener("click", () => {
    theme()
    if (body.classList.contains('dark-theme')) {
        themeImg.src = 'assets/light.svg'
        themeImg.alt = 'Tema Escuro';
        themeImg.animate(
            [
                { rotate: "360deg" },
                { rotate: "0deg" }
            ],
            {
                duration: 400
            }
        )
    } else {
        themeImg.src = 'assets/dark.svg'
        themeImg.alt = 'Tema Escuro';
        themeImg.animate(
            [
                { rotate: "360deg" },
                { rotate: "0deg" }
            ],
            {
                duration: 400
            }
        )
    }
})

menu.onclick = function () {
    if (subMenu) {
        subMenu.classList.toggle('show')
    }
}

window.onclick = function (event) {
    if (!subMenu.contains(event.target) && !menu.contains(event.target)) {
        subMenu.classList.remove('show');
    }
}

const modais = document.querySelector('.modais')
const modal = document.querySelectorAll('.modal')
function abrirModal(num) {
    modais.style.display = 'block';
    document.querySelector(`.modal-${num}`).style.display = 'block';
    gsap.fromTo(modal,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" } // Animação ao abrir
    );
}
function closeModal() {
    modais.style.display = 'none';

    modal.forEach((evento) => {
        evento.style.display = 'none';
    })

}
const mudarSlideBtn = document.querySelector('.mudarSlide');
let isMoved = false;

mudarSlideBtn.onclick = function mudarSlide() {
    const container = document.querySelector('.container');

    if (isMoved) {
        container.style.transform = 'translateX(0)'; // volta para o slide inicial
    } else {
        container.style.transform = 'translateX(-1280px)'; // move para o próximo slide
    }

    isMoved = !isMoved; // alterna o estado
};

const mudarSlideTcc = document.querySelector('.slideTccChange')
const siteTela = document.querySelector('.siteTela')
const appTela = document.querySelector('.appTela')

mudarSlideTcc.onclick = function () {
    siteTela.classList.toggle('show')

    if (siteTela.classList.contains('show')) {
        document.getElementById('slideTccChangeId').innerText = "Aplicativo"
        appTela.classList.remove('show');

    } else {
        document.getElementById('slideTccChangeId').innerText = "Site"
        appTela.classList.add('show');
    }
}

