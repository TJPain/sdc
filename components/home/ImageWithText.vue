<template>
  <section class="section__container image-text">
    <div class="image-text__text-container">
      <h2 v-if="sectionTitle" class="image_with_text__section_title">
        {{ sectionTitle }}
      </h2>
      <div class="image-text__text">{{ text }}</div>
    </div>
    <div class="image-text__content-container"></div>
  </section>
</template>

<script>
const image = require('@/assets/images/home/secret-drinks-club-1.jpg')
export default {
  name: 'ImageWithText',
  props: {
    sectionTitle: {
      type: String,
      default: 'What is the Secret Drinks Club?',
    },
    text: {
      type: String,
      default: `The Secret Drinks Club is here to bring you a completely new, exciting and interactive drinks experience! Delivered directly to your door, we have worked with an up and coming drinks brand to bring you on a unique journey with us.

These brands have spirits and drinks which taste incredible and we never know about them because they don’t sell through supermarkets and we are unlikely to find them in the mass of online sellers. The big secret? There is way more to the drinks industry than the supermarket….

That’s where we come in.
`,
    },
  },
}
</script>

<style lang="scss" scoped>
.section__container {
  max-width: 1050px;
}

.image-text {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  height: auto;
}

.image-text__text-container {
  width: 50%;
}

.image-text__content-container {
  width: 50%;
}
</style>
