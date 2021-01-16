<template>
  <section class="home">
    <BannerHome />
    <ImageWithText
      :text="imageWithText.text"
      :title="imageWithText.title"
      :img-src="imageWithText.imgSrc"
      :img-alt="imageWithText.imgAlt"
      :video="imageWithText.video"
    />
    <ImageWithText
      :text="imageWithText2.text"
      :title="imageWithText2.title"
      :img-src="imageWithText2.imgSrc"
      :img-alt="imageWithText2.imgAlt"
      :reverse="imageWithText2.reverse"
    />
    <ImageWithText
      :text="imageWithText3.text"
      :title="imageWithText3.title"
      :img-src="imageWithText3.imgSrc"
      :img-alt="imageWithText3.imgAlt"
      :bottom-margin="imageWithText3.bottomMargin"
      :button="imageWithText3.button"
    />
    <InstagramFeed />
    <SignUpForm id="join"/>
  </section>
</template>

<script>
import BannerHome from '@/components/home/BannerHome'
import ImageWithText from '@/components/home/ImageWithText'
import SignUpForm from '@/components/home/SignUpForm'

export default {
  name: 'Home',
  components: {
    BannerHome,
    ImageWithText,
    SignUpForm,
  },
  data() {
    return {
      imageWithText: {
        // Ensure that images are in the ~/static/ folder to make them accessible
        title: 'What is the Secret Drinks Club?',
        imgSrc: '/home/secret-drinks-club-2.jpg',
        imgAlt: `A picture of the founders of the Secret Drinks Club`,
        text: `<p>The Secret Drinks Club is here to bring you a completely new, exciting and interactive drinks experience! Delivered directly to your door, we have worked with an up and coming drinks brand to bring you on a unique journey with us.</p><p>These brands have spirits and drinks which taste incredible and we never know about them because they don&#39;t sell through supermarkets and we are unlikely to find them in the mass of online sellers. The big secret? There is way more to the drinks industry than the supermarket…</p><p>That’s where we come in.</p>`,
        video: '',
      },
      imageWithText2: {
        // Ensure that images are in the ~/static/ folder to make them accessible
        title: '',
        imgSrc: '/home/secret-drinks-club-4.jpg',
        imgAlt: `A picture of the founders of the Secret Drinks Club`,
        text: `<p>We (Matt and Max) founded the Secret Drinks Club out of the frustration that there is hundreds (if not thousands) of exciting and interesting drinks brands out there which consumers like us have no knowledge of.</p><p>The Secret Drinks Club is not a boujie, hipster, old boys club from the 1950s! And if we are honest we don&#39;t really know what &#39;craft&#39; and &#39;artisan&#39; drinks are.. other than more expensive! We are a small company that is passionate about introducing people to exciting new, small or niche spirits. More importantly, we want to connect you directly to the brands so you experience it the way they intended!</p>`,
        video: '',
        reverse: true,
      },
      imageWithText3: {
        // Ensure that images are in the ~/static/ folder to make them accessible
        title: 'So what do I get?',
        imgSrc: '/home/secret-drinks-club-1.jpg',
        imgAlt: `A picture of the founders of the Secret Drinks Club`,
        text: `<ul>
        <li>Full 70cl bottle of spirit from a new brand that we guarantee you will love</li>
        <li>A range of mixers</li>
        <li>A unique and interactive guided experience with industry experts who introduce you to the brand, the drink, its heritage and most importantly, how to enjoy it!</li>
        <li>Tasting masterclass and three new ways to enjoy the spirit</li>
        <li>A few surprises (well, we are the secret drinks club after all)</li>
        <li>All presented in a gift box suitable for everyone from your mum to your boss!</li>
        </ul>`,
        video: '',
        bottomMargin: true,
        button: true,
      },
    }
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
