const generateBtn = document.getElementById("generate-btn");
const qrCodeContainer = document.getElementById("qr-code");
const downloadBtn = document.getElementById("download-btn");
const shareBtn = document.getElementById("share-btn");
const urlInput = document.getElementById("url-input");
const inputGroup = document.getElementById("input-group");
const actions = document.getElementById("actions");

qrCodeContainer.style.display = "none";
actions.style.display = "none";

// Generate QR Code
generateBtn.addEventListener("click", () => {
  const url = urlInput.value;
  if (url) {
    qrCodeContainer.style.display = "block";
    actions.style.display = "flex";
    qrCodeContainer.innerHTML = "";
    new QRCode(qrCodeContainer, url);

    // Hide input group
    inputGroup.style.display = "none";
  }
});

// Download QR Code
downloadBtn.addEventListener("click", () => {
  const qrCodeImg = qrCodeContainer.querySelector("img");
  if (qrCodeImg) {
    const link = document.createElement("a");
    link.href = qrCodeImg.src;
    link.download = "qrcode.png";
    link.click();
  }
});

// Share QR Code
shareBtn.addEventListener("click", () => {
  const url = urlInput.value;
  if (url) {
    navigator.clipboard.writeText(url).then(() => {
      alert("URL copied to clipboard");
    });
  }
});
