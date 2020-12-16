<template>
  <section class="section__container image-text" :class="{ reversed: reverse }">
    <div
      class="image-text__content-container"
      :class="{ reverse: reverse, bottomMargin: bottomMargin }"
    >
      <div class="image-text__border" :class="{ reverse: reverse }"></div>
      <div v-if="!reverse" class="image-text__corner top-left"></div>
      <div v-if="!reverse" class="image-text__inner-border-left"></div>
      <div v-if="reverse" class="image-text__corner top-right"></div>
      <div v-if="reverse" class="image-text__inner-border-right"></div>
      <div class="image-text__contents-wrap" :class="{ reverse: reverse }">
        <div class="image-text__video-img-container">
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
          <h2 v-if="title.length > 0" class="image_with_text__section_title">
            {{ title }}
          </h2>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="image-text__text" v-html="text"></div>
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
</style>
