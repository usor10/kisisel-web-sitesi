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

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Ana sayfa');
});

app.use((req, res) => {
  res.status(404).send('Error: Cannot get ' + req.originalUrl);
});

const server = app.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor');
});
