(function(){
  const root=document.documentElement;
  root.classList.add('js');
  const top=document.querySelector('.topbar'),nav=top?.querySelector('nav'),menu=document.querySelector('.menu');
  if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false');menu.textContent=open?'Close':'Menu'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu'}))}
  const targets=document.querySelectorAll('.hero-copy,.hero-art,.trusted,.section,.solution-card,.program-row,.person-card,.pricing,.join-card');
  targets.forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--delay',(i%5)*70+'ms')});
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){targets.forEach(el=>el.classList.add('visible'));return}
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -8% 0px'});
  targets.forEach(el=>io.observe(el));
  requestAnimationFrame(()=>document.querySelectorAll('.hero-copy,.hero-art').forEach(el=>el.classList.add('visible')));
  let lastY=window.scrollY;
  window.addEventListener('scroll',()=>{const y=window.scrollY;root.style.setProperty('--scroll-progress',Math.min(1,y/(document.documentElement.scrollHeight-innerHeight||1)));if(y>lastY+4){root.classList.add('scrolling-down')}else if(y<lastY-4){root.classList.remove('scrolling-down')}lastY=y},{passive:true});
})();
