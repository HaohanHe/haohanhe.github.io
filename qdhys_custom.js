/* ========== 视差滚动 ========== */
function parallax(){
  const heroBg=document.querySelector('.hero-bg');
  const heroContent=document.querySelector('.hero-content');
  if(!heroBg)return;
  const scrolled=window.pageYOffset;
  const speedBg=heroBg.dataset.speed||0.4;
  const speedContent=heroContent.dataset.speed||0.2;
  heroBg.style.transform=`translateY(${scrolled*speedBg}px)`;
  heroContent.style.transform=`translateY(${scrolled*speedContent}px)`;
}
window.addEventListener('scroll',parallax);

/* ========== IntersectionObserver 淡入 ========== */
const faders=document.querySelectorAll('.fade-in');
const appearOptions={threshold:0.2,rootMargin:"0px 0px -60px 0px"};
const appearOnScroll=new IntersectionObserver(function(entries,observer){
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
},appearOptions);
faders.forEach(el=>appearOnScroll.observe(el));

/* ========== 图片懒加载 ========== */
const images=document.querySelectorAll('img[data-src]');
const imgOptions={threshold:0.1,rootMargin:"0px 0px 120px 0px"};
const imgObserver=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    const img=entry.target;
    img.src=img.dataset.src;
    img.addEventListener('load',()=>img.classList.add('loaded'));
    observer.unobserve(img);
  });
},imgOptions);
images.forEach(img=>imgObserver.observe(img));

/* ========== 年份自动写入 ========== */
document.getElementById('year').textContent=new Date().getFullYear();