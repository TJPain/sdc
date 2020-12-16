import AOS from 'aos'

import 'aos/dist/aos.css'

export default ({ app }) => {
  // eslint-disable-next-line
  app.AOS = new AOS.init({
    disable: window.innerWidth < 640,
    duration: 800,
    easing: 'ease-in-out-cubic',
    once: true
  })
}
