<template>
  <div class="feature-card">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'FeatureCard',
  };
</script>

<style lang="scss" scoped>
  .feature-card {
    display: grid;
    grid-template-rows: auto rem(100px) 1fr min-content;
    grid-row-gap: $gutter-xxsmall;
    padding: $gutter-large $gutter-large;
    align-items: center;
    justify-self: end;
    @include respond-to("large and up") {
      height: 100%;
    }
    img {
      display: block;
      margin: 0 auto;
    }

    h3 {
      margin: 0;
    }

    a {
      width: max-content;
    }
  }
</style>
