// Периодически подсвечивает ссылку "Консультации" в случайные моменты,
// чтобы привлечь внимание. Анимация длится 1.5с (0.3s * 5 итераций).
(function () {
    var ANIM_MS = 1500;
    var MIN_GAP_MS = 5000;
    var MAX_GAP_MS = 15000;

    function flash() {
        var links = document.querySelectorAll('.blink-link');
        links.forEach(function (el) {
            el.classList.add('blink-active');
            setTimeout(function () {
                el.classList.remove('blink-active');
            }, ANIM_MS);
        });
    }

    function schedule() {
        var gap = MIN_GAP_MS + Math.random() * (MAX_GAP_MS - MIN_GAP_MS);
        setTimeout(function () {
            flash();
            schedule();
        }, gap);
    }

    schedule();
})();
