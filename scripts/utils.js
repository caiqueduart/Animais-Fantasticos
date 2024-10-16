function contentChange() {
    const images = document.querySelectorAll('.animais-lista li');
    const descriptions = document.querySelectorAll('.animais-descricao section');
    const classSelected = 'selected';
    const classShowDescription = 'showDescription';
    
    images.forEach((image, index, array) => {
        image.addEventListener('click', (event) => {
    
            array.forEach((restImage) => {
                restImage.classList.remove(classSelected);
            });
            event.currentTarget.classList.add(classSelected);

            descriptions.forEach( description => {
                description.classList.remove(classShowDescription);
            });
            descriptions[index].classList.add(classShowDescription);
        });
    });
}

function activateNav() {
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            if(event.currentTarget.getAttribute('href')) {
                const section = document.querySelector(
                    event.currentTarget.getAttribute('href')
                );

                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
            
        });
    });
}

function showQuention() {
    const questions = document.querySelectorAll('.faq-lista dt');
    const classShowQuestion = 'showQuestion';
    
    questions.forEach(question => {
        question.addEventListener('click', event => {
            event.currentTarget.classList.toggle(classShowQuestion);
            event.currentTarget.nextElementSibling.classList.toggle(classShowQuestion);
        });
    })
}

activateNav();
contentChange();
showQuention();