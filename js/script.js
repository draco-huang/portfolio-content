let imgIndex = 0;

const selectIMG = (index) => {
  imgIndex = index;

  let imgList = document.querySelectorAll("img.gallery-img");
  let bulletList = document.querySelectorAll("span.bullet");

  if (imgIndex >= imgList.length) imgIndex = 0;
  if (imgIndex < 0) imgIndex = imgList.length - 1;

  for (let i = 0; i < imgList.length; i++) imgList[i].style.display = "none";
  imgList[imgIndex].style.display = "block";
  for (let i = 0; i < bulletList.length; i++)
    bulletList[i].style["background-color"] = "#304151";
  bulletList[imgIndex].style["background-color"] = "white";
};

selectIMG(imgIndex);

const moveSelector = (move) => {
  selectIMG(imgIndex + move);
};

setInterval(() => {
  moveSelector(1);
}, 5000);
