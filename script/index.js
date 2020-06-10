// Polyfills, that helps solve cross-browser compatibility for IE11 agent
// import 'url-polyfill';
// import "regenerator-runtime/runtime";
// import 'element-remove';
// import "@babel/polyfill";
// import 'formdata-polyfill';
// import elementClosest from 'element-closest';
// import 'es6-promise';
// import 'element-closest/browser';
// import 'whatwg-fetch';
// import "scroll-behavior-polyfill";
// import smoothscroll from 'smoothscroll-polyfill';
// import 'element-remove';
// elementClosest(window);
// smoothscroll.polyfill();
// import 'mdn-polyfills/Node.prototype.append';

// Import list of Modules
import headerPhoneSwitcher from './modules/headerPhoneSwitcher';
import mainNav from './modules/mainNav';
import smoothScroll from './modules/smoothScroll';
import expandList from './modules/expandList';
import regExpPhoneMask from './modules/regExpPhoneMask';
import eulaModal from './modules/eulaModal';
import problems from './modules/hintPopup';
import repairModal from './modules/repairModal';
import repairModalContent from './modules/repairModalContent';
import portfolioSlider from './modules/portfolioSlider';
import sliderModal from './modules/sliderModal';
import documentsModule from './modules/documentsModule';
import DocumentsSlider from './modules/documentsPreviewModal';
import issuesBlock from './modules/issuesBlock';
import tabSlider from './modules/tabSlider';
import sliderTabSwitcher from './modules/sliderTabSwitcher';
import advicesBlock from './modules/advicesBlock';
import testimonialsBlock from './modules/testimonialsBlock';
import howWeWork from './modules/howWeWork';
import accordion from './modules/faqBlock';
import ourPartners from './modules/ourPartners';
import uploadServicesData from './modules/uploadServicesData';
import formParsing from './modules/ajaxRequests';
import repairViews from './modules/repairViews';
import formula from './modules/formula';


let windowWidth = window.innerWidth;
window.addEventListener(`resize`, () => {
  windowWidth = window.innerWidth;
  burgerMenu(windowWidth);
  formula(windowWidth);
  problems(windowWidth);
  documentSlider(windowWidth);
  if (windowWidth > 1024) {
    desingBoolet();
  } else {
    desingSliders({
      block: '#designs',
      wrapper: '.designs-slider-wrap',
      nav: '.designs-nav__item',
      wrapperSlide: '.designs-slider',
      arrowLeft: '#design_left',
      arrowRight: '#design_right',
      sliderCountCurrent: '.slider-counter-content__current',
      sliderCountTotal: '.slider-counter-content__total',
    });
  }
  desingSliders({
    block: '.popup-design',
    wrapper: '.popup-dialog-design',
    nav: '.designs-nav__item',
    wrapperSlide: '.popup-design-slider',
    arrowLeft: '#popup_design_left',
    arrowRight: '#popup_design_right',
    sliderCountCurrent: '.slider-counter-content__current',
    sliderCountTotal: '.slider-counter-content__total',
    popupText: '.popup-design-text',
    popupTextActiveClass: 'visible-content-block',
    dispFlex: '.popup-design-slider-wrap',

  });
});


// Header Phone Switcher — Phone list
headerPhoneSwitcher();
// Main Navigation
mainNav();
// Smooth Scroll
smoothScroll();
// Overview all available list
expandList();
// Regular Expression Mask of phone number - recall block
regExpPhoneMask();
//  End User License Agreement (EULA) - Modal Window
eulaModal();
// Tooltip popup
problems(windowWidth);
// Type of Repairs block
repairModal();
repairModalContent();
// Portfolio block slider
portfolioSlider();
// Modal Window block slider
sliderModal();
// Documents Block
documentsModule();
const docsModal = new DocumentsSlider();
docsModal.start();
// Blocks with issues
issuesBlock();
// Tabs with slider block
tabSlider();
// Slider with switching tabs
sliderTabSwitcher();
// Get advices / consultations
advicesBlock();
// Testimonials Block
testimonialsBlock();
// How we work block
howWeWork();
// FAQ - Accordion block
accordion();
// Our Partners block
const ourPartnersBlock = new ourPartners();
ourPartnersBlock.start();
// Upload Services and Prices Data
uploadServicesData();
// Send Form through AJAX
formParsing();
//Repair views
const sliderRepair = new repairViews();
sliderRepair.start();
//Formula
formula(windowWidth);