for (var i = 0; i < 7; i++) {
    document.querySelectorAll('button')[i].addEventListener('click',
        function () {
            var alpha = this.innerText;
            var audio = document.getElementById(alpha + '_src');
            audio.play();
        });
}
for (var j = 0; j < 7; j++) {
    document.querySelectorAll('button')[j].addEventListener('keypress',
        function (event) {
            var audio = document.getElementById(event.key + '_src');
            audio.play();
        });
}