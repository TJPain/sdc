<template>
  <div class="banner-home">
    <div class="banner-home__img-container">
      <div class="banner-home__text-container">
        <h2 class="display-3 text-center banner-home__title">Secret drinks club</h2>
        <p class="headline text-center banner-home__text">coming soon</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerHome',
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
  min-height: 800px;
  background-color: #fff;
}

.banner-home__img-container {
  min-height: calc(100% - 80px);
  height: 90%;
  min-width: calc(100% - 80px);
  width: 90%;
  margin: 40px auto 40px auto;
  background-color: black;
  box-shadow: inset 0 0 5em 1em #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(~@/assets/images/home/secret-drinks-club.jpg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.banner-home__text-container {
    max-width: 90%;
}

.banner-home__title {
    margin-bottom: 20px;
    text-shadow: 2px 2px 7px rgba(0,0,0,1);
}

.banner-home__text {
    text-shadow: 2px 2px 7px rgba(0,0,0,1);
    font-family: 'Poppins', sans-serif;
}

</style>
