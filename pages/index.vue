<template>
    <BannerHome />
</template>

<script>
import BannerHome from '@/components/home/BannerHome'

export default {
  name: 'Home',
  components: {
    BannerHome,
  },
  head() {
    return {
      title: ' Secret Drinks Company | Welcome to the Club',
      meta: [
        // titles
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Secret Drinks Company | Welcome to the Club',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Secret Drinks Company | Welcome to the Club',
        },
        // descriptions
        {
          hid: 'description',
          name: 'description',
          content:
            'The Secret Drinks Club is here to bring you a completely new, exciting and interactive drinks experience. Delivered directly to your door.',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'The Secret Drinks Club is here to bring you a completely new, exciting and interactive drinks experience. Delivered directly to your door.',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'The Secret Drinks Club is here to bring you a completely new, exciting and interactive drinks experience. Delivered directly to your door.',
        },
        // links
        {
          hid: 'canonical:url',
          property: 'canonical:url',
          content: 'http://www.secretdrinksclub.com/',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'http://www.secretdrinksclub.com/',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'http://www.secretdrinksclub.com/',
        },
        // don't need to edit
        {
          hid: 'author',
          name: 'author',
          content: 'Secret Drinks Club',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://res.cloudinary.com/drmmjkhp8/image/upload/v1605895145/OG%20images/sdc-og-img1_vstbsh.png',
        },
        {
          hid: 'og:image2',
          property: 'og:image',
          content:
            'https://res.cloudinary.com/drmmjkhp8/image/upload/v1605895145/OG%20images/sdc-og-img2_w4cz7y.png',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            'https://res.cloudinary.com/drmmjkhp8/image/upload/v1605895145/OG%20images/sdc-twitter-img_le8lgy.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  height: auto;
}
</style>
