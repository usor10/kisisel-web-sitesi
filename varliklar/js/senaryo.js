window.addEventListener('load', function() {
    var contentDiv = document.getElementById('content');
    contentDiv.classList.add('dark');

    setTimeout(function() {
        contentDiv.classList.remove('dark');
    }, 2000); // 2000 milisaniye (2 saniye) sonra aydınlanır
});
