let scene,camera,rendere,cube;
function init() {
     scene = new THREE.Scene();
     camera = new THREE.PerspectiveCamera(
        75,window.innerWidth/window.innerHeight,0.1,1000
    )
    // find differnet kinds of renderes.
     renderer = new THREE.WebGLRenderer({
        antialias:true
    });
    
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    console.log(renderer);
    document.body.appendChild( renderer.domElement );
    
    // scene setup.
    // 1. Geomatry Box.
    
    const  geometry = new THREE.BoxGeometry(1, 1, 1);
    const  material = new THREE.MeshBasicMaterial({color:0x00ff00});
    
    const  texture = new THREE.Mesh(geometry,material)
     cube = new THREE.Mesh(geometry, material);
    
    scene.add(cube);
    camera.position.z = 3;
}

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
}

function onResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

window.addEventListener('resize',onResize,false)
init();
animate();













// /**
//  * 1. get webgl context.
//  * 2. create shaders. compile and test.
//  * 3. use vshader and fshader for creating a shader programm.
//  * 4. attach the shader to gl context. i.e.  linkProgram.
//  * 5. test shader compilation.
//  */
//  drawSquare = () => {
//     gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
//     gl.clearDepth(1.0);                 // Clear everything
//     gl.enable(gl.DEPTH_TEST);           // Enable depth testing
//     gl.depthFunc(gl.LEQUAL);            // Near things obscure far things
//     gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

//      fieldOfView = 45 * Math.PI / 180;   // in radians
//      aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
//      zNear = 0.1;
//      zFar = 100.0;
//      projectionMatrix = mat4.create();

//     mat4.perspective(projectionMatrix,
//         fieldOfView,
//         aspect,
//         zNear,
//         zFar);

//      modelViewMatrix = mat4.create();

//     mat4.translate(modelViewMatrix,     // destination matrix
//         modelViewMatrix,     // matrix to translate
//         [-0.0, 0.0, -6.0]);

//      numComponents = 2;  // pull out 2 values per iteration
//      type = gl.FLOAT;    // the data in the buffer is 32bit floats
//      normalize = false;  // don't normalize
//      stride = 0;         // how many bytes to get from one set of values to the next
//     // 0 = use type and numComponents above
//      offset = 0;         // how many bytes inside the buffer to start from
//     gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);

//     gl.vertexAttribPointer(
//         programInfo.attribLocations.vertexPosition,
//         numComponents,
//         type,
//         normalize,
//         stride,
//         offset);
//     gl.enableVertexAttribArray(
//         programInfo.attribLocations.vertexPosition);

//     gl.useProgram(programInfo.program);

//     // Set the shader uniforms

//     gl.uniformMatrix4fv(
//         programInfo.uniformLocations.projectionMatrix,
//         false,
//         projectionMatrix);
//     gl.uniformMatrix4fv(
//         programInfo.uniformLocations.modelViewMatrix,
//         false,
//         modelViewMatrix);
//      offset = 0;
//      vertexCount = 4;
//     gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);

// }
//  onloadHandler = () => {
//      canvas = document.querySelector("#canvas_elem");
//      gl = canvas.getContext("webgl");
//     gl.clearColor(0.0, 0.0, 0.0, 1.0);
//     gl.clear(gl.COLOR_BUFFER_BIT);
// }

// // create shader check its compilation and return it.
//  loadShader = (gl, type, source) => {
//      shader = gl.createShader(type);
//     gl.shaderSource(shader, source);
//     gl.compileShader(shader);
//     if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
//         alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
//         gl.deleteShader(shader);
//         return null;
//     }
//     return shader;
// }

//  initShaderProgram = (gl, vshader, fshader) => {
//      vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
//      fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
//      shaderProgram = gl.createProgram();
//     gl.attachShader(shaderProgram, vertexShader);
//     gl.attachShader(shaderProgram, fragmentShader);
//     gl.linkProgram(shaderProgram);
//     if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
//         alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
//         return null;
//     }
//     return shaderProgram;
// }
// /**
//  * 
//  * @param {*} gl
//  * position data.
//  *  
//  */
//  initBuffers = (gl) => {
//      positionBuffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
//      positions = [
//         -1.0, 1.0,
//         1.0, 1.0,
//         -1.0, -1.0,
//         1.0, -1.0,
//     ];
//     gl.bufferData(gl.ARRAY_BUFFER,
//         new Float32Array(positions),
//         gl.STATIC_DRAW);
//     return {
//         position: positionBuffer,
//     };

// };

// window.onload = onloadHandler; 