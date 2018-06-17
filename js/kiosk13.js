  //Lucas Di Monte 2018
  //Please note that user permission (a click) is required to initialize sound on a mobile device.
  //Use the mobile emulation mode in Chrome for proper framing of your css button(s). 

  //////////init variables
  var renderer, scene, camera;
  var arToolkitContext, onRenderFcts, arToolkitSource, markerRoot, artoolkitMarker, lastTimeMsec;
  var params = {
      opacity: 1
  };
  /////variable to access and change button text

  /////video variables
  var video, videoImage, videoImageContext, videoTexture;
  var roots = [];
  var visible = 1;

  //////////run init function
  init();

  //////////init renderer, you won't need to touch this
  function init() {
      renderer = new THREE.WebGLRenderer({
          alpha: true
      });
      //   renderer.setClearColor(new THREE.Color('lightgrey'), 0);
      //renderer.setSize(window.innerWidth, window.innerHeight);
      // document.body.appendChild(renderer.domElement);
      onRenderFcts = [];
      scene = new THREE.Scene();
      var ambient = new THREE.AmbientLight(0x666666);
      scene.add(ambient);
      var directionalLight = new THREE.DirectionalLight(0x4e5ba0);
      directionalLight.position.set(-1, 1, 1).normalize();
      scene.add(directionalLight);
      camera = new THREE.Camera();
      scene.add(camera);
      arToolkitSource = new THREEx.ArToolkitSource({
          sourceType: 'webcam',
      });
      arToolkitSource.init(function onReady() {
          arToolkitSource.onResize(renderer.domElement)
      });
      //            window.addEventListener('resize', function() {
      //                arToolkitSource.onResize(renderer.domElement)
      //            });
      arToolkitContext = new THREEx.ArToolkitContext({
          cameraParametersUrl: 'data/camera_para.dat',
          detectionMode: 'mono',
          maxDetectionRate: 30,
          //                canvasWidth: 80 * 3,
          //                canvasHeight: 60 * 3,
      });
      arToolkitContext.init(function onCompleted() {
          camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
      });
      onRenderFcts.push(function () {
          if (arToolkitSource.ready === false) return
          arToolkitContext.update(arToolkitSource.domElement)
      });

      ///// Add your custom .patt's here at 'patternUrl', make sure the .patt file is in the data folder.
      markerRoot = new THREE.Group
      scene.add(markerRoot)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
          type: 'pattern',
          patternUrl: 'data/1.patt'
      });
      roots.push(markerRoot);

      markerRoot2 = new THREE.Group
      scene.add(markerRoot2)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot2, {
          type: 'pattern',
          patternUrl: 'data/2.patt'
      });
      roots.push(markerRoot2);

      markerRoot3 = new THREE.Group
      scene.add(markerRoot3)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot3, {
          type: 'pattern',
          patternUrl: 'data/3.patt'

      });
      roots.push(markerRoot3);


      markerRoot4 = new THREE.Group
      scene.add(markerRoot4)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot4, {
          type: 'pattern',
          patternUrl: 'data/4.patt'

      });
      roots.push(markerRoot4);

      markerRoot5 = new THREE.Group
      scene.add(markerRoot5)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot5, {
          type: 'pattern',
          patternUrl: 'data/5.patt'

      });
      roots.push(markerRoot5);

      markerRoot6 = new THREE.Group
      scene.add(markerRoot6)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot6, {
          type: 'pattern',
          patternUrl: 'data/6.patt'

      });
      roots.push(markerRoot6);


      markerRoot7 = new THREE.Group
      scene.add(markerRoot7)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot7, {
          type: 'pattern',
          patternUrl: 'data/7.patt'

      });
      roots.push(markerRoot7);



      markerRoot8 = new THREE.Group
      scene.add(markerRoot8)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot8, {
          type: 'pattern',
          patternUrl: 'data/8.patt'

      });
      roots.push(markerRoot8);



      markerRoot9 = new THREE.Group
      scene.add(markerRoot9)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot9, {
          type: 'pattern',
          patternUrl: 'data/9.patt'

      });
      roots.push(markerRoot9);


      markerRoot10 = new THREE.Group
      scene.add(markerRoot10)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot10, {
          type: 'pattern',
          patternUrl: 'data/10.patt'

      });
      roots.push(markerRoot10);

      markerRoot11 = new THREE.Group
      scene.add(markerRoot11)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot11, {
          type: 'pattern',
          patternUrl: 'data/11.patt'

      });
      roots.push(markerRoot11);

      markerRoot12 = new THREE.Group
      scene.add(markerRoot12)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot12, {
          type: 'pattern',
          patternUrl: 'data/12.patt'

      });
      roots.push(markerRoot12);


      markerRoot13 = new THREE.Group
      scene.add(markerRoot13)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot13, {
          type: 'pattern',
          patternUrl: 'data/13.patt'

      });
      roots.push(markerRoot13);

      markerRoot14 = new THREE.Group
      scene.add(markerRoot14)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot14, {
          type: 'pattern',
          patternUrl: 'data/14.patt'

      });
      roots.push(markerRoot14);

      markerRoot15 = new THREE.Group
      scene.add(markerRoot15)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot15, {
          type: 'pattern',
          patternUrl: 'data/15.patt'

      });
      roots.push(markerRoot15);

      markerRoot16 = new THREE.Group
      scene.add(markerRoot16)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot16, {
          type: 'pattern',
          patternUrl: 'data/16.patt'

      });
      roots.push(markerRoot16);

      markerRoot17 = new THREE.Group
      scene.add(markerRoot17)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot17, {
          type: 'pattern',
          patternUrl: 'data/17.patt'

      });
      roots.push(markerRoot17);

      markerRoot18 = new THREE.Group
      scene.add(markerRoot18)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot18, {
          type: 'pattern',
          patternUrl: 'data/18.patt'

      });
      roots.push(markerRoot18);


      markerRoot19 = new THREE.Group
      scene.add(markerRoot19)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot19, {
          type: 'pattern',
          patternUrl: 'data/19.patt'

      });
      roots.push(markerRoot19);

      markerRoot20 = new THREE.Group
      scene.add(markerRoot20)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot20, {
          type: 'pattern',
          patternUrl: 'data/20.patt'

      });
      roots.push(markerRoot20);

      markerRoot21 = new THREE.Group
      scene.add(markerRoot21)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot21, {
          type: 'pattern',
          patternUrl: 'data/21.patt'

      });
      roots.push(markerRoot21);

      markerRoot22 = new THREE.Group
      scene.add(markerRoot22)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot22, {
          type: 'pattern',
          patternUrl: 'data/22.patt'

      });
      roots.push(markerRoot22);

      markerRoot23 = new THREE.Group
      scene.add(markerRoot23)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot23, {
          type: 'pattern',
          patternUrl: 'data/23.patt'

      });
      roots.push(markerRoot23);

      markerRoot24 = new THREE.Group
      scene.add(markerRoot24)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot24, {
          type: 'pattern',
          patternUrl: 'data/24.patt'

      });
      roots.push(markerRoot24);

      markerRoot25 = new THREE.Group
      scene.add(markerRoot25)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot25, {
          type: 'pattern',
          patternUrl: 'data/25.patt'

      });
      roots.push(markerRoot25);


      markerRoot26 = new THREE.Group
      scene.add(markerRoot26)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot26, {
          type: 'pattern',
          patternUrl: 'data/26.patt'

      });
      roots.push(markerRoot26);

      markerRoot27 = new THREE.Group
      scene.add(markerRoot27)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot27, {
          type: 'pattern',
          patternUrl: 'data/27.patt'

      });
      roots.push(markerRoot27);

      markerRoot28 = new THREE.Group
      scene.add(markerRoot28)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot28, {
          type: 'pattern',
          patternUrl: 'data/28.patt'

      });
      roots.push(markerRoot28);

      markerRoot29 = new THREE.Group
      scene.add(markerRoot29)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot29, {
          type: 'pattern',
          patternUrl: 'data/29.patt'

      });
      roots.push(markerRoot29);

      markerRoot30 = new THREE.Group
      scene.add(markerRoot30)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot30, {
          type: 'pattern',
          patternUrl: 'data/30.patt'

      });
      roots.push(markerRoot30);


      markerRoot31 = new THREE.Group
      scene.add(markerRoot31)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot31, {
          type: 'pattern',
          patternUrl: 'data/31.patt'

      });
      roots.push(markerRoot31);


      markerRoot32 = new THREE.Group
      scene.add(markerRoot32)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot32, {
          type: 'pattern',
          patternUrl: 'data/32.patt'

      });
      roots.push(markerRoot32);

      markerRoot33 = new THREE.Group
      scene.add(markerRoot33)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot33, {
          type: 'pattern',
          patternUrl: 'data/33.patt'

      });
      roots.push(markerRoot33);

      markerRoot34 = new THREE.Group
      scene.add(markerRoot34)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot34, {
          type: 'pattern',
          patternUrl: 'data/34.patt'

      });
      roots.push(markerRoot34);

      markerRoot35 = new THREE.Group
      scene.add(markerRoot35)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot35, {
          type: 'pattern',
          patternUrl: 'data/35.patt'

      });
      roots.push(markerRoot35);

      markerRoot36 = new THREE.Group
      scene.add(markerRoot36)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot36, {
          type: 'pattern',
          patternUrl: 'data/36.patt'

      });
      roots.push(markerRoot36);

      markerRoot37 = new THREE.Group
      scene.add(markerRoot37)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot37, {
          type: 'pattern',
          patternUrl: 'data/37.patt'

      });
      roots.push(markerRoot37);

      markerRoot38 = new THREE.Group
      scene.add(markerRoot38)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot38, {
          type: 'pattern',
          patternUrl: 'data/38.patt'

      });
      roots.push(markerRoot38);

      markerRoot39 = new THREE.Group
      scene.add(markerRoot39)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot39, {
          type: 'pattern',
          patternUrl: 'data/39.patt'

      });
      roots.push(markerRoot39);

      markerRoot40 = new THREE.Group
      scene.add(markerRoot40)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot40, {
          type: 'pattern',
          patternUrl: 'data/40.patt'

      });
      roots.push(markerRoot40);

      markerRoot41 = new THREE.Group
      scene.add(markerRoot41)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot41, {
          type: 'pattern',
          patternUrl: 'data/41.patt'

      });
      roots.push(markerRoot41);

      markerRoot42 = new THREE.Group
      scene.add(markerRoot42)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot42, {
          type: 'pattern',
          patternUrl: 'data/42.patt'

      });
      roots.push(markerRoot42);

      markerRoot43 = new THREE.Group
      scene.add(markerRoot43)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot43, {
          type: 'pattern',
          patternUrl: 'data/43.patt'

      });
      roots.push(markerRoot43);

      markerRoot44 = new THREE.Group
      scene.add(markerRoot44)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot44, {
          type: 'pattern',
          patternUrl: 'data/44.patt'

      });
      roots.push(markerRoot44);

      markerRoot45 = new THREE.Group
      scene.add(markerRoot45)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot45, {
          type: 'pattern',
          patternUrl: 'data/45.patt'

      });
      roots.push(markerRoot45);

      markerRoot46 = new THREE.Group
      scene.add(markerRoot46)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot46, {
          type: 'pattern',
          patternUrl: 'data/46.patt'

      });
      roots.push(markerRoot46);

      markerRoot47 = new THREE.Group
      scene.add(markerRoot47)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot47, {
          type: 'pattern',
          patternUrl: 'data/47.patt'

      });
      roots.push(markerRoot47);

      markerRoot48 = new THREE.Group
      scene.add(markerRoot48)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot48, {
          type: 'pattern',
          patternUrl: 'data/48.patt'

      });
      roots.push(markerRoot48);

      markerRoot49 = new THREE.Group
      scene.add(markerRoot49)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot49, {
          type: 'pattern',
          patternUrl: 'data/49.patt'

      });
      roots.push(markerRoot49);

      markerRoot50 = new THREE.Group
      scene.add(markerRoot50)
      artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot50, {
          type: 'pattern',
          patternUrl: 'data/50.patt'

      });
      roots.push(markerRoot50);


      /////assign video element to your marker
      //  markerRoot.add(movieScreen);

      onRenderFcts.push(function () {});
      onRenderFcts.push(function () {
          renderer.render(scene, camera)
      });
      lastTimeMsec = null;
      animate();
  }

  function animate(nowMsec) {
      requestAnimationFrame(animate);
      lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60;
      var deltaMsec = Math.min(200, nowMsec - lastTimeMsec);
      lastTimeMsec = nowMsec;
      pulse = Date.now() * 0.0009;
      onRenderFcts.forEach(function (onRenderFct) {
          onRenderFct(deltaMsec / 1000, nowMsec / 1000);
      });



      if (markerRoot.visible === true) {
          window.location.replace("index.html");
      }
      if (markerRoot2.visible === true) {
          window.location.replace("2.html");
      }
      if (markerRoot3.visible === true) {
          window.location.replace("3.html");
      }
      if (markerRoot4.visible === true) {
          window.location.replace("4.html");
      }
      if (markerRoot5.visible === true) {
          window.location.replace("5.html");
      }
      if (markerRoot6.visible === true) {
          window.location.replace("6.html");
      }
      if (markerRoot7.visible === true) {
          window.location.replace("7.html");
      }
      if (markerRoot8.visible === true) {
          window.location.replace("8.html");
      }
      if (markerRoot9.visible === true) {
          window.location.replace("9.html");
      }
      if (markerRoot10.visible === true) {
          window.location.replace("10.html");
      }
      if (markerRoot11.visible === true) {
          window.location.replace("11.html");
      }
      if (markerRoot12.visible === true) {
          window.location.replace("12.html");
      }
      //   if (markerRoot13.visible === true) {
      //       window.location.replace("13.html");
      //   }
      if (markerRoot14.visible === true) {
          window.location.replace("14.html");
      }
      if (markerRoot15.visible === true) {
          window.location.replace("15.html");
      }
      if (markerRoot16.visible === true) {
          window.location.replace("16.html");
      }
      if (markerRoot17.visible === true) {
          window.location.replace("17.html");
      }
      if (markerRoot18.visible === true) {
          window.location.replace("18.html");
      }
      if (markerRoot19.visible === true) {
          window.location.replace("19.html");
      }
      if (markerRoot20.visible === true) {
          window.location.replace("20.html");
      }
      if (markerRoot21.visible === true) {
          window.location.replace("21.html");
      }
      if (markerRoot22.visible === true) {
          window.location.replace("22.html");
      }
      if (markerRoot23.visible === true) {
          window.location.replace("23.html");
      }
      if (markerRoot24.visible === true) {
          window.location.replace("24.html");
      }
      if (markerRoot25.visible === true) {
          window.location.replace("25.html");
      }
      if (markerRoot26.visible === true) {
          window.location.replace("26.html");
      }
      if (markerRoot27.visible === true) {
          window.location.replace("27.html");
      }
      if (markerRoot28.visible === true) {
          window.location.replace("28.html");
      }
      if (markerRoot29.visible === true) {
          window.location.replace("29.html");
      }
      if (markerRoot30.visible === true) {
          window.location.replace("30.html");
      }
      //      if (markerRoot31.visible === true) {
      //          window.location.replace("31.html");
      //      }
      if (markerRoot32.visible === true) {
          window.location.replace("32.html");
      }
      if (markerRoot33.visible === true) {
          window.location.replace("33.html");
      }
      if (markerRoot34.visible === true) {
          window.location.replace("34.html");
      }
      if (markerRoot35.visible === true) {
          window.location.replace("35.html");
      }
      if (markerRoot36.visible === true) {
          window.location.replace("36.html");
      }
      if (markerRoot37.visible === true) {
          window.location.replace("37.html");
      }
      if (markerRoot38.visible === true) {
          window.location.replace("38.html");
      }
      if (markerRoot39.visible === true) {
          window.location.replace("39.html");
      }
      if (markerRoot40.visible === true) {
          window.location.replace("40.html");
      }
      if (markerRoot41.visible === true) {
          window.location.replace("41.html");
      }
      if (markerRoot42.visible === true) {
          window.location.replace("42.html");
      }
      if (markerRoot43.visible === true) {
          window.location.replace("43.html");
      }
      if (markerRoot44.visible === true) {
          window.location.replace("44.html");
      }
      if (markerRoot45.visible === true) {
          window.location.replace("45.html");
      }
      if (markerRoot46.visible === true) {
          window.location.replace("46.html");
      }
      if (markerRoot47.visible === true) {
          window.location.replace("47.html");
      }
      if (markerRoot48.visible === true) {
          window.location.replace("48.html");
      }





  }
