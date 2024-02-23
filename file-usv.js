AFRAME.registerComponent('image-tracker', {
  schema: {
    src: { type: 'string', default: '' },
    width: { type: 'number', default: 1 },
    height: { type: 'number', default: 1 }
  },

  init: function () {
    this.trackedImage = null;
    this.model = null;

    this.el.addEventListener('track