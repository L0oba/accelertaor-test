let acl = new Accelerometer({frequency: 60});
console.log("Beginnig test");
acl.addEventListener('reading', () => {
//make item with the id box move 

let x = acl.x * 100;
let y = acl.y * 100;
let z = acl.z * 100;

// console.log('x: ' + x);
// console.log('y: ' + y);
// console.log('z: ' + z);

let box = document.getElementById('box1');
box.style.left = x + 'px';
box.style.top = y + 'px';
// box.style.transform = 'rotate(' + z + 'deg)';
});
acl.start();

let laSensor = new LinearAccelerationSensor({frequency: 60});
laSensor.addEventListener('reading', e => {
	// console.log("Linear acceleration along the X-axis " + laSensor.x);
	// console.log("Linear acceleration along the Y-axis " + laSensor.y);
	// console.log("Linear acceleration along the Z-axis " + laSensor.z);
  
	let box = document.getElementById('box2');
	box.style.left = (laSensor.x * 100) + 'px';
	box.style.top = (laSensor.y * 100) + 'px';
  });
  laSensor.start();

const sensor = new AmbientLightSensor();
sensor.addEventListener('reading', event => {
	console.log('Current light level:', sensor.illuminance);
});
sensor.addEventListener('error', event => {
	console.log(event.error.name, event.error.message);
});
sensor.start();
  