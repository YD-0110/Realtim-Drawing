noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;


document.getElementById("audio").play();
function preload(){

}

function setup(){
    canvas = createCanvas(550, 550);
    
    canvas.position(580, 120);
    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;
    console.log("r: ", r, " g: ", g, " b: ", b);
    background("blue");
    document.getElementById("square_side").innerHTML = "Width and Height of the square will be - "+ difference+"px";
    fill("rgb("+r+","+g+","+b+")");
    stroke("rgb("+r+","+g+","+b+")");
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log("Model is loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;

       

        difference = floor(leftwristX - rightwristX);

        console.log("x = "+ noseX+"  y = "+noseY);
        console.log("left "+leftwristX + " right "+rightwristX);

       

    }
}

