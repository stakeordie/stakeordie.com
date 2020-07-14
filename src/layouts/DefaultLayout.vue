<template>
  <div class="layout">
    <!-- Website header -->
    <simple-header>
      <template v-slot:logo>
        <g-image src="~/assets/images/site-logo.png" alt="logo"></g-image>
      </template>
      <template v-slot:navigation>
        <simple-nav-item to="/">Home</simple-nav-item>
        <simple-nav-item to="/">About</simple-nav-item>
        <simple-nav-item to="/delegate">Delegate</simple-nav-item>
        <simple-nav-item to="/">Services</simple-nav-item>
        <simple-nav-item to="/">Contributions</simple-nav-item>

      </template>
      <template v-slot:nav-toggle>
        <g-image src="~/assets/images/navigation-icon.svg" alt="logo"></g-image>
      </template>
      <template v-slot:actions>
        <g-link class="icon telegram" to="/">
          <g-image src="~/assets/images/icon-telegram-white.svg" alt="logo"></g-image>
        </g-link>
        <g-link class="icon github" to="/">
          <g-image src="~/assets/images/icon-github-white.svg" alt="logo"></g-image>
        </g-link>
      </template>
      <template v-slot:nav-toggle-close>
        <g-image src="~/assets/images/navigation-close-icon.svg" alt="cerrar navegación"></g-image>
      </template>
    </simple-header>

    <!-- Content -->
    <slot />

    <!-- Website footer -->
    <simple-footer class="footer">
      <no-column>
        <section class="content">
          <div class="block">
            <g-image src="~/assets/images/footer-logo.png" alt="Docufiel"></g-image>
          </div>
          <div class="block">
            <h3>Company</h3>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Our Team</a>
          </div>
          <div class="block">
            <h3>Staking</h3>
            <a href="/">Delegate</a>
          </div>
          <div class="block">
            <h3>Services</h3>
            <a href="/">Managed Validator</a>
            <a href="/">Consulting</a>
          </div>
          <div class="block">
            <h3>Contributions</h3>
            <a href="/">SecretScan.io</a>
            <a href="/">QuickSync</a>
            <a href="/">Enigma API</a>
            <a href="/">Kamut Testnet</a>
          </div>
          <div class="block icon">
            <g-link class="icon telegram" to="/">
              <g-image src="~/assets/images/icon-telegram-black.svg" alt="logo"></g-image>
            </g-link>
            <g-link class="icon github" to="/">
              <g-image src="~/assets/images/icon-github-black.svg" alt="logo"></g-image>
            </g-link>
          </div>
          <div class="block social">
            <!-- <g-image src="~/assets/images/facebook.svg" alt="Facebook"></g-image> -->
          </div>
        </section>
      </no-column>
    </simple-footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">

  body {
    background-color: $brand-white;

    a {
      text-decoration: none;
    }

    .header {
      .main-nav {
        align-items: center;

        &__primary {
          display: inline-grid;
          grid-template-columns: auto;
          grid-gap: $gutter-xxlarge;
          align-items: center;

          a {
            text-decoration: none;

            &:hover {
              color: $brand-primary;
            }
          }
        }
      }

      &__actions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        grid-gap: $gutter;

        a {
          display: grid;
          align-items: center;
          justify-items: center;
          width: rem(32px);
          height: rem(32px);
          background: $brand-primary;
          border-radius: $radius-xlarge;
          text-align: center;

          img {
            width: 80%;
            height: auto;
          }
        }
      }
    }
      .footer {
        // background: red;
    .content {
      padding: $gutter-xxlarge 0;

      @include respond-to("medium and down") {
        @include gridline(1, $gutter-xlarge, start);
      }

      @include respond-to("large and up") {
        @include gridline(6, $gutter-xlarge, start);
      }

      h3 {
        font-size: $h3-text-size;
        font-weight: 600;
        line-height: rem(20px);
        margin-bottom: rem(15px);
      }

      a {
        color: white;
        display: block;
        margin-bottom: $gutter-small;
      }

      .block {
        &.icon {
          a {
            display: inline-grid;
            align-items: center;
            justify-items: center;
            width: rem(32px);
            height: rem(32px);
            background: $brand-white;
            border-radius: $radius-xlarge;
            text-align: center;
            margin-right: $gutter;
            img {
              width: 80%;
              height: auto;
            }
          }
        }
      }

    }
  }
  }

</style>
