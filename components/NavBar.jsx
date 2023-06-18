// import React from 'react';
// import * as THREE from 'three';

// function MyScene() {
//   const canvasRef = React.useRef(null);

//   const init = React.useCallback(() => {
//     // Create a new scene
//     const scene = new THREE.Scene();

//     // Create a new camera
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//     // Create a new renderer
//     let renderer;
//     if (canvasRef && canvasRef.current) {
//       renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
//     }

//     // Set the size of the renderer to the size of the canvas
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // Add a cube to the scene
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     // Position the camera
//     camera.position.z = 5;

//     // Create an animation loop
//     function animate() {
//       requestAnimationFrame(animate);

//       // Rotate the cube
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;

//       renderer.render(scene, camera);
//     }

//     animate();
//   }, [canvasRef]);

//   React.useEffect(() => {
//     init();
//   }, [init]);

//   return (
//     <canvas ref={canvasRef}></canvas>
//   );
// }

// export default MyScene;
