<template>
  <section class="footer">
    <a class="footer__back-to-top" href="#top">
      <img
        class="footer__back-to-top-icon"
        src="~assets/images/icons/white-accordion-up.svg"
        alt="white cheveron icon"
        style="max-width: 30px; height: auto; margin: 15px 20px 25px 20px"
      />
    </a>
    <div class="footer__contents-container">
      <div class="footer__left">
        <div class="footer__logo-container">
          <img
            src="~assets/images/brand/sdc-full-logo-small.png"
            alt="Secret drinks club logo"
            class="footer__logo"
          />
        </div>
        <div class="footer__company-info">
          <p class="footer__text">Copyright © 2020 Secret Drinks Club.</p>
          <p class="footer__text">All rights reserved.</p>
          <p class="footer__text">UK Company No. 13054762</p>
        </div>
      </div>
      <div class="footer__right">
        <div class="footer__links-container">
          <a
            href="mailto: hello@secretdrinksclub.com"
            target="_blank"
            class="footer__text footer__link"
            >Contact Us</a
          >
          <a href="#" class="footer__text footer__link">Delivery and Returns</a>
          <a href="#" class="footer__text footer__link">Terms and Conditions</a>
          <a href="#" class="footer__text footer__link">Privacy Policy</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: auto;
  background-color: #1d1d1d;
  position: relative;
}

.footer__contents-container {
  width: 95%;
  max-width: 1150px;
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 45px 0;
  background-color: #1d1d1d;
}

.footer__left {
  width: calc(100% - 320px);
  display: flex;
  flex-direction: column;
}

.footer__right {
  width: 320px;
  display: flex;
  flex-direction: column;
}

.footer__logo-container,
.footer__logo {
  width: 150px;
  height: auto;
}

.footer__company-info {
  margin-top: 30px;
}

.footer__links-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
}

.footer__text {
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
}

.footer__link:hover {
  cursor: pointer;
  color: #e1851b;
}

.footer__back-to-top {
  position: absolute;
  background-color: #1d1d1d;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  top: -35px;
  right: calc(50% - 35px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: top 0.25s ease-in-out;
  -moz-transition: top 0.25s ease-in-out;
  -webkit-transition: top 0.25s ease-in-out;
  transition: border 0.25s ease-in-out;
  -moz-transition: border 0.25s ease-in-out;
  -webkit-transition: border 0.25s ease-in-out;
}

.footer__back-to-top:hover {
  top: -40px;
  border: 1px solid #e1851b;
}

.footer__back-to-top-icon {
  max-width: 50px;
  height: auto;
  margin: auto;
  background-image: url(~@/assets/images/icons/white-accordion-up.svg);
  background-size: cover;
}

@media only screen and (max-width: 680px) {
  .footer__contents-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer__left,
  .footer__right {
    width: 95%;
    max-width: 500px;
  }

  .footer__link {
    margin-bottom: 16px;
  }

  .footer__logo-container {
    margin: auto;
  }
}
</style>
