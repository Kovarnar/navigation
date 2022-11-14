document.addEventListener('DOMContentLoaded', function() {
    const ASIDE = document.querySelector('.aside ');
    console.log(ASIDE);
    const BUTTON_ASIDE = document.querySelector('.aside__button');
    console.log(BUTTON_ASIDE);

    BUTTON_ASIDE.addEventListener('click', function() {
        ASIDE.classList.toggle('aside--short');
    });
});