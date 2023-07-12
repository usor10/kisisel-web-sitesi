document.onkeydown = function(e) {
    if (e.keyCode == 116) {
        var yenilendiDiv = document.createElement("div");
        yenilendiDiv.innerHTML = "Yenilendi!";
        yenilendiDiv.style.textAlign = "center";
        yenilendiDiv.style.fontSize = "24px";
        document.body.appendChild(yenilendiDiv);
    }
};

document.onkeydown = function(e) {
    if (e.key === "q" || e.key === "Q") {
        var modelWindow = window.open("", "Model Penceresi", "width=400, height=300, top=100, left=100");
        modelWindow.document.write("<h1>Model Penceresi</h1>");
        modelWindow.document.write("<p>Bu küçük pencere model gibi çalışıyor!</p>");
    }
};
