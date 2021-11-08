const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

typewriter
    .typeString(' Hi, I am <span style="color: #9BD4D6;">Humberto Rivero</span> FrontEnd Developer')
    .pauseFor(200)
    .start();