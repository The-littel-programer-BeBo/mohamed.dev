let projects = [
  {
    titele:'pomodoro',
    imgSrc:'image/pomodoro.png',
    aHref:'https://the-littel-programer-bebo.github.io/pomodoro'
  },
  {
    titele:'leon',
    imgSrc:'image/leon.png',
    aHref:'https://the-littel-programer-bebo.github.io/Template01'
  },
  {
    titele:'zatech',
    imgSrc:'image/zatech.png',
    aHref:'https://the-littel-programer-bebo.github.io/zatech'
  },
  {
    titele:'kasper',
    imgSrc:'image/kasper.png',
    aHref:'https://the-littel-programer-bebo.github.io/Template02'
  },
  {
    titele:'skin cancer',
    imgSrc:'image/skin cancer.png',
    aHref:''
  },
  {
    titele:'weather',
    imgSrc:'image/weather.png',
    aHref:''
  },
  // {
  //   titele:'landing page',
  //   imgSrc:'image/landing page.png',
  //   aHref:''
  // }
]

projects.forEach((project)=>{
  const portfolio = document.querySelector('.portfolio')
  portfolio.insertAdjacentHTML('beforeend',`
    <div class="project">
      <img src="${project.imgSrc}" alt="go to the web page .">
      <div class="details">
        <h2>${project.titele}</h2>
        <!--<i class="fa-solid fa-ellipsis explain">
          <span>about project</span>
        </i>-->
        <a href="${project.aHref}" target="_blank">
          <i class="fa-solid fa-arrow-up-right-from-square explain">
            <span>open project</span>
          </i>
        </a>
      </div>
    </div>
  `)
})