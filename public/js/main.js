let crystalTheme = document.createElement("audio");
crystalTheme.src = "music/crystal-theme.mp3"


let $crystal = document.querySelector('.minicristal');

$crystal.addEventListener("click", () => {
    if ($crystal.className === 'minicristal') {
        crystalTheme.play();
        $crystal.classList.add('on');
    } else {
        crystalTheme.pause();
        $crystal.classList.remove('on');
    }

});