song_1 = "";
song_2 = "";

song_1_status = "";
song_2_status = "";

scoreRightWrist  = 0;
scoreLeftWrist  = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload(){
    song_1 = loadSound("Beliver.mp3");
    song_2 = loadSound("STAR_WALKIN.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded() {
    console.log("posenet is intialized")
}