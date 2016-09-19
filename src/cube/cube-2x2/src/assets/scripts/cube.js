const log = console.log.bind(console);

let faces = [].slice.call(document.querySelectorAll('.face'));

faces.forEach(face => {
    face.addEventListener('click', event => {
        log(event.target);
        return false;
    });
});

function show() {
    document.body.classList.toggle('toggle');
}
function rotate(){
    document.body.classList.toggle('rotate');
}

module.exports =  {
    show,
    rotate
};
