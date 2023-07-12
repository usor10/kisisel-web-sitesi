window.addEventListener('load', function() {
    var body = document.querySelector('body');
    body.classList.add('dark');

    setTimeout(function() {
        body.classList.remove('dark');
    }, 2000); // 2000 milisaniye (2 saniye) sonra aydınlanır
});
