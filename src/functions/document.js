const doc = document; // eslint-disable-line

export const createElement = (tagName, options = {}, innerHTML = '') => {
  const element = doc.createElement(tagName);
  Object.keys(options).forEach((key) => {
    element.setAttribute(key, options[key]);
  });
  element.innerHTML = innerHTML;
  return element;
};

export const addElementToPage = element => doc.body.appendChild(element);

export const addElementToAccordion = (domString) => { doc.getElementById('accordion').innerHTML = domString; };

export const addElementsToAccordion = (elements) => {
  elements.forEach((element) => {
    doc.getElementById('accordions').appendChild(element);
  });
};

export const addElementsToElement = (element, elements) => {
  elements.forEach((el) => {
    element.appendChild(el);
  });
};

export const addEventListenerToBody = (action, func) => doc.body.addEventListener(action, func, false);

export const getElementById = id => doc.querySelector(`#${id}`);

export const getElementsByClass = className => doc.querySelectorAll(`.${className}`);
