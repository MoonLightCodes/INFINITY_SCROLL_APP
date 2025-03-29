const root = document.getElementById("root");
const imgCont = document.getElementById("img-cont");
const iSel = document.getElementById("img-selected");

let isOpen = false;

const updateGridColumns = () => {
  const containerWidth = imgCont.offsetWidth;
    let columns = Math.floor(containerWidth / 200); 
    if(columns<=1)columns = 2;
    imgCont.style.gridTemplateColumns = `repeat(${columns}, 1fr)`; // Apply calculated columns for larger screens
  
};

window.onload = () => {
  imgCont.innerHTML = '';
  loadPics();
  // loadPics();
  updateGridColumns();
};

window.addEventListener("resize", updateGridColumns);

imgCont.addEventListener("click", (e) => {
  if (!e.target.classList.contains('imgC') || (isOpen && e.target.classList.contains('imgC'))) {
    closeme();
    return;
  }
  isOpen = true;
  iSel.innerHTML = '';
  let a = document.createElement('img');
  a.src = e.target.src;
  a.alt = 'DOG Image';
  a.classList.add('img');
  root.style.opacity = '1';
  root.style.height = '80vh';
  iSel.appendChild(a);
  imgCont.classList.add('blurred');
});

function closeme() {
  isOpen = false;
  imgCont.classList.remove('blurred');
  root.style.opacity = '0';
  root.style.height = '0';
}

async function loadPics() {
  let proms = Array(10).fill().map(()=>{
    return fetch('https://dog.ceo/api/breeds/image/random').then((e)=>e.json()).catch((e)=>console.log(e)); 
  });

    let dta = await Promise.all(proms);
    dta.forEach((data)=>{
    let im = document.createElement('img');
    im.src = data.message;
    im.alt = 'DOG IMAGE';
    im.classList.add('imgC');
    imgCont.appendChild(im);
  });
}

imgCont.addEventListener('scroll', async () => {
  if (imgCont.scrollTop + imgCont.clientHeight >= imgCont.scrollHeight - 20) {
    loadPics();
  }
});
