/* globals AFRAME THREE */

AFRAME.registerComponent('mimo', {
  schema: {
    message: {type: 'selector'}
  },
  init: function() {
    console.log("mimo init()", this.data);
  },
  update: function () {
		console.log("[ABC]mimo.js data: ", this.data);
    if (this.data === this.mirroredEl) { 
			return; 
		}
    this.mirroredEl = this.data;
		// console.log('[JY TRACKER] position: ', this.mirroredEl.getAttribute('position'));

  },

  tick: function () {
    var el = this.el;
    var mirroredEl = this.mirroredEl;
    var position;
    var rotation;
    if(!mirroredEl) { return; }
    position = mirroredEl.getAttribute('position');
    rotation = mirroredEl.getAttribute('rotation');

	  console.log('[JY TRACKER] position: ', position);


    el.setAttribute('position', {
      x: -position.x,
      y: position.y,
      z: position.z
    });
    el.setAttribute('rotation', {
      x: rotation.x,
      y: -rotation.y,
      z: -rotation.z
    });
  }
});
