/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./script/index.js":
/*!*************************!*\
  !*** ./script/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_headerPhoneSwitcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerPhoneSwitcher */ "./script/modules/headerPhoneSwitcher.js");
/* harmony import */ var _modules_mainNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mainNav */ "./script/modules/mainNav.js");
/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smoothScroll */ "./script/modules/smoothScroll.js");
/* harmony import */ var _modules_expandList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/expandList */ "./script/modules/expandList.js");
/* harmony import */ var _modules_regExpPhoneMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/regExpPhoneMask */ "./script/modules/regExpPhoneMask.js");
/* harmony import */ var _modules_eulaModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/eulaModal */ "./script/modules/eulaModal.js");
/* harmony import */ var _modules_hintPopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/hintPopup */ "./script/modules/hintPopup.js");
/* harmony import */ var _modules_repairModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/repairModal */ "./script/modules/repairModal.js");
/* harmony import */ var _modules_repairModalContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/repairModalContent */ "./script/modules/repairModalContent.js");
/* harmony import */ var _modules_portfolioSlider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/portfolioSlider */ "./script/modules/portfolioSlider.js");
/* harmony import */ var _modules_sliderModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/sliderModal */ "./script/modules/sliderModal.js");
/* harmony import */ var _modules_documentsModule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/documentsModule */ "./script/modules/documentsModule.js");
/* harmony import */ var _modules_documentsPreviewModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/documentsPreviewModal */ "./script/modules/documentsPreviewModal.js");
/* harmony import */ var _modules_issuesBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/issuesBlock */ "./script/modules/issuesBlock.js");
/* harmony import */ var _modules_tabSlider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/tabSlider */ "./script/modules/tabSlider.js");
/* harmony import */ var _modules_sliderTabSwitcher__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/sliderTabSwitcher */ "./script/modules/sliderTabSwitcher.js");
/* harmony import */ var _modules_advicesBlock__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/advicesBlock */ "./script/modules/advicesBlock.js");
/* harmony import */ var _modules_testimonialsBlock__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/testimonialsBlock */ "./script/modules/testimonialsBlock.js");
/* harmony import */ var _modules_howWeWork__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/howWeWork */ "./script/modules/howWeWork.js");
/* harmony import */ var _modules_faqBlock__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/faqBlock */ "./script/modules/faqBlock.js");
/* harmony import */ var _modules_ourPartners__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/ourPartners */ "./script/modules/ourPartners.js");
/* harmony import */ var _modules_uploadServicesData__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/uploadServicesData */ "./script/modules/uploadServicesData.js");
/* harmony import */ var _modules_ajaxRequests__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/ajaxRequests */ "./script/modules/ajaxRequests.js");
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






















 // Header Phone Switcher — Phone list

Object(_modules_headerPhoneSwitcher__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Main Navigation

Object(_modules_mainNav__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Smooth Scroll

Object(_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__["default"])(); // Overview all available list

Object(_modules_expandList__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Regular Expression Mask of phone number - recall block

Object(_modules_regExpPhoneMask__WEBPACK_IMPORTED_MODULE_4__["default"])(); //  End User License Agreement (EULA) - Modal Window

Object(_modules_eulaModal__WEBPACK_IMPORTED_MODULE_5__["default"])(); // Tooltip popup

Object(_modules_hintPopup__WEBPACK_IMPORTED_MODULE_6__["default"])(); // Type of Repairs block

Object(_modules_repairModal__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_modules_repairModalContent__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Portfolio block slider

Object(_modules_portfolioSlider__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Modal Window block slider

Object(_modules_sliderModal__WEBPACK_IMPORTED_MODULE_10__["default"])(); // Documents Block

Object(_modules_documentsModule__WEBPACK_IMPORTED_MODULE_11__["default"])();
const docsModal = new _modules_documentsPreviewModal__WEBPACK_IMPORTED_MODULE_12__["default"]();
docsModal.start(); // Blocks with issues

Object(_modules_issuesBlock__WEBPACK_IMPORTED_MODULE_13__["default"])(); // Tabs with slider block

Object(_modules_tabSlider__WEBPACK_IMPORTED_MODULE_14__["default"])(); // Slider with switching tabs

Object(_modules_sliderTabSwitcher__WEBPACK_IMPORTED_MODULE_15__["default"])(); // Get advices / consultations

Object(_modules_advicesBlock__WEBPACK_IMPORTED_MODULE_16__["default"])(); // Testimonials Block

Object(_modules_testimonialsBlock__WEBPACK_IMPORTED_MODULE_17__["default"])(); // How we work block

Object(_modules_howWeWork__WEBPACK_IMPORTED_MODULE_18__["default"])(); // FAQ - Accordion block

Object(_modules_faqBlock__WEBPACK_IMPORTED_MODULE_19__["default"])(); // Our Partners block

const ourPartnersBlock = new _modules_ourPartners__WEBPACK_IMPORTED_MODULE_20__["default"]();
ourPartnersBlock.start(); // Upload Services and Prices Data

Object(_modules_uploadServicesData__WEBPACK_IMPORTED_MODULE_21__["default"])(); // Send Form through AJAX

Object(_modules_ajaxRequests__WEBPACK_IMPORTED_MODULE_22__["default"])();

/***/ }),

/***/ "./script/modules/advicesBlock.js":
/*!****************************************!*\
  !*** ./script/modules/advicesBlock.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const advicesBlock = () => {
  const cta = document.querySelectorAll('.button_wide'),
        modal = document.querySelector('.popup-consultation'),
        close = modal.querySelector('.close-consultation'),
        hidden = () => {
    modal.style.cssText = "visibility: hidden;";
    document.body.style.cssText = `overflow: auto; height: auto;`;
  },
        visible = () => {
    document.body.style.cssText = `overflow: hidden; height: 100%;`;
    modal.style.cssText = "visibility: visible;";
  };

  cta.forEach(element => element.addEventListener(`click`, () => visible()));
  close.addEventListener(`click`, () => hidden());
  modal.addEventListener(`click`, event => {
    if (event.target.classList.contains('popup-consultation')) {
      hidden();
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (advicesBlock);

/***/ }),

/***/ "./script/modules/ajaxRequests.js":
/*!****************************************!*\
  !*** ./script/modules/ajaxRequests.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkboxes = document.querySelectorAll('.checkbox__input');
checkboxes.forEach(element => element.removeAttribute("required"));

const styles = color => {
  const style = document.createElement('style');
  style.id = 'form-send-request-styles';
  style.type = 'text/css';
  style.textContent = `
    /* Form render request data styles */
    .preloader{
      width: 100%;
      text-align: center;
      color: ${color};
      margin: 5px 0;
    }
  `;
  document.head.appendChild(style);
};

const successPopup = () => {
  const modal = document.querySelector('.popup-thank');
  modal.style.cssText = `visibility: visible;`;
  modal.addEventListener(`click`, e => {
    if (e.target.classList.contains('close-thank')) {
      modal.style.cssText = 'visibility: hidden;';
    } else if (e.target.classList.contains('popup-thank')) {
      modal.style.cssText = 'visibility: hidden;';
    }
  });
};

const form = () => {
  const forms = document.querySelectorAll('form');
  let loaderHtml = '';

  const addStatus = (form, status, color = 'red') => {
    styles(color);
    const preloader = `<div class="preloader">${status}</div>`;

    if (document.querySelector('.preloader')) {
      return;
    }

    form.insertAdjacentHTML(`afterbegin`, preloader);
    loaderHtml = document.querySelector('.preloader');
    setTimeout(() => {
      loaderHtml.remove();
    }, 5000);
  };

  forms.forEach(form => {
    const postData = data => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data,
        mode: 'cors'
      });
    };

    form.addEventListener('submit', event => {
      event.preventDefault();
      console.log([...event.target.elements]);
      const checkbox = [...event.target.elements].filter(item => item.type === 'checkbox');

      if (!checkbox[0].checked) {
        addStatus(form, 'Согласитесь на обработку данных');
        return;
      }

      const formTel = [...event.target.elements].filter(item => item.name === 'phone');

      if (phoneValidation(formTel)) {
        addStatus(form, 'Неверный номер телефона');
        return;
      }

      const formData = new FormData(form); // let body = {};
      // for (let val of formData.entries()) {
      //   body[val[0]] = val[1];
      // }

      const outputData = () => {
        successPopup();
        addStatus(form, 'Спасибо, мы получили ваш запрос!', 'green');
        form.reset();
      };

      const error = () => {
        addStatus(form, 'Ошибка запроса', 'red');
        form.reset();
      };

      postData(formData).then(response => {
        if (response.status !== 200) {
          throw 'error !!! ';
        }

        outputData();
      }).catch(error);
    });
  });

  const phoneValidation = tel => {
    let str = tel[0].value.length;

    if (str === 18) {
      return false;
    } else {
      return true;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./script/modules/documentsModule.js":
/*!*******************************************!*\
  !*** ./script/modules/documentsModule.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const documentsModule = () => {
  let windowWidth = window.innerWidth;
  const transparency = document.querySelector('#transparency');
  const transparencyItem = transparency.querySelectorAll('.transparency-item');
  const transparencyItemCount = transparencyItem.length;
  const arrowRight = transparency.querySelector('#transparency-arrow_right');
  const arrowLeft = transparency.querySelector('#transparency-arrow_left');
  let sliderCount = 0;

  const resize = () => {
    if (windowWidth <= 1090) {
      transparencyItem.forEach(el => {
        el.style.display = 'none';
      });
      transparencyItem[sliderCount].style.display = 'flex';
    } else {
      transparencyItem.forEach(el => {
        el.style.display = 'flex';
      });
    }
  };

  resize();

  const render = () => {
    transparencyItem.forEach(el => {
      el.style.display = 'none';
    });
    transparencyItem[sliderCount].style.display = 'flex';
  };

  arrowRight.addEventListener(`click`, evt => {
    ++sliderCount;

    if (transparencyItemCount <= sliderCount) {
      sliderCount = 0;
    }

    render();
  });
  arrowLeft.addEventListener(`click`, evt => {
    --sliderCount;

    if (sliderCount < 0) {
      sliderCount = transparencyItemCount - 1;
    }

    render();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (documentsModule);

/***/ }),

/***/ "./script/modules/documentsPreviewModal.js":
/*!*************************************************!*\
  !*** ./script/modules/documentsPreviewModal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class DocumentsSlider {
  constructor() {
    this.slideWrapper = document.querySelector('#transparency');
    this.slideWrapperSlide = this.slideWrapper.querySelectorAll('.transparency-item .transparency-item__img');
    this.popupTransparency = document.querySelector('.popup-transparency');
    this.popupTransparencyClose = this.popupTransparency.querySelector('.close');
    this.slideWrapperBig = this.popupTransparency.querySelectorAll('.popup-transparency-slider__slide');
    this.arrowRight = this.popupTransparency.querySelector('#transparency_right');
    this.arrowLeft = this.popupTransparency.querySelector('#transparency_left');
    this.slideActive = 0;
    this.slideAfterAll = 0;
    this.slideAfterActive = 1;
    this.sliderCurrent = this.popupTransparency.querySelector('.slider-counter-content__current');
    this.sliderTotal = this.popupTransparency.querySelector('.slider-counter-content__total');
    this.sliderCurrent.textContent = this.slideAfterActive;
    this.sliderTotal.textContent = this.slideAfterAll;
    this.slideChildren = this.slideWrapperBig[this.slideActive].querySelectorAll('img');
  }

  start() {
    this.eventListener();
  }

  eventListener() {
    this.slideWrapperSlide.forEach((el, i) => {
      el.addEventListener('click', e => {
        this.popupTransparency.style.visibility = 'visible';
        this.slideActive = i;
        console.log(e.target);

        if (e.target.classList.contains('popup-transparency')) {
          this.popupTransparency.style.visibility = 'hidden';
        }

        this.render();
      });
    });
    this.popupTransparencyClose.addEventListener('click', e => {
      this.popupTransparency.style.visibility = 'hidden';
      this.slideActive = 0;
      this.slideAfterAll = 0;
      this.slideAfterActive = 1;
    });
    this.arrowRight.addEventListener('click', () => {
      ++this.slideAfterActive;

      if (this.slideAfterActive > this.slideAfterAll) {
        this.slideAfterActive = 1;
      }

      this.renderChildren();
    });
    this.arrowLeft.addEventListener('click', () => {
      --this.slideAfterActive;

      if (this.slideAfterActive <= 0) {
        this.slideAfterActive = this.slideAfterAll;
      }

      this.renderChildren();
    });
  }

  renderChildren() {
    this.slideChildren.forEach(el => {
      el.style.display = 'none';
    });
    this.slideChildren[this.slideAfterActive - 1].style.display = 'block';
    this.sliderCurrent.textContent = this.slideAfterActive;
  }

  render() {
    this.slideWrapperBig.forEach(el => {
      el.style.display = 'none';
    });
    this.slideWrapperBig[this.slideActive].style.display = 'flex';
    this.slideAfterAll = this.slideWrapperBig[this.slideActive].children.length;
    this.sliderTotal.textContent = this.slideAfterAll;
    this.slideChildren = this.slideWrapperBig[this.slideActive].querySelectorAll('img');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DocumentsSlider);

/***/ }),

/***/ "./script/modules/eulaModal.js":
/*!*************************************!*\
  !*** ./script/modules/eulaModal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const eulaModal = () => {
  const open = document.querySelectorAll('.link-privacy'),
        outOfModal = document.querySelector('.popup-privacy'),
        close = outOfModal.querySelector('.mobile-hide');
  open.forEach(element => {
    element.addEventListener(`click`, () => {
      outOfModal.style = "visibility: visible;";
      document.body.style.cssText = `overflow: hidden; height: 100%;`;
    });
  });
  outOfModal.addEventListener(`click`, evt => {
    if (evt.target.classList.contains('popup-privacy')) {
      outOfModal.style = "visibility: hidden;";
      document.body.style.cssText = `overflow: auto; height: auto;`;
    }
  });
  close.addEventListener(`click`, () => {
    outOfModal.style = "visibility: hidden;";
    document.body.style.cssText = `overflow: auto; height: auto;`;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (eulaModal);

/***/ }),

/***/ "./script/modules/expandList.js":
/*!**************************************!*\
  !*** ./script/modules/expandList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const expandList = () => console.log('imported > 05 Expandable list module');

/* harmony default export */ __webpack_exports__["default"] = (expandList);

/***/ }),

/***/ "./script/modules/faqBlock.js":
/*!************************************!*\
  !*** ./script/modules/faqBlock.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const faqBlock = () => {
//   let li = document.querySelectorAll('.accordion .title_block');
//   document.querySelector('.accordion ul').addEventListener(`click`, e => {
//     li.forEach(item => item == e.target ? item.classList.toggle('msg-active') : item.classList.remove('msg-active'));
//   });
// }; 
// export default faqBlock;
const styles = () => {
  const style = document.createElement('style');
  style.id = 'accordion-styles';
  style.type = 'text/css';
  style.textContent = `
    /* FAQ block - Accordion styles */
    .title_block::after{
      content: '+';
      float: right;
    }
    .title_block.msg-active::after{
      content: '–';
    }
    .msg{
      max-height: 0;
      transition: max-height 0.1s ease-in-out !important;
    }
    .msg-active{
      color: #fff !important; 
      background: linear-gradient(90deg, #f48922 0, #ffb015 100%) !important;
    }
  `;
  document.head.appendChild(style);
};

const accordion = () => {
  styles();
  const accordions = document.querySelectorAll('.accordion .title_block'),
        messages = document.querySelectorAll('.msg'); // Remove ative element from current list

  accordions.forEach(item => item.classList.remove('msg-active'));
  accordions.forEach(element => {
    element.addEventListener('click', e => {
      e.preventDefault();
      const nextElement = e.target.nextElementSibling;

      if (nextElement.style.maxHeight) {
        nextElement.style.maxHeight = null;
        e.target.classList.remove('msg-active');
      } else {
        nextElement.style.maxHeight = nextElement.scrollHeight + 'px';
        e.target.classList.add('msg-active');
      }

      messages.forEach(item => {
        if (item !== nextElement) {
          item.style.maxHeight = null;
        }
      });
      accordions.forEach(item => {
        if (item !== e.target) {
          item.classList.remove('msg-active');
        }
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./script/modules/headerPhoneSwitcher.js":
/*!***********************************************!*\
  !*** ./script/modules/headerPhoneSwitcher.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = () => {
  const style = document.createElement('style');
  style.id = 'header-phone-switcher-styles';
  style.type = 'text/css';
  style.textContent = `
    /* Header phone toggle switcher */
    .hidden-phone {top: 25px;}
    .hidden-phone a {opacity: 1;}
  `;
  document.head.appendChild(style);
};

const headerPhoneSwitcher = () => {
  styles();
  const click = document.querySelector('.header-contacts__arrow'),
        expand = document.querySelector('.header-contacts__phone-number-accord');
  click.addEventListener('click', () => expand.classList.toggle('hidden-phone'));
};

/* harmony default export */ __webpack_exports__["default"] = (headerPhoneSwitcher);

/***/ }),

/***/ "./script/modules/hintPopup.js":
/*!*************************************!*\
  !*** ./script/modules/hintPopup.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hintPopup = () => console.log('imported > 08 Hint popup module');

/* harmony default export */ __webpack_exports__["default"] = (hintPopup);

/***/ }),

/***/ "./script/modules/howWeWork.js":
/*!*************************************!*\
  !*** ./script/modules/howWeWork.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const howWeWork = () => {
  const scheme = document.querySelector('#scheme'),
        schemeSlide = scheme.querySelectorAll('.scheme-nav__item'),
        schemeImage = scheme.querySelectorAll('.scheme-slider__slide.fade-tab'),
        schemeDescription = scheme.querySelectorAll('.scheme-description-block');
  let activeTab = 0;
  schemeSlide.forEach((element, i) => {
    element.classList.remove('active');
    element.addEventListener('click', () => {
      activeTab = i;
      tabs();
      element.classList.add('active');
    });
  });

  const tabs = () => {
    schemeSlide.forEach(element => {
      element.classList.remove('active');
    });
    schemeImage.forEach(element => {
      element.style.display = 'none';
    });
    schemeDescription.forEach(element => {
      element.classList.remove('visible-content-block');
    });
    schemeSlide[activeTab].classList.add('active');
    schemeImage[activeTab].style.display = 'flex';
    schemeDescription[activeTab].classList.add('visible-content-block');
  };

  tabs();
};

/* harmony default export */ __webpack_exports__["default"] = (howWeWork);

/***/ }),

/***/ "./script/modules/issuesBlock.js":
/*!***************************************!*\
  !*** ./script/modules/issuesBlock.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const issuesBlock = () => console.log('imported > 14 Block with issues module');

/* harmony default export */ __webpack_exports__["default"] = (issuesBlock);

/***/ }),

/***/ "./script/modules/mainNav.js":
/*!***********************************!*\
  !*** ./script/modules/mainNav.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = () => {
  const style = document.createElement('style');
  style.id = 'accordion-styles';
  style.type = 'text/css';
  style.textContent = `
    /* Main navigation */
    .selected {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  `;
  document.head.appendChild(style);
};

const mainNav = () => {
  styles();
  const open = document.querySelector('.menu'),
        modal = document.querySelector('.popup-dialog-menu'),
        wrapper = document.querySelector('.popup-menu');
  open.addEventListener('click', () => modal.classList.toggle('selected'));
  modal.addEventListener('click', e => {
    if (e.target.classList.contains('close-menu')) {
      modal.classList.toggle('selected');
    } else if (e.target.closest('.popup-dialog-menu')) {
      modal.classList.toggle('selected');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mainNav); // .visible {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex; }
//   .visible-content {
//     display: block; }
//     @media (max-width: 1024px) and (min-width: 576px) {
//       .visible-content {
//         display: -webkit-box;
//         display: -ms-flexbox;
//         display: flex;
//         -webkit-box-orient: horizontal;
//         -webkit-box-direction: normal;
//         -ms-flex-direction: row;
//         flex-direction: row;
//         -ms-flex-pack: distribute;
//         justify-content: space-around; } }
//     .visible-content-block {
//       display: block; }

/***/ }),

/***/ "./script/modules/ourPartners.js":
/*!***************************************!*\
  !*** ./script/modules/ourPartners.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ourPartners {
  constructor(param) {
    this.id = document.querySelector('#partners');
    this.container = this.id.querySelector('.partners-slider');
    this.slides = this.id.querySelectorAll('.partners-slider__slide');
    this.arrowLeft = this.id.querySelector('#partners-arrow_left');
    this.arrowRight = this.id.querySelector('#partners-arrow_right');
    this.slideActive = 0;
    this.slidesCountAll = this.slides.length;
    this.slideWidth = this.slides[0].offsetWidth;
    this.resizeWidth = window.innerWidth;
    this.countPageSlide = '';
  }

  start() {
    this.resize();
    this.addStyle();
    this.evenrListener();
    this.slideWidth = this.slides[0].offsetWidth;
  }

  evenrListener() {
    this.arrowRight.addEventListener(`click`, () => {
      ++this.slideActive;

      if (this.slideActive > this.slidesCountAll - this.countPageSlide) {
        this.slideActive = 0;
      }

      this.render();
    });
    this.arrowLeft.addEventListener(`click`, () => {
      --this.slideActive;

      if (this.slideActive < 0) {
        this.slideActive = this.slidesCountAll - this.countPageSlide;
      }

      this.render();
    });
  }

  resize() {
    this.resizeWidth = window.innerWidth;

    if (this.resizeWidth > 575) {
      this.countPageSlide = 3;
    } else {
      this.countPageSlide = 1;
    }

    this.addStyle();
    window.addEventListener(`resize`, () => {
      this.resizeWidth = window.innerWidth;

      if (this.resizeWidth > 575) {
        this.countPageSlide = 3;
      } else {
        this.countPageSlide = 1;
      }

      this.addStyle();
    });
  }

  render() {
    this.container.style.cssText = `
      transform: translateX(-${this.slideActive * this.slideWidth}px);
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
    `;
  }

  addStyle() {
    this.id.querySelector('.wrapper').style.overflow = 'hidden';
    this.container.style.cssText = `
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    `;
    this.slides.forEach(el => {
      el.style.cssText = `
      min-width: ${100 / this.countPageSlide}%;
      `;
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ourPartners);

/***/ }),

/***/ "./script/modules/portfolioSlider.js":
/*!*******************************************!*\
  !*** ./script/modules/portfolioSlider.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const portfolioSlider = () => console.log('imported > 10 Portfolio block slider module');

/* harmony default export */ __webpack_exports__["default"] = (portfolioSlider);

/***/ }),

/***/ "./script/modules/regExpPhoneMask.js":
/*!*******************************************!*\
  !*** ./script/modules/regExpPhoneMask.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const regExpPhoneMask = () => {
  const input = document.querySelectorAll('input[name="phone"]');
  input.forEach(element => {
    element.setAttribute('placeholder', '+7 (___) ___-__-__');
    element.addEventListener('input', evt => {
      const keyCode = evt.keyCode;
      const template = '+7 (___) ___-__-__';
      const def = template.replace(/\D/g, "");
      const val = element.value.replace(/\D/g, "");
      let i = 0;
      let newValue = template.replace(/[_\d]/g, a => i < val.length ? val.charAt(i++) || def.charAt(i) : a);
      i = newValue.indexOf("_");

      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }

      let reg = template.substr(0, element.value.length).replace(/_+/g, a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");

      if (!reg.test(element.value) || element.value.length < 5 || keyCode > 47 && keyCode < 58) {
        element.value = newValue;
      }

      if (event.type === "blur" && element.value.length < 5) {
        element.value = "";
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (regExpPhoneMask);

/***/ }),

/***/ "./script/modules/repairModal.js":
/*!***************************************!*\
  !*** ./script/modules/repairModal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const repairModal = () => {
  const cta = document.querySelectorAll('.link-list'),
        modal = document.querySelector(`.popup-repair-types`),
        close = modal.querySelectorAll(`.close`),
        hidden = () => {
    modal.style.cssText = "visibility: hidden;";
    document.body.style.cssText = `overflow: auto; height: auto;`;
  },
        visible = () => {
    // document.querySelector('.popup-menu').style.cssText = 'transform: translateX(645px);';
    document.body.style.cssText = `overflow: hidden; height: 100%;`;
    modal.style.cssText = "visibility: visible;";
  };

  cta.forEach(element => {
    if (!element.matches('a')) {
      element.addEventListener(`click`, () => visible());
    }
  });
  modal.addEventListener(`click`, event => {
    if (event.target.classList.contains('popup-repair-types')) {
      hidden();
    }
  });
  close.forEach(element => element.addEventListener(`click`, () => hidden()));
};

/* harmony default export */ __webpack_exports__["default"] = (repairModal);

/***/ }),

/***/ "./script/modules/repairModalContent.js":
/*!**********************************************!*\
  !*** ./script/modules/repairModalContent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const repairModalContent = () => {
  console.log('Repair Modal Content');
};

/* harmony default export */ __webpack_exports__["default"] = (repairModalContent); // class repairModalContent {
//   constructor() {
//     this.repairTypes = document.querySelector('#repair-types');
//     this.repairItems = this.repairTypes.querySelectorAll('.repair-types-nav__item');
//     this.repairSlideCollection = this.repairTypes.querySelector('.repair-types-slider').children;
//     this.repairSlide = Array.from(this.repairSlideCollection);
//     this.sliderCounterContentTotal = this.repairTypes.querySelector('.slider-counter-content__total');
//     this.sliderCounterContentCurrent = this.repairTypes.querySelector('.slider-counter-content__current');
//     this.arrowLeft = this.repairTypes.querySelector('#repair-types-arrow_left');
//     this.arrowRight = this.repairTypes.querySelector('#repair-types-arrow_right');
//     this.slideHeight = this.repairSlide[1].querySelector('img').height;
//     this.navArrowLeft = this.repairTypes.querySelector('#nav-arrow-repair-left_base');
//     this.navArrowRight = this.repairTypes.querySelector('#nav-arrow-repair-right_base');
//     this.navListRepair = this.repairTypes.querySelector('.nav-list-repair');
//     this.repairWidth = this.repairTypes.querySelector('.repair-types-nav').offsetWidth;
//     this.navListRepairWidth = (this.navListRepair.offsetWidth - this.repairWidth) / this.navListRepair.children.length;
//     this.base = 0;
//     this.sliderCount = 0;
//     this.slide = 0;
//   }
//   start() {
//     this.eventListener();
//     this.eventListenerSlides();
//     this.eventListenerBase();
//     this.sliderCounterContentTotal.textContent = this.repairSlide[0].children.length;
//     this.sliderCounterContentCurrent.textContent = this.slide + 1;
//   }
//   eventListenerBase() {
//     this.navArrowRight.addEventListener(`click`, () =>{    
//       if (this.base >= this.navListRepair.children.length) return;
//       ++this.base;
//       this.navListRepairWidth = (this.navListRepair.offsetWidth - this.repairWidth) / this.navListRepair.children.length;
//       this.navListRepair.style.transform = `translateX(-${this.navListRepairWidth * this.base}px)`;
//     });
//     this.navArrowLeft.addEventListener(`click`, () =>{
//       if (this.base <= 0) return;
//       --this.base;
//       this.navListRepairWidth = (this.navListRepair.offsetWidth - this.repairWidth) / this.navListRepair.children.length;
//       this.navListRepair.style.transform = `translateX(-${this.navListRepairWidth * this.base}px)`;
//     });
//   }
//   eventListenerSlides() {
//     this.arrowRight.addEventListener(`click`, () =>{
//       ++this.slide;
//       if (this.slide >= this.repairSlide[this.sliderCount].children.length) {
//         this.slide = 0;
//       }
//       this.sliderCounterContentCurrent.textContent = this.slide + 1;
//       this.repairSlide[this.sliderCount].style.transform = `translateY(-${this.slideHeight * this.slide}px)`;
//     });
//     this.arrowLeft.addEventListener(`click`, () =>{
//       --this.slide;
//       if (this.slide < 0) {
//         this.slide = this.repairSlide[this.sliderCount].children.length - 1;
//       }
//       this.sliderCounterContentCurrent.textContent = this.slide + 1;
//       this.repairSlide[this.sliderCount].style.transform = `translateY(-${this.slideHeight * this.slide}px)`;
//     });
//   }
//   eventListener() {
//       window.addEventListener(`resize`, () => {
//         this.repairWidth = this.repairTypes.querySelector('.repair-types-nav').offsetWidth;
//         this.navListRepairWidth = (this.navListRepair.offsetWidth - this.repairWidth) / this.navListRepair.children.length;
//         this.navListRepair.style.transform = `translateX(-${0}px)`;
//         this.base = 0;
//       });
//     this.repairItems.forEach((el, i) => {    
//       el.addEventListener(`click`, () =>{
//         this.base = 0;
//         this.sliderCount = 0;
//         this.slide = 0;
//         this.render();
//         el.classList.add('active');
//         this.repairSlide[i].style.display = 'block';
//         this.sliderCount = i;       
//         this.sliderCounterContentTotal.textContent = this.repairSlide[i].children.length;
//       });
//     });
//   }
//   render() {
//     this.repairItems.forEach((el, i) => {
//       el.classList.remove('active');      
//     });
//     this.repairSlide.forEach((el, i) => {
//       this.repairSlide[i].style.display = 'none';
//     });
//   }
// }
// export default repairModalContent;

/***/ }),

/***/ "./script/modules/sliderModal.js":
/*!***************************************!*\
  !*** ./script/modules/sliderModal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliderModal = () => console.log('imported > 11 Modal Window Slider module');

/* harmony default export */ __webpack_exports__["default"] = (sliderModal);

/***/ }),

/***/ "./script/modules/sliderTabSwitcher.js":
/*!*********************************************!*\
  !*** ./script/modules/sliderTabSwitcher.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliderTabSwitcher = () => console.log('imported > 16 Slider with switching tabs module');

/* harmony default export */ __webpack_exports__["default"] = (sliderTabSwitcher);

/***/ }),

/***/ "./script/modules/smoothScroll.js":
/*!****************************************!*\
  !*** ./script/modules/smoothScroll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const smoothScroll = () => {
  const menuList = document.querySelectorAll('.popup-menu-nav__item>a[href*="#"]'),
        moveUp = document.querySelector('.button-footer>a'); // Navigation scroll

  menuList.forEach(element => {
    element.addEventListener('click', event => {
      event.preventDefault();
      const gotId = element.getAttribute('href');
      document.querySelector('' + gotId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }); // Arrow scroll up to the top

  moveUp.addEventListener('click', event => {
    let target = event.target;
    event.preventDefault();
    const gotId = target.getAttribute('href');
    document.querySelector('' + gotId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (smoothScroll);

/***/ }),

/***/ "./script/modules/tabSlider.js":
/*!*************************************!*\
  !*** ./script/modules/tabSlider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tabSlider = () => console.log('imported > 15 Tabs and slider module');

/* harmony default export */ __webpack_exports__["default"] = (tabSlider);

/***/ }),

/***/ "./script/modules/testimonialsBlock.js":
/*!*********************************************!*\
  !*** ./script/modules/testimonialsBlock.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const testimonialsBlock = () => {
  const testimonials = document.querySelector('#reviews'),
        left = testimonials.querySelector('#reviews-arrow_left'),
        right = testimonials.querySelector('#reviews-arrow_right'),
        slide = testimonials.querySelectorAll('.reviews-slider__slide'),
        count = slide.length;
  let current = 0;

  const renderSlide = () => {
    slide.forEach(element => element.style.display = 'none');
    slide[current].style.display = 'flex';
  };

  right.addEventListener('click', () => {
    ++current;

    if (current > count - 1) {
      current = 0;
    }

    renderSlide();
  });
  left.addEventListener('click', () => {
    --current;

    if (current < 0) {
      current = count - 1;
    }

    renderSlide();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (testimonialsBlock);

/***/ }),

/***/ "./script/modules/uploadServicesData.js":
/*!**********************************************!*\
  !*** ./script/modules/uploadServicesData.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const uploadServicesData = () => console.log('imported > 23 Upload Services & Prices Data module');

/* harmony default export */ __webpack_exports__["default"] = (uploadServicesData);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map