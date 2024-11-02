document.addEventListener("DOMContentLoaded", (event) => {

    const texts = document.querySelectorAll('.textAnim')
    const textHome = document.querySelector('.textAnim2')
    gsap.registerPlugin(TextPlugin)
    gsap.from(".textWriting", { duration: 5, text: "" })

    gsap.registerPlugin(ScrollTrigger)

    texts.forEach(Anima => {
        gsap.to(Anima, {
            scrollTrigger: {
                trigger: Anima,
                toggleActions: "restart none none none"
            },
            opacity: 1,
            y: -40,
            duration: 2
        });
    })
   
    gsap.to(textHome, {
        scrollTrigger: {
            trigger: textHome,
            toggleActions: "restart none none none"
        },
        opacity: 1,
        y: 0,
        duration: 2
    });

    gsap.to('.carrossel', {
        scrollTrigger: {
            trigger:  '.carrossel',
            toggleActions: "restart none none none"
        },
        opacity: 1,
        duration: 2
    })

    gsap.to('.habilidadesContainer', {
        scrollTrigger: {
            trigger: ".habilidadesContainer",
            toggleActions: "restart none none none"
        },
        opacity: 1,
        duration: 2
    })

    gsap.from('.textWriting2', {
        scrollTrigger: {
            trigger: ".textWriting2",
            toggleActions: "play none none reverse"
        },
        text: "",
        duration: 2
    });



});

