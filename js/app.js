const slider = document.querySelector('.slider');
const detailsSlider = document.querySelector('.details-slider');
const previewSlider = document.querySelector('.preview-slider');
const btnsSlider = document.querySelector('.btns-slider');
const punto = document.querySelectorAll('.punto');

// Cuando click en punto
    // Saber la posicion de ese punto
    // Aplicar un transform translateX al slider
    // QUITAR la clase active de todos los puntos
    // añadir la clase activo al punto que hemos hecho click

punto.forEach((cadaPunto, i) =>  {
    punto[i].addEventListener('click', () => {
        
        let pocision = i
        // posicion es 0 transformX es 0
        // posicion es 1 transformX es -50%

        let result = pocision * -50;

        slider.style.transform = `translateX(${result}%)`
        detailsSlider.style.transform = `translateX(${result}%)`
        previewSlider.style.transform = `translateX(${result}%)`
        btnsSlider.style.transform = `translateX(${result}%)`

        punto.forEach((cadaPunto, i) =>  {
            punto[i].classList.remove('active')
        })

        punto[i].classList.add('active')

    })
})