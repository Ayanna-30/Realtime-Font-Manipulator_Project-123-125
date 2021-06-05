noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(540, 120);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function draw()
{
    document.getElementById("font_size").innerHTML = "The size of the text will be: " + difference + "px";

    background('#969A97');
    textSize(difference);
    fill('#F90093');
    text('Ayanna', noseX, noseY);
}

function gotPoses(results)
{
    if(results.length > 0);
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + " Nose Y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + " Right Wrist X = " + rightWristX + " Difference = " + difference);
    }
}