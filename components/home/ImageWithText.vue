<template>
  <section class="section__container image-text" :class="{ reversed: reverse }">
    <div
      class="image-text__content-container"
      :class="{ reverse: reverse, bottomMargin: bottomMargin }"
    >
      <div
        class="image-text__border"
        :class="{ reverse: reverse }"
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-delay="200"
      ></div>
      <div
        v-if="!reverse"
        class="image-text__corner top-left"
        data-aos="zoom-in-up"
        data-aos-once="true"
        data-aos-delay="200"
      ></div>
      <div
        v-if="!reverse"
        class="image-text__inner-border-left"
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-delay="300"
      ></div>
      <div
        v-if="reverse"
        class="image-text__corner top-right"
        data-aos="zoom-in-up"
        data-aos-once="true"
        data-aos-delay="200"
      ></div>
      <div
        v-if="reverse"
        class="image-text__inner-border-right"
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-delay="300"
      ></div>
      <div class="image-text__contents-wrap" :class="{ reverse: reverse }">
        <div
          class="image-text__video-img-container"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="450"
        >
          <div v-if="video.length > 0" class="image-text__video-container">
            <div style="position: relative; padding-top: 56.25%">
              <iframe
                :src="video"
                style="
                  border: none;
                  position: absolute;
                  top: 0;
                  height: 100%;
                  width: 100%;
                "
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowfullscreen="true"
              ></iframe>
            </div>
          </div>
          <div v-else class="image-text__img-container">
            <img :src="imgSrc" :alt="imgAlt" class="image-text__img" />
          </div>
        </div>
        <div class="image-text__text-container">
          <h2
            v-if="title.length > 0"
            class="image_with_text__section_title"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="600"
          >
            {{ title }}
          </h2>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            class="image-text__text"
            v-html="text"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="625"
          ></div>
          <a
            v-if="button"
            href="/#join"
            class="image-text__button"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
            >Join the club</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const image = require('@/assets/images/home/secret-drinks-club-1.jpg')
export default {
  name: 'ImageWithText',
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    video: {
      type: String,
      default: '',
    },
    imgSrc: {
      type: String,
      default: image,
    },
    imgAlt: {
      type: String,
      default: '',
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    bottomMargin: {
      type: Boolean,
      default: false,
    },
    button: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.section__container {
  width: 100%;
  background-color: #fff;
  padding-top: 25px;
}

.image-text {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  height: auto;
}

.reversed {
  flex-direction: unset !important;
}

.image-text__content-container {
  width: calc(100% - 50px);
  background-color: #1d1d1d;
  margin-top: 25px;
  position: relative;
}

.bottomMargin {
  margin-bottom: 50px;
}

.image-text__contents-wrap {
  max-width: 1100px;
  margin: 60px;
  display: flex;
  flex-direction: row;
  z-index: 3;
}

.reverse .image-text__contents-wrap {
  flex-direction: row-reverse;
}

.image-text__border {
  height: 100%;
  width: 100%;
  border-top: #907960 solid 10px;
  border-left: #907960 solid 10px;
  border-bottom: #907960 solid 3px;
  position: absolute;
}

.reverse .image-text__border {
  height: 100%;
  width: 100%;
  border-top: #907960 solid 10px;
  border-right: #907960 solid 10px;
  border-bottom: #907960 solid 3px;
  border-left: unset;
  position: absolute;
}

.image-text__inner-border-left {
  height: 80%;
  width: 40%;
  border-left: #907960 solid 3px;
  border-top: #907960 solid 3px;
  position: absolute;
  left: 25px;
  top: 25px;
}

.image-text__inner-border-right {
  height: 80%;
  width: 40%;
  border-right: #907960 solid 3px;
  border-top: #907960 solid 3px;
  position: absolute;
  right: 25px;
  top: 25px;
}

.image-text__corner {
  height: 40px;
  width: 40px;
  position: absolute;
}

.top-left {
  left: 10px;
  top: 10px;
  border-bottom: #907960 solid 10px;
  border-right: #907960 solid 10px;
}

.top-right {
  right: 10px;
  top: 10px;
  border-bottom: #907960 solid 10px;
  border-left: #907960 solid 10px;
}

.image-text__video-img-container,
.image-text__text-container {
  width: 50%;
  z-index: 4;
  padding: 20px;
}
.image-text__text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.image-text__video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  position: relative;
  height: 100%;
}

.image-text__img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  position: relative;
  height: 100%;
}

.image-text__img {
  height: auto;
  width: 100%;
}

.image-text__img-wrap {
  max-width: 545px;
  max-height: 410px;
}

.image_with_text__section_title {
  font-size: 35px;
  margin-bottom: 15px;
  line-height: 1.5;
  font-family: 'Lora', serif;
  color: #fff;
}

.image-text__text {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-block-end: 16px;
  color: #fff;
}

.image-text__button {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-block-end: 16px;
  color: #fff;
  justify-content: center;
  background: #f58439;
  width: 210px;
  height: 58px;
  border-radius: 10px;
}

.image-text__button:hover {
  box-shadow: 5px 10px 15px rgba(245, 132, 57, 0.15);
  color: #edebe8;
}

@media only screen and (max-width: 800px) {
  .image-text__contents-wrap {
    flex-direction: column;
  }

  .reverse .image-text__contents-wrap {
    flex-direction: column;
  }

  .image-text__video-img-container,
  .image-text__text-container {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
  }

  .image-text__button {
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 600px) {
  .section__container {
    padding-top: 18px;
  }

  .image-text__content-container {
    width: calc(100% - 36px);
    margin-top: 18px;
  }

  .bottomMargin {
    margin-bottom: 36px;
  }

  .image-text__contents-wrap {
    margin: 50px 30px 30px 50px;
  }

  .reverse .image-text__contents-wrap {
    margin: 50px 50px 30px 30px;
  }
}

@media only screen and (max-width: 440px) {
  .section__container {
    padding-top: 14px;
  }

  .image-text__content-container {
    width: calc(100% - 28px);
    margin-top: 14px;
  }

  .bottomMargin {
    margin-bottom: 28px;
  }
}

@media only screen and (max-width: 385px) {
  .section__container {
    padding-top: 12px;
  }

  .image-text__content-container {
    width: calc(100% - 24px);
    margin-top: 12px;
  }

  .bottomMargin {
    margin-bottom: 24px;
  }
}

@media only screen and (max-width: 350px) {
  .section__container {
    padding-top: 10px;
  }

  .image-text__content-container {
    width: calc(100% - 20px);
    margin-top: 10px;
  }

  .bottomMargin {
    margin-bottom: 20px;
  }
}
</style>
