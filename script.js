//
// Selectors
const header = document.querySelector('.header');
const headerSlider = document.querySelector('.header__slider');
const sliderTitle = document.querySelector('.slider__title');
const sliderContainer = document.querySelector('.slider__container');
const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const btnLogin = document.querySelector('.btn__show--modal-login');
const btnCloseLogin = document.querySelector('.btn__close--modal-login');
const btnSubmitLogin = document.querySelector('.btn__login');
const btnSignup = document.querySelector('.signup');
const btnSubscribe = document.querySelector('.btn__show--modal-subscribe');
const btnCloseSubscribe = document.querySelector(
  '.btn__close--modal-subscribe'
);
const btnSubmitSubscribe = document.querySelector('.btn__submit');
const btnRecovery = document.querySelector('.forgot__password');
const btnCloseRecovery = document.querySelector('.btn__close--modal-recovery');
const btnSubmitRecovery = document.querySelector('.btn__submit--recovery');

const modalLogin = document.querySelector('.modal__login');
const modalSubscribe = document.querySelector('.modal__subscribe');
const linkSubscribe = document.querySelectorAll('.link__subscribe');
const modalRecovery = document.querySelector('.modal__recovery');

const tabs = document.querySelectorAll('.features__tab');
const tabsContainer = document.querySelector('.features__tab--container');
const tabsContent = document.querySelectorAll('.features__content');

const nav = document.querySelector('.nav');
const navContainer = document.querySelector('.nav__links');
const navItem = document.querySelectorAll('.nav__item');
const navLink = document.querySelectorAll('.nav__link');

const allSections = document.querySelectorAll('.section');

// select images with property 'data-src' for implemnting lazy loading
const lazyImgTargets = document.querySelectorAll('img[data-src]');

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnSliderLeft = document.querySelector('.slider__btn--left');
const btnSliderRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

const overlay = document.querySelector('.overlay');

//
// Cookie Message
const message = document.createElement('div');

overlay.classList.remove('hidden');

message.classList.add('cookie');
message.innerHTML =
  'We use cookies to ensure the best possible experience on our website. Continuing implies that you agree to the use of cookies, in order to improve user experience, site functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

sliderTitle.setAttribute('style', 'display:none');
sliderContainer.setAttribute('style', 'display:none');
headerSlider.prepend(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    sliderTitle.setAttribute('style', 'display:flex');
    sliderContainer.setAttribute('style', 'display:flex');
    overlay.classList.add('hidden');
  });

//
// Nav menu mouse over interaction
navContainer.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav__links').querySelectorAll('.nav__link');

    siblings.forEach(el => {
      if (el != link) {
        el.style.color = '#dadada';
        el.style.opacity = 0.3;
      } else el.style.color = '#c58936';
    });
  }
});

navContainer.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav__links').querySelectorAll('.nav__link');

    siblings.forEach(el => {
      if (el != link) {
        el.style.color = '#dadada';
        el.style.opacity = 1;
      } else el.style.color = '#dadada';
    });
  }
});

//
// Smooth scroll on header 'Find out More' button
btnScroll.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  // left => distance from edge of visible viewport to selected element
  // pageYOffset => distance from top of webpage page to top edge of current visible viewport
});

//
// Smooth scroll to top on click on Freebank logo (header & footer logo)
const scrollHeader = document.querySelector('.nav__logo');
const scrollFooter = document.querySelector('.footer__logo--img');

const scrollToTop = function () {
  const headerCoords = header.getBoundingClientRect();
  window.scrollTo({
    left: headerCoords.left,
    top: headerCoords.top,
    behavior: 'smooth',
  });
};

scrollHeader.addEventListener('click', scrollToTop);
scrollFooter.addEventListener('click', scrollToTop);

//
// Show/hide modal windows on click on CTAs
// Modal Windows

// Login modal
const openModalLogin = function () {
  overlay.classList.remove('hidden');
  modalLogin.classList.remove('hidden');
};
const closeModalLogin = function () {
  overlay.classList.add('hidden');
  modalLogin.classList.add('hidden');
};

//
// Subscribe/signup modal
const openModalSubscribe = function () {
  overlay.classList.remove('hidden');
  modalSubscribe.classList.remove('hidden');
};
const closeModalSubscribe = function () {
  overlay.classList.add('hidden');
  modalSubscribe.classList.add('hidden');
};

//
// Password Recovery modal
const openModalRecovery = function () {
  overlay.classList.remove('hidden');
  modalRecovery.classList.remove('hidden');
};

const closeModalRecovery = function () {
  overlay.classList.add('hidden');
  modalRecovery.classList.add('hidden');
  modalLogin.classList.add('hidden');
};

//
// Open/close Login modal
btnLogin.addEventListener('click', openModalLogin);
btnCloseLogin.addEventListener('click', closeModalLogin);
btnSubmitLogin.addEventListener('click', closeModalLogin);

//
// Open/close Subscribe modal
btnSubscribe.addEventListener('click', openModalSubscribe);
btnCloseSubscribe.addEventListener('click', closeModalSubscribe);
btnSubmitSubscribe.addEventListener('click', closeModalSubscribe);

//
// Take user from login modal to signup modal
btnSignup.addEventListener('click', function () {
  closeModalLogin();
  overlay.classList.add('hidden');
  openModalSubscribe();
});

//
// Password recovery modal
btnRecovery.addEventListener('click', function () {
  closeModalLogin();
  overlay.classList.add('hidden');
  openModalRecovery();
});

const msgRecovery = function () {
  alert(
    "We've sent an email with the password recovery instructions. In case you don't see our email within the next 10 minutes, please check your Spam folder."
  );
};

btnCloseRecovery.addEventListener('click', closeModalRecovery);

btnSubmitRecovery.addEventListener('click', function () {
  closeModalRecovery();
  setTimeout(msgRecovery, 1000);
});

//
// Implementing page navigation
// Event delegation - add event listener to common parent (nav__links)
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//
// Go to APP from main page
document.querySelector('.goto__app').addEventListener('click', function () {
  window.open('https://chillcodemao.github.io/freebank/', '_blank');
});

//
// Features tabbed component - using event delegation
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.features__tab');

  // guard clause -> if statement will return early if condition matched
  if (!clicked) return;

  // clear active classes
  // -tabs
  tabs.forEach(tab => tab.classList.remove('features__tab--active'));
  // -content areas
  tabsContent.forEach(content =>
    content.classList.remove('features__content--active')
  );

  // adding active on clicked tab
  clicked.classList.add('features__tab--active');

  // display tab content area
  document
    .querySelector(`.features__content--${clicked.dataset.tab}`)
    .classList.add('features__content--active');
});

//
// Sticky navbar

// use Intersection Obserbver API
// the callback func will be called each time the target element (section1) will intersect the root at the threshold set in the options object
// the callback function takes 2 arguments: entries and the observer itself

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  if (overlay.classList.contains('hidden')) {
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // 0% of the header is visible
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//
// Reveling sections as user scrolls down
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (overlay.classList.contains('hidden')) {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    // observe only once at first scroll down -> unobserve sections
    observer.unobserve(entry.target);
  }
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//
// Lazy loading images for Overview section
// before: page load complete@ 300ms
// after: page load complete @ 200ms

const loadImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  // when JS finished looking for the images to load from dataset, it emits the load event => after load complete, remove blur filter
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0.8,
});

lazyImgTargets.forEach(img => imgObserver.observe(img));

//
// Testimonials slider
let curSlide = 0;
const maxSlide = slides.length;

// Create dots
const createDots = function () {
  slides.forEach(function (s, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

createDots();

// Activate dot according to slide number
const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

// Position the slides
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
// Set default slide to 0, activate first dot
goToSlide(0);
activateDot(0);

// Go to next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else curSlide++;

  goToSlide(curSlide);
  activateDot(curSlide);
};

// Go to previous slide
const prevSlide = function () {
  if (curSlide == 0) {
    curSlide = maxSlide - 1;
  } else curSlide--;

  goToSlide(curSlide);
  activateDot(curSlide);
};

btnSliderRight.addEventListener('click', nextSlide);
btnSliderLeft.addEventListener('click', prevSlide);

// Handle keyboard events
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
});

// Assign dots to corresponding slide
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});
