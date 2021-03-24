window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");

    pads.forEach(pad => {
        pad.addEventListener('click', function(){
            sounds[4]
        })
    })
});