function activateSlides() {
    const images = document.querySelectorAll('.animais-lista li');
    
    images.forEach((image, index, array) => {
        image.addEventListener('click', (event) => {
    
            array.forEach((restImage) => {
                restImage.classList.remove('selected');
            });
    
            event.currentTarget.classList.add('selected');
        });
    });
}

function activateNav() {
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', event => {
            menuLinks.forEach(link => {
                link.classList.remove('activate');
            });

            event.currentTarget.classList.add('activate');
        });
    });

    
}

activateNav();
activateSlides();