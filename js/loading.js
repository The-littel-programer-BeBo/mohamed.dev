// animation typing
function typeMsg(massage, ele){
  intro.classList.remove('clean')
  test = false
  let newMsg = massage.split('')
  let x = 0
  ele.innerHTML = ''
  let type = setInterval(() => {
    if (x < newMsg.length) {
      ele.innerHTML +=`<span data-text='${newMsg[x]}' style='animation-delay:${x / 100}s;'>${newMsg[x] == ' ' ? '&nbsp;' : newMsg[x]}</span>`
      x++
    } else {
      clearInterval(type)
      enter.next()
    }
  }, 100)
}

typeMsg('Welcome to my website.',intro)
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
  document.querySelectorAll('body>*:not(header,script)').forEach(e=>e.style.opacity = '1')
}