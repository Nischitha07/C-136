status = 0;
function preload()
{
    video = createVideo('video.mp4');
    video.hide();
}
function setup()
{
    canvas = createCanvas(400,300);
    canvas.center();
}
function draw()
{
    image(video,0,0,400,300);
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status_btn").innerHTML = "Status : Detecting Objects";
}
function modelLoaded()
{
    console.log("Cocossd has initialized");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);

}