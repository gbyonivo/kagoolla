import './index.scss';
import { store } from './data';
import { createBeersGrid } from './js/grid';
import { createBeersAccordion } from './js/accordion';
import { createBeersCarousel } from './js/carousel';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const settings2 = {
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: 'linear'
};

store.init([
  createBeersAccordion,
  () => createBeersCarousel(settings, 'carouselWrapper1'),
  () => createBeersCarousel(settings2, 'carouselWrapper2'),
  createBeersGrid
]);
