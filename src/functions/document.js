const doc = document; // eslint-disable-line

export const createElement = (tagName, options = {}, innerHTML = '') => {
  const element = doc.createElement(tagName);
  Object.keys(options).forEach((key) => {
    element.setAttribute(key, options[key]);
  });
  element.innerHTML = innerHTML;
  return element;
};

export const addElementsToElement = (element, elements) => {
  elements.forEach((el) => {
    element.appendChild(el);
  });
};

export const getElementById = id => doc.querySelector(`#${id}`);

export const getElementsByClass = className => doc.querySelectorAll(`.${className}`);
