var left = 0;
var topl = 0;
var right = 0;
var bottom = 0;

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

	if(laSensor.x > left){
		left = laSensor.x;
	}
	if(laSensor.y > topl){
		topl = laSensor.y;
	}
	if(laSensor.x < right){
		right = (laSensor.x * (-1));
	}
	if(laSensor.y < bottom){
		bottom = (laSensor.y *(-1));
	}

	if(left > right){
		var templ = left;
	}else {
		var templ = right;
	}
	if(topl > bottom){
		var tempt = topl;
	}else {
		var tempt = bottom;
	}
	
	console.log(left, topl, right, bottom);
	let high = document.getElementById('high');
	high.innerHTML = "X: " + templ;
	let hight = document.getElementById('hight');
	hight.innerHTML = "Y: " + tempt;
  });
  laSensor.start();
