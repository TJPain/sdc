<template>
  <div class="banner-home">
    <div class="banner-home__img-container">
      <div class="banner-home__img-filter">
        <div class="banner-home__corner top-left"></div>
        <div class="banner-home__corner top-right"></div>
        <div class="banner-home__corner bottom-left"></div>
        <div class="banner-home__corner bottom-right"></div>
        <div class="banner-home__inner-border">
          <div class="banner-home__content-container">
            <div class="banner-home__text-container">
              <h2 class="banner-home__title">
                <span class="typed-text">{{ typeValue }}</span>
                <span class="cursor" :class="{ typing: typeStatus }"
                  >&nbsp;</span
                >
              </h2>
              <div class="banner-home__btn-container">
                <a
                  href="https://shop.secretdrinksclub.com/collections/all"
                  class="banner-homer-btn"
                  >Get the box</a
                ><a href="#join" class="banner-homer-btn btn-style-2"
                  >Join the club</a
                >
              </div>
            </div>
            <div class="banner-home__logo-container">
              <img
                class="banner-home__logo"
                src="~@/assets/images/brand/sdc-full-logo-small.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerHome',
  data() {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: [
        'Discover amazing drinks brands',
        'Delivered straight to your door',
        'Welcome to the Secret Drinks Club',
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    }
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        )
        this.charIndex += 1

        setTimeout(this.typeText, this.typingSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        )
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      } else {
        this.typeStatus = false
        this.typeArrayIndex += 1
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0

        setTimeout(this.typeText, this.typingSpeed + 1000)
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200)
  },
  props: {
    img: {
      type: String,
      default: '~assets/images/home/secret-drinks-club.jpg',
    },
  },
}
</script>

<style lang="scss" scoped>
.banner-home {
  width: 100%;
  min-height: 710px;
  background-color: #fff;
}

.banner-home__img-container {
  min-height: 710px;
  height: 90%;
  min-width: calc(100% - 80px);
  width: 100%;
  margin: auto;
  background-color: black;
  box-shadow: inset 0 0 5em 1em #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(~@/assets/images/home/secret-drinks-club.jpg);
}

.banner-home__img-filter {
  min-height: 710px;
  height: 100%;
  width: 100%;
  background-color: rgba(41, 41, 41, 0.85);
  border: #907960 solid 10px;
  position: relative;
}

.banner-home__corner {
  height: 40px;
  width: 40px;
  position: absolute;
}

.top-left {
  left: 0;
  top: 0;
  border-bottom: #907960 solid 10px;
  border-right: #907960 solid 10px;
}

.top-right {
  right: 0;
  top: 0;
  border-bottom: #907960 solid 10px;
  border-left: #907960 solid 10px;
}

.bottom-left {
  left: 0;
  bottom: 0;
  border-top: #907960 solid 10px;
  border-right: #907960 solid 10px;
}

.bottom-right {
  right: 0;
  bottom: 0;
  border-top: #907960 solid 10px;
  border-left: #907960 solid 10px;
}

.banner-home__inner-border {
  min-height: 710px;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  border: #907960 solid 3px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.banner-home__content-container {
  width: 80%;
  max-width: 1050px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.banner-home__text-container {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.banner-home__title {
  font-size: 65px;
  margin-top: 30px;
  line-height: 1.5;
  text-shadow: 2px 2px 7px rgba(0, 0, 0, 1);
  font-family: 'Lora', serif;

  span.typed-text {
    color: #fff;
  }

  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: #fff;
    animation: cursorBlink 1s infinite;
  }

  span.cursor.typing {
    animation: none;
  }
}

.banner-home__btn-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 20px;
}

.banner-homer-btn {
  display: inline-block;
  background: #e1851b;
  border: solid 2px #e1851b;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  padding: 13px 30px;
  margin: 10px 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 500;
  opacity: 0.8;
  transition: background 0.25s ease-in-out;
  -moz-transition: background 0.25s ease-in-out;
  -webkit-transition: background 0.25s ease-in-out;
}

.banner-homer-btn.btn-style-2 {
  background: rgba(0, 0, 0, 0.1);
}

.banner-homer-btn:hover {
  background: rgba(0, 0, 0, 0.1);
}

.banner-homer-btn.btn-style-2:hover {
  background: #e1851b;
}

@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

.banner-home__text {
  text-shadow: 2px 2px 7px rgba(0, 0, 0, 1);
  font-family: 'Open Sans', sans-serif;
}

.banner-home__logo-container {
  width: 30%;
  height: auto;
}

.banner-home__logo {
  height: auto;
  width: 100%;
}

@media only screen and (max-width: 1238px) {
  .banner-home__title {
    font-size: 58px;
  }
}

@media only screen and (max-width: 1114px) {
  .banner-home,
  .banner-home__img-container,
  .banner-home__img-filter,
  .banner-home__inner-border {
    min-height: 600px;
  }

  .banner-home__logo-container {
    width: 25%;
  }

  .banner-home__text-container {
    width: 70%;
  }

  .banner-home__title {
    margin-top: 15px;
  }

  .banner-home__title {
    font-size: 50px;
  }
}

@media only screen and (max-width: 838px) {
  .banner-home__title {
    font-size: 42px;
  }

  .banner-home__title {
    margin-top: 10px;
  }
}

@media only screen and (max-width: 730px) {
  .banner-home__content-container {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
  }

  .banner-home__title {
    text-align: center;
    min-height: 130px;
  }

  .banner-home__content-container {
    width: 95%;
  }

  .banner-home__logo-container {
    width: 180px;
  }

  .banner-home__text-container {
    width: 85%;
  }

  .banner-home__title {
    font-size: 42px;
  }

  .banner-home__btn-container {
    margin: 20px auto 0 auto;
  }
}

@media only screen and (max-width: 450px) {
  .banner-home__text-container {
    width: 260px;
    margin: auto;
  }

  .banner-home,
  .banner-home__img-container,
  .banner-home__img-filter,
  .banner-home__inner-border {
    min-height: 550px;
  }

  .banner-home__title {
    min-height: 260px;
  }

  .banner-home__title {
    font-size: 40px;
  }

  .banner-home__content-container {
    padding-top: 15px;
  }

  .banner-home__btn-container {
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 30px;
  }
}

@media only screen and (max-width: 350px) {
  .banner-home__text-container {
    width: 90%;
  }

  .banner-home__title {
    font-size: 38px;
  }

  .banner-home__content-container {
    padding-top: 25px;
  }
}

@media only screen and (max-width: 305px) {
  .banner-home__title {
    font-size: 35px;
  }
}
</style>
