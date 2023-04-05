import {Accordions} from './accordions';
let accordions;

const initAccordions = () => {
  accordions = new Accordions();
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;
};

const aboutContainer = document.querySelector('[data-about-accordion]');

const accordionButtonClickHandler = (evt) => {
  const accordionElement = aboutContainer.querySelector('[data-accordion="element"]');
  if (accordionElement) {
    if (!accordionElement.classList.contains('is-active')) {
      evt.target.textContent = 'Свернуть';
    } else {
      evt.target.textContent = 'Подробнее';
    }
  }
};

const initAboutButton = () => {
  if (typeof aboutContainer !== 'undefined' && aboutContainer !== null) {
    const accordionButton = aboutContainer.querySelector('[data-accordion="button"]');
    if (accordionButton) {
      accordionButton.addEventListener('click', accordionButtonClickHandler);
    }
  }
};

export {initAccordions, initAboutButton, accordions};
