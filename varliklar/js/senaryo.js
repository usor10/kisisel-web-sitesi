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
      var modelEkran = document.getElementById("modelEkran");
      modelEkran.style.display = "flex";
    }
  };
