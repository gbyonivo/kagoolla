window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () { },
    removeListener: function () { }
  };
};

Object.defineProperty(document, 'currentScript', {
  value: document.createElement('script'),
});