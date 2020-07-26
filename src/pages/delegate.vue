<template>
  <default-layout>
    <base-page>
      <!-- TwinColumns -->
      <section class="total-stake">
        <twin-columns>
          <template v-slot:left>
            <h3 class="title">Total Stake</h3>
            <p class="value">XXXX</p>
            <h3 class="title">Commission</h3>
            <p class="value">X.0%</p>
            <h3 class="title">Delegation Address</h3>
            <p class="value delegation">enigmavaloper</p>
            <button class="copy">Copy</button>
            <button class="block-explorer">View on Block Explorer</button>
          </template>
          <template v-slot:right>
            <h3 class="title"></h3>
          </template>
        </twin-columns>
      </section>

      <!-- Future expansion -->
      <section class="validator">
        <slim-column>
          <h1 class="title"></h1>
          <p></p>
        </slim-column>
      </section>
    </base-page>
  </default-layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Delegate with us'
  }
}
</script>

<style lang="scss">
body {
  .total-stake {
    margin-top: $gutter-xxlarge;
    margin-bottom: $gutter-xxlarge;

    .twins-column--start {
      align-self: center;
      box-shadow: 0px 14px 38px 0px rgba(141, 149, 162, 0.2);
      padding: $gutter-xlarge;
    }

    .twins-section--start {
      .title {
        font-size: rem(20px);
        font-weight: 600;

        span {
          display: block;
        }
      }

      .value {
        margin-bottom: $gutter-xlarge;
        color: $brand-secondary;
        font-size: $gutter-large;

        &.delegation {
          font-size: $gutter;
        }
      }

      .copy {
        @include button(lighten($brand-black, 90), $brand-black);
        font-weight: 700;
        display: block;
        margin-bottom: $gutter-large;
      }

      .block-explorer {
        @include button($brand-primary, $brand-white);
        display: block;
      }
    }

    .twins-section--end {
      text-align: center;

      .title {
        font-size: rem(40px);
        font-weight: 800;
        line-height: 1.3;
      }
    }
  }

  .why-chain-secrets {
    margin-bottom: $gutter-xxlarge;
    text-align: center;
    display: grid;

    .single-column {
      grid-row-gap: $gutter-large;
    }

    .title {
      font-size: rem(50px);
      font-weight: 700;
      line-height: 1.3;
    }

    .triplets {
      .triplets-section {
        .feature-card {
          box-shadow: 0 0 10px #ddd;

          &.feature-reliability {
            background: $brand-primary;
            color: $brand-white;

            .feature {
              color: $brand-white;
            }

            .message {
              color: $brand-white;
            }
          }

          .feature {
            font-weight: 800;
          }

          .message {
            color: $brand-secondary;
          }
        }
      }
    }
  }

  .about {
    margin-bottom: $gutter-xxlarge;

    .title {
      font-size: rem(50px);
      font-weight: 700;
      line-height: 1.3;
    }
  }

  .validator {
    margin-bottom: $gutter-xxlarge;
    text-align: center;

    .title {
      font-size: rem(50px);
      font-weight: 700;
      line-height: 1.3;
    }
  }
}

</style>
