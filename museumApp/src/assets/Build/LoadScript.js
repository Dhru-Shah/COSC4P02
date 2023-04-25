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

//show joystick
const joystick = { show: true }

//show joystick
const closeUnity = { close: false }

//find out different sizes
if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
    document.getElementsByTagName('head')[0].appendChild(meta);
    container.className = "unity-mobile";
    canvas.className = "unity-mobile";
} else {
    joystick.show = false;
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
    { 'Name': 'VictoriaBust', 'Date': '1990', 'Description': 'This is Description for Victoria Bust.' },
    { 'Name': 'Sphere', 'Date': '1990', 'Description': 'This is Description for Sphere.' },
    { 'Name': 'Artillery_V2', 'Date': '1990', 'Description': 'This is Description for Artillery_V2.' },
    { 'Name': 'Artillery_V1', 'Date': '1990', 'Description': 'This is Description for Artillery_V1.' },
    { 'Name': 'letter', 'Date': '1990', 'Description': 'This is Description for letter.' },
    { 'Name': 'Coin1', 'Date': '1990', 'Description': 'This is Description for Coin1.' },
    { 'Name': 'Coin2', 'Date': '1990', 'Description': 'This is Description for Coin2.' },
    { 'Name': 'Coin3', 'Date': '1990', 'Description': 'This is Description for Coin3.' },
    { 'Name': 'Coin4', 'Date': '1990', 'Description': 'This is Description for Coin4.' },
    { 'Name': 'Coin5', 'Date': '1990', 'Description': 'This is Description for Coin5.' },
    { 'Name': 'Coin6', 'Date': '1990', 'Description': 'This is Description for Coin6.' },
    { 'Name': 'Uniform', 'Date': '1990', 'Description': 'This is Description for Uniform1.' },
    { 'Name': 'Uniform2', 'Date': '1990', 'Description': 'This is Description for Uniform2.' },
    { 'Name': 'Image2', 'Date': '1990', 'Description': 'This is Description for Potrait.' },
    { 'Name': 'Painting1', 'Date': '1990', 'Description': 'This is Description for Painting1.' },
    { 'Name': 'Painting2', 'Date': '1990', 'Description': 'This is Description for Painting2.' },
    { 'Name': 'Painting3', 'Date': '1990', 'Description': 'This is Description for Painting3.' },
    { 'Name': 'Painting4', 'Date': '1990', 'Description': 'This is Description for Painting4.' },
    { 'Name': 'Painting5', 'Date': '1990', 'Description': 'This is Description for Painting5.' },
    { 'Name': 'Painting6', 'Date': '1990', 'Description': 'This is Description for Painting6.' },
    { 'Name': 'Painting7', 'Date': '1990', 'Description': 'This is Description for Painting7.' },
    { 'Name': 'Painting8', 'Date': '1990', 'Description': 'This is Description for Painting8.' },
    { 'Name': 'Painting9', 'Date': '1990', 'Description': 'This is Description for Painting9.' },
    { 'Name': 'Painting10', 'Date': '1990', 'Description': 'This is Description for Painting10.' },
    { 'Name': 'Painting11', 'Date': '1990', 'Description': 'This is Description for Painting11.' },
    { 'Name': 'Painting12', 'Date': '1990', 'Description': 'This is Description for Painting12.' },
    { 'Name': 'Painting13', 'Date': '1990', 'Description': 'This is Description for Painting13.' },
    { 'Name': 'Painting14', 'Date': '1990', 'Description': 'This is Description for Painting14.' },
    { 'Name': 'Painting15', 'Date': '1990', 'Description': 'This is Description for Painting15.' },
    { 'Name': 'Painting16', 'Date': '1990', 'Description': 'This is Description for Painting16.' },
    { 'Name': 'Painting17', 'Date': '1990', 'Description': 'This is Description for Painting17.' },
    { 'Name': 'Painting18', 'Date': '1990', 'Description': 'This is Description for Painting18.' },
    { 'Name': 'Painting19', 'Date': '1990', 'Description': 'This is Description for Painting19.' },
    { 'Name': 'Potrait3', 'Date': '1990', 'Description': 'This is Description for Potrait3.' },
    { 'Name': 'Coinboard', 'Date': '1990', 'Description': '' },
    { 'Name': 'Amphora02Stand', 'Date': '1990', 'Description': ' of Amphora02Stand' },
    { 'Name': 'Lucerna', 'Date': '1990', 'Description': 'for the piece of Lucerna' },
    { 'Name': 'Amphora01', 'Date': '1990', 'Description': 'for the piece of Amphora01' },
    { 'Name': 'Mensa01', 'Date': '1990', 'Description': 'for the piece of Mensa01' },
]

console.log(this.artifacts);

document.addEventListener('click', function () {
    if (window.location.pathname != "/Unity") {
        //var events = mainUnityInstance.Module.getJSEvents();
        // if (events) {
        //     console.log("removing all events...");
        //     events.removeAllEventListeners();
        //     mainUnityInstance.Quit(function () {
        //         console.log("done!");
        //     });
        // }
        closeUnity.close = true;
        //mainUnityInstance = null;
    }

})
script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
        progressBarFull.style.width = 100 * progress + "%";
    }).then((unityInstance) => {
        loadingBar.style.display = "none";
        fullscreenButton.onclick = () => {
            unityInstance.SetFullscreen(1);
        };
        mainUnityInstance = unityInstance
    })
};

// //append the loaded script to the html body
document.body.appendChild(script);
;