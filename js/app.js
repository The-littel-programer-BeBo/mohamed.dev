'use strict'
// background animation
setInterval(() => {
  let random = (Math.random() * 100).toFixed(0)
  let random1 = (Math.random() * 10).toFixed(0)
  background.insertAdjacentHTML('beforeend', `<span style='left:${random}%;  animation-duration:${random1}s;'>.</span>`)
  setTimeout(() => background.removeChild(background.firstChild), 50000)
},200)

// add attribute to a
const anchors = document.getElementsByTagName('a')
for(let a of anchors){
  a.target = '_blank'
}

// other social buttons
const otherSocial = document.querySelectorAll('.otherSocial');
otherSocial.forEach(ele=>{
  ele.addEventListener('click',_=>ele.nextElementSibling.style.cssText = 'transform:unset')
})

// social button
let evSocial = true;
social.addEventListener('click',()=>{
  let XY = document.body.clientWidth < 700 ? 'y' : 'x'
  const icons = document.querySelectorAll('.social .i'),
        radius = XY == 'y'? document.body.clientWidth / 3:document.body.clientHeight / 3, // radius of the circle
        container = document.querySelector('.social');
  if(evSocial){
    otherSocial[0].style.cssText = `transform:translate${XY}(-${radius*3}px)`
    otherSocial[1].style.cssText = `transform:translate${XY}(${radius*3}px)`
    let angle = -1.57;
    
    icons.forEach((icon,i) => {
      setTimeout(_=>{
        const width = container.clientWidth,
              height = container.clientHeight;
        let step = (2*Math.PI) / icons.length,
        x = Math.round(width/2 + radius * Math.cos(angle)),
        y = Math.round(height/2 + radius * Math.sin(angle));
        icon.style.cssText = `left:${x}px;top:${y}px`
        angle += step
        evSocial = false
      },i*200)
    });
  }else{
    icons.forEach((icon,i)=>{
      setTimeout(_=>{
        icon.style.cssText = 'left:50%;top:50%'
      },i*120)
    });
    setTimeout(_=>{
      otherSocial[0].style.cssText = `transform:translate${XY}(0)`
      otherSocial[1].style.cssText = `transform:translate${XY}(0)`
    },icons.length*120)
    evSocial = true
  }
})

//close button
const close = document.querySelectorAll('.close')
close.forEach(ele=>{
  if(ele.classList.contains('popup')){
    ele.addEventListener('click',_=>{
      ele.parentElement.parentElement.style.cssText = 'transform:translate(-50%,-50%)scale(0)'
      about.style.overflow = 'overlay'
    })
  }else{
    ele.addEventListener('click',_=>ele.parentElement.style.cssText = 'transform:translateY(100%)')
  }
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

// service button
window.addEventListener('load',_=>servises.style.width = servises.getBoundingClientRect().width + 'px')

window.addEventListener('resize',_=>{
  if(!servises.classList.contains('active')){
    servises.style.width = 'fit-content';
    servises.style.width = servises.getBoundingClientRect().width + 'px'
  }else{
    servises.style.width = .6 * window.innerWidth + 'px'
  }
})

const icons = document.querySelectorAll('.servises i');
let evServises = true;
servises.addEventListener('click',_=>{
  servises.classList.toggle('active')
  const container = document.querySelector('.servises'),
        radius = container.clientWidth / 3; // radius of the circle
  if(evServises){
    let angle = 0;
    icons.forEach(icon => {
      const width = container.clientWidth,
            height = container.clientHeight;
      let step = (2*Math.PI) / icons.length,
      x = Math.round(width/2 + radius * Math.cos(angle)),
      y = Math.round(height/2 + radius * Math.sin(angle));
      icon.style.cssText = `left:${x}px;top:${y}px`
      angle += step
      evServises = false
    });
  }else{
    icons.forEach(icon=>icon.style.cssText = 'left:50%;top:50%');
    evServises = true
  }
})

icons.forEach(icon=>{
  icon.addEventListener('click',()=>{
    let popup = document.querySelector(`[data-serve='${icon.dataset.serve}']`)
    popup.style.cssText = `transform: translate(-50%,-50%) scale(1);`
    about.style.overflow = 'hidden'
  })
})