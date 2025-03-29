const root = document.getElementById("root");
const imgCont = document.getElementById("img-cont");
const iSel = document.getElementById("img-selected");
let scrollC = 0;
let imarr = [];
let isOpen = false;

const updateGridColumns = () => {
  const containerWidth = imgCont.offsetWidth;
  let columns = Math.floor(containerWidth / 200);
  if (columns <= 1) columns = 2;
  imgCont.style.gridTemplateColumns = `repeat(${columns}, 1fr)`; // Apply calculated columns for larger screens
};

window.onload = () => {
  imgCont.innerHTML = "";
  loadPics();
  // loadPics();
  updateGridColumns();
};

window.addEventListener("resize", updateGridColumns);

imgCont.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("imgC") ||
    (isOpen && e.target.classList.contains("imgC"))
  ) {
    closeme();
    return;
  }
  isOpen = true;
  iSel.innerHTML = "";
  let a = document.createElement("img");
  a.src = e.target.src;
  a.dataset.ind = e.target.dataset.ind;
  a.alt = "DOG Image";
  a.classList.add("img");
  root.style.opacity = "1";
  root.style.height = "80vh";
  iSel.appendChild(a);
  imgCont.classList.add("blurred");
});

function closeme() {
  isOpen = false;
  imgCont.classList.remove("blurred");
  root.style.opacity = "0";
  root.style.height = "0";
}

var st2 = false;
async function loadPics() {
  let proms = Array(10)
    .fill()
    .map(() => {
      return fetch("https://dog.ceo/api/breeds/image/random")
        .then((e) => e.json())
        .catch((e) => console.log(e));
    });

  let dta = await Promise.all(proms);
  dta.forEach((data, i) => {
    let im = document.createElement("img");
    im.src = data.message;
    im.setAttribute("data-ind", ` ${scrollC * 10 + i}`);
    im.alt = "DOG IMAGE";
    im.classList.add("imgC");
    imgCont.appendChild(im);
    imarr.push(im);
  });
  st2 = false;
  scrollC++;
}

let st;
function throttle(cb, lim) {
  return async () => {
    if (st || st2) return;
    st = true;
    st2 = true;
    await cb();
    setTimeout(() => {
      st = false;
    }, lim);
  };
}

const lp = throttle(loadPics, 1000);

imgCont.addEventListener("scroll", async () => {
  if (imgCont.scrollTop + imgCont.clientHeight >= imgCont.scrollHeight / 2) {
    lp();
  }
});
let scrolled = false;
root.addEventListener("wheel", (e) => {
  if (scrolled) return;
  scrolled = true;
  let idata = parseInt(iSel.getElementsByTagName("img")[0].dataset.ind);
  iSel.innerHTML = "";
  let a = document.createElement("img");
  a.alt = "DOG Image";
  a.classList.add("img");
  if (e.deltaY > 0) {//up
    a.src = imarr[idata + 1].src;
    a.dataset.ind = imarr[idata + 1].dataset.ind;
  } else {//down
    if(idata - 1 < 0) return;
    a.src = imarr[idata - 1].src;
    a.dataset.ind = imarr[idata - 1].dataset.ind;
  }
  iSel.scrollTop = 0;
  root.scrollTop = 0;
  iSel.appendChild(a);
  if (idata + 1 === imarr.length - 1) {
    lp();
  }
  setTimeout(() => {
    scrolled = false;
  }, 1000);
});
root.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
});

root.addEventListener("touchmove", (e) => {
  if (scrolled) return;
  scrolled = true;
  const currentY = e.touches[0].clientY;
  const deltaY = startY - currentY;
  let idata = parseInt(iSel.getElementsByTagName("img")[0].dataset.ind);
  iSel.innerHTML = "";
  let a = document.createElement("img");
  a.alt = "DOG Image";
  a.classList.add("img");
  if (deltaY > 0) {
    a.src = imarr[idata + 1].src;
    a.dataset.ind = imarr[idata + 1].dataset.ind;
  } else {
    a.src = imarr[idata - 1].src;
    a.dataset.ind = imarr[idata - 1].dataset.ind;
  }
  iSel.scrollTop = 0;
  root.scrollTop = 0;
  iSel.appendChild(a);
  if (idata + 1 === imarr.length - 1) {
    lp();
  }
  setTimeout(() => {
    scrolled = false;
  }, 1000);
});
