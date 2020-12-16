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
        />
      </div>
      <div class="instagram-feed__cta-container">
        <h3 class="instagram-feed__title">Follow us</h3>
        <div class="instagram-feed__socials-container">
          <a
            href="https://www.instagram.com/secretdrinksclub/"
            class="instagram-feed__social-icon"
            target="_blank"
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

@media only screen and (max-width: 1000px) {
  .instagram-feed__bowtie {
    width: 120px;
    height: 62px;
  }
}

@media only screen and (max-width: 870px) {
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
}

@media only screen and (max-width: 870px) {
  .instagram-feed__bowtie {
    width: 110px;
    height: 57px;
    bottom: -15px;
    right: 10px;
  }
}

@media only screen and (max-width: 870px) { 
  .instagram-feed__bowtie {
    width: 100px;
    height: 52px;
    bottom: -15px;
    right: 10px;
  }

}
</style>
