<template>
  <section class="fullwidth">
    <div class="instagram-feed">
      <div class="instagram-feed__inst-container">
        <!-- LightWidget WIDGET -->
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <iframe
          src="https://cdn.lightwidget.com/widgets/8329c9d2d2ae5485b5e4f3f1d3a21963.html"
          scrolling="no"
          allowtransparency="true"
          class="lightwidget-widget"
          style="width: 100%; border: 0; overflow: hidden"
        ></iframe>
        <img
          src="@/assets/images/icons/sdc-bowtie.png"
          alt="The Secret Drinks Club bow tie"
          class="instagram-feed__bowtie"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="300"
        />
      </div>
      <div class="instagram-feed__cta-container">
        <h3
          class="instagram-feed__title"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="200"
        >
          Follow us
        </h3>
        <div class="instagram-feed__socials-container">
          <a
            href="https://www.instagram.com/secretdrinksclub/"
            class="instagram-feed__social-icon"
            target="_blank"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="250"
          >
            <img
              src="@/assets/images/icons/instagram.svg"
              alt="The Instagram logo"
              class="instagram-feed__social"
            />
          </a>
          <a
            href="https://www.facebook.com/secretdrinksclub"
            target="_blank"
            class="instagram-feed__social-icon"
            style="margin-left: 16px"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="350"
          >
            <img
              src="@/assets/images/icons/facebook.svg"
              alt="The Facebook logo"
              class="instagram-feed__social"
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InstagramFeed',
}
</script>

<style lang="scss" scoped>
.fullwidth {
  background-color: #fff;
  width: 100%;
  height: auto;
  padding: 50px 0 80px 0;
}

.instagram-feed {
  width: 1170px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.instagram-feed__inst-container {
  width: 75%;
  padding: 0 20px;
  position: relative;
}

.instagram-feed__cta-container {
  width: 25%;
  padding: 0 20px;
}

.instagram-feed__title {
  font-size: 35px;
  margin-bottom: 15px;
  line-height: 1.5;
  font-family: 'Lora', serif;
  color: #1d1d1d;
}

.instagram-feed__socials-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.instagram-feed__social-icon,
.instagram-feed__social {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.instagram-feed__social:hover {
  box-shadow: 5px 5px 15px rgba(102, 101, 104, 0.4);
  opacity: 0.8;
}

.instagram-feed__bowtie {
  display: block;
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 150px;
  height: 78px;
  z-index: 99;
}

.instagram-feed__instagram-frame {
  height: 560px;
}

@media only screen and (max-width: 1100px) {
  .instagram-feed__instagram-frame {
    height: 530px;
  }
}

@media only screen and (max-width: 1050px) {
  .instagram-feed__instagram-frame {
    height: 500px;
  }
}

@media only screen and (max-width: 1000px) {
  .instagram-feed__bowtie {
    width: 120px;
    height: 62px;
  }

  .instagram-feed__instagram-frame {
    height: 480px;
  }
}

@media only screen and (max-width: 950px) {
  .instagram-feed__instagram-frame {
    height: 440px;
  }
}

@media only screen and (max-width: 880px) {
  .instagram-feed {
    flex-direction: column-reverse;
  }

  .instagram-feed__inst-container,
  .instagram-feed__cta-container {
    width: 100%;
  }

  .instagram-feed__inst-container {
    padding: 0 20px 0 20px;
  }

  .instagram-feed__cta-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .instagram-feed__title {
    text-align: center;
  }

  .instagram-feed__socials-container {
    justify-content: center;
    margin-bottom: 15px;
  }

  .instagram-feed__instagram-frame {
    height: 410px;
  }
}

@media only screen and (max-width: 870px) {
  .instagram-feed__bowtie {
    width: 110px;
    height: 57px;
    bottom: -15px;
    right: 10px;
  }

  .instagram-feed__instagram-frame {
    height: 550px;
  }
}

@media only screen and (max-width: 850px) {
  .instagram-feed__instagram-frame {
    height: 520px;
  }
}

@media only screen and (max-width: 800px) {
  .instagram-feed__instagram-frame {
    height: 490px;
  }
}

@media only screen and (max-width: 750px) {
  .instagram-feed__instagram-frame {
    height: 460px;
  }
  .instagram-feed__bowtie {
    bottom: -5px;
  }
}

@media only screen and (max-width: 712px) {
  .instagram-feed__instagram-frame {
    height: 440px;
  }
}

@media only screen and (max-width: 680px) {
  .instagram-feed__instagram-frame {
    height: 420px;
  }
}

@media only screen and (max-width: 636px) {
  .instagram-feed__instagram-frame {
    height: 400px;
  }
}

@media only screen and (max-width: 605px) {
  .instagram-feed__instagram-frame {
    height: 380px;
  }
}

@media only screen and (max-width: 570px) {
  .instagram-feed__instagram-frame {
    height: 350px;
  }
}

@media only screen and (max-width: 530px) {
  .instagram-feed__instagram-frame {
    height: 320px;
  }
}

@media only screen and (max-width: 490px) {
  .instagram-feed__instagram-frame {
    height: 300px;
  }
}

@media only screen and (max-width: 455px) {
  .instagram-feed__instagram-frame {
    height: 275px;
  }
}

@media only screen and (max-width: 425px) {
  .instagram-feed__instagram-frame {
    height: 255px;
  }

  .instagram-feed__bowtie {
    width: 100px;
    height: 52px;
  }
}

@media only screen and (max-width: 395px) {
  .instagram-feed__instagram-frame {
    height: 240px;
  }
}

@media only screen and (max-width: 365px) {
  .instagram-feed__instagram-frame {
    height: 220px;
  }
}

@media only screen and (max-width: 350px) {
  .instagram-feed__instagram-frame {
    height: 200px;
  }
}

@media only screen and (max-width: 320px) {
  .instagram-feed__bowtie {
    bottom: -15px;
  }
}
</style>
