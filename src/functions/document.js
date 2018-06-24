const doc = document; // eslint-disable-line

export const createElement = element => doc.createElement(element);

export const addElementToPage = element => doc.body.prepend(element);
