const ham = document.querySelector('.ham');
const navComp = document.querySelector('.nav_comp');
const body = document.body;
const mainContent = document.querySelector('.main__contents');
const fixedMenu = document.querySelector('.fixed__menu');
const compass = document.querySelector('.fa-compass');

ham.addEventListener('click', () => {
    if (navComp.classList.contains('show')) {
        navComp.classList.remove('show');
        body.style.overflowY = 'auto';
        mainContent.style.pointerEvents = 'all';
    } else {
        navComp.classList.add('show');
        body.style.overflowY = 'hidden';
        mainContent.style.pointerEvents = 'none';
    }

})

compass.addEventListener('click', () => {
    if(fixedMenu.classList.contains('show')) {
        fixedMenu.classList.remove('show');
    } else {
        fixedMenu.classList.add('show');
    }
})

document.addEventListener('click', (event) => {
    if (event.target.tagName !== 'I' && event.target !== fixedMenu) {
        fixedMenu.classList.remove('show');
    }
});

/*Blur Load*/
const blurDivs = document.querySelectorAll(".blur-load");
blurDivs.forEach(div => {
    const img = div.querySelector("img")

    function loaded() {
        div.classList.add('loaded')
    }
    if (img.complete) {
        loaded();
    } else {
        img.addEventListener('load', loaded)
    }
})

/*server-side part*/
// This code handles the data collection
$('form').on('submit', (e) => {
    e.preventDefault();

    const email = $('#email').val().trim();
    const name = $('#fname').val().trim();
    const text = $('#description').val().trim();

    const data = {
        email,
        name,
        text
    };

    $.post('/email', data, function() {
        console.log('Server received our data');
    });
})
