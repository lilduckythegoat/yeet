nose_x = 0;
nose_y = 0;
function preload() {
clown_nose = loadImage('https://i.postimg.cc/Xv8C9n07/yeeeeeeeeeeeee-removebg-preview.png');
}


function setup() {
canvas = createCanvas(300,250);
canvas.center();
video = createCapture(VIDEO);
video.size(300,250);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}


function draw() {
image(video,0,0,300,250);
image(clown_nose,nose_x,nose_y,50,50);
}

function take_snapshot() {
    save('yes.png')
}

function modelLoaded() {
    console.log("poseNet is initialized");
    }

    function gotPoses(results) {
        console.log(results);
        if (results.length > 0) {
            console.log(results);
            console.log("nose x=" + results[0].pose.nose.x);
            console.log("nose y=" + results[0].pose.nose.y);
            nose_x = results[0].pose.nose.x - 20;
            nose_y = results[0].pose.nose.y - 20;
        }
    }