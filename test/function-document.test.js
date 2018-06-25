import * as documentFunctions from '../src/functions/document';

describe('documentFunctions.createElement', () => {
  it('should create dom', () => {
    const actual = documentFunctions.createElement('li', { class: 'eli' });
    expect(actual).toMatchSnapshot();
  });
  it('should create dom', () => {
    const actual = documentFunctions.createElement('span');
    expect(actual).toMatchSnapshot();
  });
});

describe('documentFunctions.addElementsToElement', () => {
  it('should create dom and add child element to dom', () => {
    const parentElement = documentFunctions.createElement('div', { class: 'eli' });
    const childElement = documentFunctions.createElement('span', { class: 'span' });
    documentFunctions.addElementsToElement(parentElement, [childElement]);
    expect(parentElement).toMatchSnapshot();
  });
});

describe('documentFunctions.getElementById', () => {
  it('should return element created and appended to page', () => {
    const expected = documentFunctions.createElement('section', { id: 'section' });
    document.body.appendChild(expected);
    const actual = documentFunctions.getElementById('section');
    expect(actual).toMatchObject(expected);
  });
});

describe('documentFunctions.getElementByClass', () => {
  it('should return element created and appended to page', () => {
    const expected = documentFunctions.createElement('section', { class: 'section' });
    document.body.appendChild(expected);
    const actual = documentFunctions.getElementsByClass('section');
    expect(actual[0]).toMatchObject(expected);
  });
});