<template>
  <default-layout>
    <base-page>
      <!-- TwinColumns -->
      <section class="intro">
        <twin-columns>
          <template v-slot:left class="total-stake">
            <h1 class="title">Stake Your <span>Tokens with</span> Chain of Secrets</h1>
            <p class="description">Join us to earn rewards on your staked SCRT and help secure the Enigma Blockchain
              while reducing your risk of slashing with our enterprise infrastrcture.</p>
            <g-link to="/delegate" class="delegate">Delegate With Us</g-link>
          </template>
          <template v-slot:right class="supported-blockchains">
            <g-image src="~/assets/images/cos.png"></g-image>
          </template>
        </twin-columns>
      </section>

      <!-- TripletColumns -->
      <section class="why-chain-secrets">
        <single-column>
          <h1 class="title">Why chain of secrets?</h1>
          <p class="description">These are the core Chain of Secrets' values that we bring to each project we embark on
            within the Enigma community.</p>
          <triplet-column>
            <template v-slot:left>
              <feature-card>
                <h2 class="feature">Reliability</h2>
                <g-image src="~/assets/images/icon-1.png" alt="Reliability"></g-image>
                <p class="message">Our infrastructure is housed in highly-secure datacenters around the world. We are
                  constantly building redundancy into our infrastructure to ensure perpetual node coverage and network
                  uptime.</p>
              </feature-card>
            </template>
            <template v-slot:middle>
              <feature-card class="feature-reliability">
                <h2 class="feature">Engagement</h2>
                <g-image src="~/assets/images/icon-2.png" alt="Engagement"></g-image>
                <p class="message">Our mission as a privacy validator is to build engagement on the Engima Blockchain
                  with
                  exciting new tools, applications & services.</p>
              </feature-card>
            </template>
            <template v-slot:right>
              <feature-card>
                <h2 class="feature">Trust</h2>
                <g-image src="~/assets/images/icon-3.png" alt="Trust"></g-image>
                <p class="message">We believe in building decentralization and are committed to provide our projects to
                  the Enigma community in an open-source manner.</p>
              </feature-card>
            </template>
          </triplet-column>
        </single-column>
      </section>
      <!-- TwinColumns  -->
      <section class="about">
        <twin-columns>
          <template v-slot:left>
            <h1 class="title">About</h1>
            <p class="description">Chain of Secrets is a Privacy Validator for the Enigma network. We offer delegation
              services to individuals and business investors looking to maximize their ROI and see the benefit of a
              privacy layer for the Internet of Blockchains. We actively participate in the development and governance
              of the Enigma Blockchain ecosystem.</p>
            <p>We are a team of technologists with backgrounds in security, networking, blockchain infrastructure, token
              economics, and decentralized finance.</p>
          </template>
          <template v-slot:right>
            <g-image src="~/assets/images/data-center.png"></g-image>
          </template>
        </twin-columns>
      </section>
      <!-- Validator -->
      <section class="validator">
        <slim-column>
          <h1 class="title">Our Validator Infrastructure</h1>
          <g-image src="~/assets/images/des-img.png" alt="Validator Infrastructure"></g-image>
        </slim-column>
      </section>
    </base-page>
  </default-layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Flare Starter'
  }
}
</script>

<style lang="scss">
body {
  .intro {
    margin-bottom: $gutter-xxlarge;
    background-image: url("../assets/images/head-sheap5.png");
    background-size: cover;
    background-position: center;

    .twin-columns .twins-column--start {
      align-self: center;
    }

    .twins-section--start {
      .title {
        font-size: rem(50px);
        font-weight: 900;
        line-height: 1.3;

        span {
          display: block;
        }
      }

      .description {
        margin-bottom: $gutter-large;
      }

      .delegate {
        @include button($brand-primary, $brand-white);
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
