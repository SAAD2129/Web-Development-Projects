let imgs = Array.from(document.getElementsByTagName("img"));
index = 0;
let a = imgs.length;

Carousal = (index) => {
  index++;
  imgs.forEach((imgs) => {
    if (index > a - 1 || index < 0) {
      index = 0;
      imgs.style.transform = `translateX(${index * -100}%)`;
    } else {
      imgs.style.transform = `translateX(${index * -100}%)`;
    }
  });
};

let prev = document.getElementById("prev");
let next = document.getElementById("next");
prev.onclick = () => {
  index -= 1;
  if (index < 0) {
    index = a - 1;
  } else if (index > a) {
    index -= 1;
  }
  console.log(index);
  Carousal(index);
};
next.onclick = () => {
  if (index < a - 1) index += 1;
  else index = 0;
  console.log(index);
  Carousal(index);
};

