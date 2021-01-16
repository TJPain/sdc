<template>
  <section class="sign-up">
    <div class="sign-up_container">
      <div class="sign-up__text-wrapper">
        <h3
          class="sign-up__title"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="200"
        >
          Join the club
        </h3>
        <div
          class="sign-up__text"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <p>
            Our Rum Box sold out quickly, to be first in line to hear about the
            pre-sale & launch of the new box simply join below
          </p>
          <p>
            Also, as a thank you we will also send you a little taster of whats
            to come and secret recipe or two!
          </p>
        </div>
      </div>
      <div
        class="sign-up__iframe-wrapper"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="400"
      >
        <iframe
          class="sign-up__iframe"
          src="https://cdn.forms-content.sg-form.com/baeb0433-57dd-11eb-9c0f-6e45bca9882d"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SignUpForm',
}
</script>

<style lang="scss" scoped>
.sign-up {
  background-color: #fff;
  width: 100%;
  height: auto;
}

.sign-up_container {
  height: auto;
  min-height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 1000px;
  margin: auto;
}

.sign-up__text-wrapper {
  width: calc(100% - 400px);
  display: flex;
  flex-direction: column;
  padding-right: 50px;
}

.sign-up__iframe-wrapper {
  height: 480px;
  width: 400px;
  position: relative;
}

.sign-up__iframe {
  height: 470px;
  width: 360px;
  border: none;
  margin: auto;
}

.sign-up__title {
  font-size: 35px;
  margin-bottom: 15px;
  line-height: 1.5;
  font-family: 'Lora', serif;
  color: #1d1d1d;
}

.sign-up__text {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-block-end: 16px;
  color: #1d1d1d;
}

@media only screen and (max-width: 1050px) {
  .sign-up__iframe-wrapper {
    width: 360px;
  }

  .sign-up__text-wrapper {
    width: calc(100% - 360px);
    padding-left: 20px;
    padding-right: 30px;
  }
}

@media only screen and (max-width: 800px) {
  .sign-up__text-wrapper {
    padding-right: 20px;
  }
}

@media only screen and (max-width: 700px) {
  .sign-up_container {
    flex-direction: column;
  }

  .sign-up__iframe-wrapper {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: center;
  }

  .sign-up__text-wrapper {
    width: 95%;
    margin: auto;
  }

  .sign-up__title {
    text-align: center;
  }
}

@media only screen and (max-width: 360px) {
  .sign-up__text-wrapper {
    width: 100%;
    margin: auto;
  }
}
</style>
