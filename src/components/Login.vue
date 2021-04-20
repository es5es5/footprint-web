<template>
  <div id="login">
    <div class="polaroid_wrap">
      <img src="@/assets/images/polaroid.svg" alt="polaroid" class="polaroid _1">
      <img src="@/assets/images/polaroid.svg" alt="polaroid" class="polaroid _2">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  height: 100vh;
  background-color: rgba($success, .2);

  font-size: 20px;

  @media (max-width: 1024px) { font-size: 16px; }
  @media (max-width: 750px) { font-size: 12px; }
  @media (max-width: 500px) { font-size: 8px; }
}

.polaroid_wrap {
  @include clearfix;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .polaroid {
    transition: all .5s;
    width: 18em;
    height: 21em;
    opacity: .8;

    &._1 {
      width: 18em;
      height: 21em;
      transform: rotate(-25deg);
    }

    &._2 {
      width: 14em;
      height: 16em;
      transform: rotate(10deg);
    }

    &:hover {
      cursor: pointer;
      opacity: 1;

      &._1 {
        transform: rotate(-15deg);
      }

      &._2 {
        width: 14em;
        height: 16em;
        transform: rotate(5deg);
      }
    }
  }
}
</style>
