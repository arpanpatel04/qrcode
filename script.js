const form = document.querySelector("#form");
const imgBox = document.querySelector("#qr-code");
const featchAPi = async (e) => {
  e.preventDefault();
  clearUi();
  const text = e.target[0].value;
  let responcse = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?150x150&data=${text}`
  );

  const img = document.createElement("img");
  img.src = responcse.url;
  imgBox.appendChild(img);
};

const clearUi = () => {
  imgBox.innerHTML = "";
};

form.addEventListener("submit", featchAPi);
