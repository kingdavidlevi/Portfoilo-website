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







/*const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/email', (req, res) => {
    const { email, name, text } = req.body;

    // Your email sending logic goes here
    // Example using nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'levikingdavid@gmail.com',
            pass: 'D@2001vid'
        }
    });

    const mailOptions = {
        from: 'levikingdavid@gmail.com',
        to: 'levikingdavid@gmail.com', // your email address
        subject: `New Message from ${name}`,
        text: `Email: ${email}\n\nMessage: ${text}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error(error);
        }
        console.log('Email sent: ' + info.response);
    });

    res.sendStatus(200); // Send a success response to the client
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
*/



document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('text-container')
    const textparagraph = textContainer.querySelectorAll('p.lin')

     const firstParagraph = textparagraph[0]
    

    const words = firstParagraph.innerText.split(" ")

    text.innerHTML = words.map(function (word) {
        return '<span class="word">' + word + '</span>';
    }).join(" ");



    const wordspan = document.querySelectorAll('.word');
     const wordAarray = Array.from(wordspan)

    function revealwords(){
        wordAarray.forEach(function(word,index){
            setTimeout(function() {
                word.style.transform = 'translateY(0)'
            },index * 500)
        })
    }

    revealwords()
})