<template>
  <div>
    <div style="position: relative; padding-top: 56.25%">
      <iframe
        src="https://iframe.videodelivery.net/bdd3fd4d912900eb5eab0f47febbb67e?autoplay=true"
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
</template>

<script>
export default {
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
        // don't need to edit
        {
          hid: 'author',
          name: 'author',
          content: 'Secret Drinks Club',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, nofollow',
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

<style lang="scss" scoped></style>
