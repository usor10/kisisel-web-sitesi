document.onkeydown = function(e) {
    if (e.keyCode == 116) {
        var yenilendiDiv = document.createElement("div");
        yenilendiDiv.innerHTML = "Yenilendi!";
        yenilendiDiv.style.textAlign = "center";
        yenilendiDiv.style.fontSize = "24px";
        document.body.appendChild(yenilendiDiv);
    }
};

var modelEkranAcik = false;

document.onkeydown = function(e) {
  if (e.key === "q" || e.key === "Q") {
    if (!modelEkranAcik) {
      var modelEkran = document.getElementById("modelEkran");
      modelEkran.style.display = "flex";
      modelEkranAcik = true;
    } else {
      var modelEkran = document.getElementById("modelEkran");
      modelEkran.style.display = "none";
      modelEkranAcik = false;
    }
  }
};
