let acl = new Accelerometer({frequency: 60});
console.log("Beginnig test");
acl.addEventListener('reading', () => {
//make item with the id box move 
let x = acl.x * 100;
let y = acl.y * 100;
let z = acl.z * 100;
	
let box = document.getElementById('box1');
box.style.left = x + 'px';
box.style.top = y + 'px';
// box.style.transform = 'rotate(' + z + 'deg)';
});
acl.start();

let laSensor = new LinearAccelerationSensor({frequency: 60});
laSensor.addEventListener('reading', e => {
	let box = document.getElementById('box2');
	box.style.left = (laSensor.x * 100) + 'px';
	box.style.top = (laSensor.y * 100) + 'px';
});
laSensor.start();
