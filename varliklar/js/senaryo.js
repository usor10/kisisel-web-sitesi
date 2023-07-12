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
