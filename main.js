song="";
rightWristscore=0;
leftWristscore=0;
rightWristx=0;
rightWristy=0;
leftWristx=0;
leftWristy=0;

function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotposes);
}

function draw(){
    image(video,0,0,400,300);
}

function play(){
    song.play(1);
    song.setVolume(1);
    song.rate(1);
}

function preload(){
    song=loadSound("music.mp3");
}


function modelLoaded(){
    console.log("posenet is initialized");
}


function gotposes(results){
    if (results.length>0){
    rightWristscore=results[0].pose.keypoints[10].score;
    leftWristscore=results[0].pose.keypoints[9].score;
    rightWristx=results[0].pose.rightWrist.x;
    rightWristy=results[0].pose.rightWrist.y;
    leftWristx=results[0].pose.leftWrist.x;
    leftWristy=results[0].pose.leftWrist.y;
    
    }
    else{
        console.log("ur code has errors");
    }
}