function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true, video:false});
    classifier = ml5.soundClassifer('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', {probabilityThreshold: 0.7}, modelReady);
}
function modelReady() {
    classifer.classify(gotResults);
}
var dog = 0;
var cat = 0;