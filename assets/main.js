function gerarQR() {
  const url = document.getElementById("url-input").value.trim();
  const wrap = document.getElementById("qrcode");
  const logo = document.getElementById("logo-overlay");
  const file = document.getElementById("logo-input").files[0];
  wrap.innerHTML = "";
  if (!url) {
    alert("Informe uma URL.");
    return;
  }
  new QRCode(wrap, {
    text: url,
    width: 500,
    height: 500,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H,
  });
  const titulo = document.getElementById("label-titulo").value.trim();
  const elT = document.getElementById("display-titulo");
  elT.textContent = titulo;
  elT.style.display = titulo ? "" : "none";
  const mostrarSub = document.getElementById("toggle-subtitulo").checked;
  const elS = document.getElementById("display-subtitulo");
  elS.textContent = mostrarSub ? url : "";
  elS.style.display = mostrarSub ? "" : "none";
  setTimeout(() => {
    if (file) {
      const r = new FileReader();
      r.onload = (e) => {
        logo.src = e.target.result;
        logo.style.display = "block";
      };
      r.readAsDataURL(file);
    } else {
      logo.style.display = "none";
    }
  }, 200);
}

function baixar() {
  const canvas = document.querySelector("#qr-wrap canvas");
  const logo = document.getElementById("logo-overlay");
  if (!canvas) {
    alert("Gere o QR code primeiro!");
    return;
  }
  const f = document.createElement("canvas");
  f.width = canvas.width;
  f.height = canvas.height;
  const ctx = f.getContext("2d");
  ctx.drawImage(canvas, 0, 0);
  if (logo.style.display !== "none" && logo.src) {
    const s = canvas.width * 0.18;
    const x = (canvas.width - s) / 2,
      y = (canvas.height - s) / 2;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, s / 2 + 6, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.save();
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, s / 2, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(logo, x, y, s, s);
    ctx.restore();
  }
  const url = document.getElementById("url-input").value.trim();
  const name =
    url
      .replace(/https?:\/\//, "")
      .replace(/[\\/]/g, "-")
      .replace(/[^a-z0-9-_.]/gi, "") || "qrcode";
  const a = document.createElement("a");
  a.download = "qrcode-" + name + ".png";
  a.href = f.toDataURL("image/png");
  a.click();
}

window.addEventListener("load", gerarQR);
