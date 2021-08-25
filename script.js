//Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
  navbar.classList.toggle('mostrar')
  menu.classList.toggle('mostrar')
})
//Navbar final

//Seccion 2 video
const video = document.querySelector('.video')
const btn = document.querySelector('.botones i')
const bar = document.querySelector('.video-bar')

const playPause = () => {
  if (video.paused) {
    video.play()
    btn.className = 'far fa-pause-circle'
    video.style.opacity = '.7'
  } else {
    video.pause()
    btn.className = 'far fa-play-circle'
    video.style.opacity = '.3'
  }
}

btn.addEventListener('click', () => {
  playPause()
})

video.addEventListener('timeupdate', () => {
  const barWidth = video.currentTime / video.duration
  bar.style.width = `${barWidth * 100}%`
  if (video.ended) {
    btn.className = 'far fa-play-circle'
    video.style.opacity = '.3'
  }
})
//Seccion 2 video final

//Seccion 3 cartas precio
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 80,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }
})
//Seccion 3 cartas precio final