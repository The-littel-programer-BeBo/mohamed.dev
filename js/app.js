'use strict'
setInterval(() => {
  let random = (Math.random() * 100).toFixed(0)
  let random1 = (Math.random() * 10).toFixed(0)
  background.insertAdjacentHTML('beforeend', `<span style='left:${random}%;  animation-duration:${random1}s;'>.</span>`)
  setTimeout(() => background.removeChild(background.firstChild), 50000)
},200)

const otherSocial = document.querySelectorAll('.otherSocial');
let ev = true;

social.addEventListener('click',()=>{
  let XY = document.body.clientWidth < 700 ? 'y' : 'x'
  const icons = document.querySelectorAll('.social .i'),
        radius = XY == 'y'? document.body.clientWidth / 3:document.body.clientHeight / 3, // radius of the circle
        container = document.querySelector('.social');
  if(ev){
    otherSocial[0].style.cssText = `transform:translate${XY}(-${radius*3}px)`
    otherSocial[1].style.cssText = `transform:translate${XY}(${radius*3}px)`
    let angle = 0;
    
    icons.forEach(icon => {
      const width = container.clientWidth,
      height = container.clientHeight;
      let step = (2*Math.PI) / icons.length,
      x = Math.round(width/2 + radius * Math.cos(angle)),
      y = Math.round(height/2 + radius * Math.sin(angle));
      icon.style.cssText = `left:${x}px;top:${y}px`
      angle += step
      ev = false
    });
  }else{
    icons.forEach(icon=>icon.style.cssText = 'left:50%;top:50%');
    otherSocial[0].style.cssText = `transform:translate${XY}(0)`
    otherSocial[1].style.cssText = `transform:translate${XY}(0)`
    ev = true
  }
})

otherSocial.forEach(ele=>{
  ele.addEventListener('click',_=>ele.nextElementSibling.style.cssText = 'transform:unset')
})

const close = document.querySelectorAll('.close')
close.forEach(ele=>{
  ele.addEventListener('click',_=>ele.parentElement.style.cssText = 'transform:translateY(100%)')
})

// experience
const d = new Date();
let year = d.getFullYear();
experience.textContent = year - 2020

// skills animation
const skills =  document.querySelector('.skills')
about.addEventListener('scroll',_=>{
  if(skills.getBoundingClientRect().top <= 475 
  && skills.getBoundingClientRect().top >= -300){
    skills.classList.add('move')
  }else{
    skills.classList.remove('move')
  }
})
