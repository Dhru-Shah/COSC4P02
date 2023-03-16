//grabbing the html elements to update the unity loader
var container = document.querySelector("#unity-container");
var canvas = document.querySelector("#unity-canvas");
var loadingBar = document.querySelector("#unity-loading-bar");
var progressBarFull = document.querySelector("#unity-progress-bar-full");
var fullscreenButton = document.querySelector("#unity-fullscreen-button");

//grabbing the data built by unity/webgl
var buildUrl = `/assets/Build`;
var loaderUrl = buildUrl + "/Room.loader.js";
var config = {
    dataUrl: buildUrl + "/Room.data",
    frameworkUrl: buildUrl + "/Room.framework.js",
    codeUrl: buildUrl + "/Room.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "Room",
    productVersion: "0.1",
};

//find out different sizes
if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
    document.getElementsByTagName('head')[0].appendChild(meta);
    container.className = "unity-mobile";
    canvas.className = "unity-mobile";
} else {
    //default sizes for desktop
    canvas.style.width = "960px";
    canvas.style.height = "600px";
}

//loading bar
loadingBar.style.display = "block";

//script that is displaying the build component from webgl
var script = document.createElement("script");
//instance of an unity webgl
var mainUnityInstance;

//load the script file from webgl
script.src = loaderUrl;
script.id = 'unity';

const data = [
    { 'Name': 'Sphere', 'Data': 'This is Sphere. Invented in 2001.' },
    { 'Name': 'Artillery_V1', 'Data': 'This is Artillery_V1. Sounds very bad when fired.' },
    { 'Name': 'BoatImage', 'Data': 'This is a war Boat. Boat has a hole init.' },
    { 'Name': 'CycleImage', 'Data': 'This is a homologicus team cycle but they dont know how to ride it.' },
    { 'Name': 'Artillery_V2', 'Data': 'This is a homologicus artillery used to kill insects.' },
    { 'Name': 'Mensa01', 'Data': 'This is Mensa01, accidently dropped from sky.' }
]

script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
        progressBarFull.style.width = 100 * progress + "%";
    }).then((unityInstance) => {
        loadingBar.style.display = "none";
        fullscreenButton.onclick = () => {
            unityInstance.SetFullscreen(1);
        };
        mainUnityInstance = unityInstance
    }).catch((message) => {
        alert(message);
    });
};
//append the loaded script to the html body
document.body.appendChild(script);