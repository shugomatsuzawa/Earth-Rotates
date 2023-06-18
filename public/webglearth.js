var earth;

function initialize() {
  const reducedMotion = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

  var earth = new WE.map('earth_div', {
    atmosphere: true,
    sky: true,
    dragging: false,
    scrollWheelZoom: false
  });
  earth.setView([27, 136], 2);
  WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
    tileSize: 256,
    bounds: [[-85, -180], [85, 180]],
    minZoom: 0,
    maxZoom: 16,
    // attribution: 'WebGLEarth example',
    tms: true
  }).addTo(earth);

  // Start a simple rotation animation
  var before = null;
  requestAnimationFrame(function animate(now) {
    if (!reducedMotion) {
      var tilt = earth.getTilt();
      // var roll = earth.getRoll();
      var c = earth.getPosition();
      var elapsed = before? now - before: 0;
      before = now;
      earth.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
      earth.setTilt(tilt);
      // earth.setRoll(roll);
      requestAnimationFrame(animate);
    }
  });

  // スクロール移動
  const mainScroll = document.querySelector('#main-scroll');
  mainScroll.addEventListener('scroll', function(){
    const scroll = mainScroll.scrollTop;
    const windowHeight = mainScroll.clientHeight;
    if (!reducedMotion && scroll < windowHeight){
      const zoomParam = 2 + scroll / windowHeight * 2;
      const tiltParam = scroll / windowHeight * 30;
      earth.setZoom(zoomParam);
      earth.setTilt(tiltParam);
      // earth.setRoll(25);
      // console.debug('zoom' + zoomParam + 'tilt' + tiltParam);
    } else if (!reducedMotion) {
      earth.setZoom(4);
      earth.setTilt(30);
      // earth.setRoll(25);
    }
  });
}