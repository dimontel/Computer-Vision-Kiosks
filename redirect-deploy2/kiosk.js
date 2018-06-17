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
                    onRenderFcts.push(function() {
                        if (arToolkitSource.ready === false) return
                        arToolkitContext.update(arToolkitSource.domElement)
                    });

                    /////assign your marker.patt, so the camera knows to recognize it
                    /////add your custom .patt here at 'patternUrl', make sure the .patt file is in the data folder
                    markerRoot = new THREE.Group
                    scene.add(markerRoot)
                    artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
                        type: 'pattern',
                        patternUrl: 'data/patt.kanji' //yours will be: 'your-marker-name.patt'
                    });


                    /////assign video element to your marker
                    //  markerRoot.add(movieScreen);

                    onRenderFcts.push(function() {});
                    onRenderFcts.push(function() {
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
                    onRenderFcts.forEach(function(onRenderFct) {
                        onRenderFct(deltaMsec / 1000, nowMsec / 1000);
                    });

                    if (markerRoot.visible === true) {
                        window.location.replace("http://google.com");
                    }



                }
