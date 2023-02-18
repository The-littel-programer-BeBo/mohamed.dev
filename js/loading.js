if(sessionStorage.getItem("opened")){
  document.body.classList.add('show')
  intro.style.cssText = 'transition:none;top:3%'
  typeMsg('front-end developer.',intro,false)
}else{
  typeMsg('Welcome to my website.',intro)
}

// animation typing
function typeMsg(massage, ele, b=true){
  ele.classList.remove('clean')
  let newMsg = massage.split('')
  let x = 0
  ele.innerHTML = ''
  let type = setInterval(() => {
    if (x < newMsg.length) {
      ele.innerHTML +=`<span data-text='${newMsg[x]}' style='animation-delay:${x / 100}s;'>${newMsg[x] == ' ' ? '&nbsp;' : newMsg[x]}</span>`
      x++
    } else if(b){
      clearInterval(type)
      enter.next()
    }
  },100)
}

function* chating(){
  yield clean()
  yield typeMsg('i\'m mohamed and i\'m ...',intro)
  yield clean()
  yield typeMsg('front-end developer.',intro)
  yield finshed();
}
let enter = chating()

function clean(){
  intro.classList.add('clean')
  intro.lastChild.onanimationend =_=> enter.next()
}

function finshed(){
  intro.style.cssText = 'top:3%'
  document.body.classList.add('show')
  sessionStorage.setItem("opened", true);
}