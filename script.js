const hero=document.getElementById("hero");
const scene=document.querySelector(".scene");
const products=document.querySelector(".products");
let raf=0;
hero.addEventListener("pointermove",(e)=>{
  cancelAnimationFrame(raf);
  raf=requestAnimationFrame(()=>{
    const x=(e.clientX/window.innerWidth-.5);
    const y=(e.clientY/window.innerHeight-.5);
    scene.style.transform=`scale(1.02) translate(${x*-5}px,${y*-3}px)`;
    products.style.transform=`translate(${x*7}px,${y*4}px)`;
  });
});
hero.addEventListener("pointerleave",()=>{
  scene.style.transform="scale(1.01)";
  products.style.transform="";
});
