import DefaultLayout from '~/layouts/DefaultLayout';

// components
import AnchorLink from '@lkmx/flare/src/components/utils/anchor-link/AnchorLink';
import SimpleHeader from '@lkmx/flare/src/components/headers/simple-header/SimpleHeader';
import SimpleFooter from '@lkmx/flare/src/components/footers/simple-footer/SimpleFooter';
import SimpleNavItem from '@lkmx/flare/src/components/navigation/simple-navigation/SimpleNavItem';
import SimpleHero from '@lkmx/flare/src/components/heroes/simple-hero/SimpleHero';
import TextBanner from '@lkmx/flare/src/components/blocks/text-banner/TextBanner';

import FeatureCard from '~/components/FeatureCard';



// structures
import NoColumn from '@lkmx/flare/src/structures/columns/no-column/NoColumn';
import SingleColumn from '@lkmx/flare/src/structures/columns/single-column/SingleColumn';
import TwinColumns from '@lkmx/flare/src/structures/columns/twin-columns/TwinColumns';
import TripletColumn from '@lkmx/flare/src/structures/columns/triplet-columns/TripletColumn';
import SlimColumn from '@lkmx/flare/src/structures/columns/slim-column/SlimColumn';
import BasePage from '@lkmx/flare/src/structures/pages/base-page/BasePage';
// import BaseGrid from '@lkmx/flare/src/structures/grids/base-grid/BaseGrid';

import '@/sass/styles.scss'

require('typeface-inter')

export default function (Vue, {router, head, isClient}) {

  Vue.component('DefaultLayout', DefaultLayout);
  Vue.component('FeatureCard', FeatureCard);
  Vue.component('BasePage', BasePage);

  Vue.component('AnchorLink', AnchorLink);
  Vue.component('SimpleHeader', SimpleHeader);
  Vue.component('SimpleFooter', SimpleFooter);
  Vue.component('SimpleNavItem', SimpleNavItem);
  Vue.component('SimpleHero', SimpleHero);
  Vue.component('TextBanner', TextBanner);

  Vue.component('NoColumn', NoColumn);
  Vue.component('SingleColumn', SingleColumn);
  Vue.component('SlimColumn', SlimColumn);
  Vue.component('TwinColumns', TwinColumns);
  Vue.component('TripletColumn', TripletColumn);
  // Vue.component('BaseGrid', BaseGrid);
}