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

/* ========== 图片懒加载 + LQIP ========== */
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

/* ========== 导航玻璃滚动增强 ========== */
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  navbar.style.background=window.scrollY>80
    ?'rgba(255,255,255,.28)'
    :'rgba(255,255,255,.18)';
});

/* ========== 水波纹点击效果 ========== */
document.querySelectorAll('.ripple-container').forEach(el=>{
  el.addEventListener('click',function(e){
    const rect=this.getBoundingClientRect();
    const size=Math.max(rect.width,rect.height);
    const x=e.clientX-rect.left-size/2;
    const y=e.clientY-rect.top-size/2;
    const ripple=document.createElement('span');
    ripple.style.cssText=`
      position:absolute;border-radius:50%;
      background:rgba(255,255,255,.45);
      transform:scale(0);width:${size}px;height:${size}px;
      left:${x}px;top:${y}px;animation:ripple .6s linear;
      pointer-events:none;
    `;
    this.appendChild(ripple);
    setTimeout(()=>ripple.remove(),600);
  });
});
/* 动态插入 ripple keyframes */
const style=document.createElement('style');
style.textContent=`@keyframes ripple{to{transform:scale(2);opacity:0;}}`;
document.head.appendChild(style);

/* ========== 年份自动写入 ========== */
document.getElementById('year').textContent=new Date().getFullYear();