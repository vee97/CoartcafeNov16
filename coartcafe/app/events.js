// AFRAME.registerComponent('markerhandler', {

//     init: function() {
//         const animatedMarker = document.querySelector("#animated-marker");
//         const aEntity = document.querySelector("#animated-model");

//         // every click, we make our model grow in size :)
//         animatedMarker.addEventListener('click', function(ev, target){
//             const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
//             if (aEntity && intersectedElement === aEntity) {
//                 const scale = aEntity.getAttribute('scale');
//                 Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
//                 aEntity.setAttribute('scale', scale);
//                 // window.open('https://www.google.com', '_self');
//                 // window.location.assign("https://www.google.com");
//                 console.log('Clicked!')
//             }
//         });       
// }});

  AFRAME.registerComponent('navigate-on-click', {
    schema: {
      url: {default: ''}
    },

    init: function () {
      var data = this.data;
      var el = this.el;

      el.addEventListener('click', function () {
        window.location.href = data.url;
      });
    }
  });    