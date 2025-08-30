const hexValue = () => {
      let myHexValue = "0123456789abcdef";
      let colors = "#";
      for (let i = 0; i < 6; i++) {
        colors += myHexValue[Math.floor(Math.random() * 16)];
      }
      return colors;
    };
  const handleButton1 = () => {
      rgb1 = hexValue();
      btn.innerText = rgb1;
      document.body.style.backgroundImage =
        `linear-gradient(to right, ${rgb1}, ${rgb2})`;
      copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1},<br>${rgb2})`;
    };

    const handleButton2 = () => {
      rgb2 = hexValue();
      btn2.innerText = rgb2;
      document.body.style.backgroundImage =
        `linear-gradient(to right, ${rgb1}, ${rgb2})`;
      copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1},<br>${rgb2})`;
    };

    let btn = document.getElementById('myButton');
    let btn2 = document.getElementById('myButton2');
    let copyDiv = document.querySelector('.copyCode');
    let rgb1 = "#051937";
    let rgb2 = "#008793";

    btn.addEventListener('click', handleButton1);
    btn2.addEventListener('click', handleButton2);


    copyDiv.addEventListener("click", () => {
      navigator.clipboard.writeText(copyDiv.innerText)
    })