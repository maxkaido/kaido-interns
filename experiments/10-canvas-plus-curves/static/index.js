let childId;
setInterval(function () {
  var canvas = new CanvasPlus();

  canvas.load("kaidoteam.png", function (err) {
    if (err) throw err;
    canvas.resize({
      width: 640,
      height: 480,
      mode: "fit",
    });

    const randomNumber = (number) => {
      return Math.round(Math.random() * 255);
    };
    const rnd255 = function () {
      const n = randomNumber(255);
      // console.log(n);
      return n;
    };

    canvas.curves({
      red: [0, rnd255(), rnd255(255), rnd255(255), 255],
      green: [0, rnd255(), rnd255(255), rnd255(255), 255],
      blue: [0, rnd255(), rnd255(255), rnd255(255), 255],
      alpha: [0, rnd255(), rnd255(255), rnd255(255), 255],
    });

    canvas.write({ format: "png", quality: 90 }, function (err, buf) {
      if (err) throw err;

      // 'buf' will be a binary buffer containing final image...
      var blob = new Blob([buf], { type: "image/png" });
      var object_url = URL.createObjectURL(blob);

      // insert new image into DOM
      var img = new Image();
      img.src = object_url;
      const logo = document.getElementById("logo");
      // if (childId) logo.removeChild(childId);
      childId = logo.appendChild(img);
      //consola.info(res);
    });
  });
}, 5000);
