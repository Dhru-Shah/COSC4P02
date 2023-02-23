import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css']
})
export class UnityComponent implements OnInit, OnDestroy {

  gameInstance: any;
  progress = 0;
  isReady = false;

  @Input() version: number = 1;

  constructor() { }

  ngOnInit(): void {
    // const loader = (window as any).UnityLoader;

    // this.gameInstance = loader.instantiate('gameContainer', `/assets/Build1/CraigGilchristUnity.json`, {
    //   onProgress: (gameInstance: any, progress: number) => {
    //     this.progress = progress;
    //     if (progress === 1) {
    //       this.isReady = true;
    //     }
    //   }
    // });
    var container = document.querySelector("#unity-container");
    var canvas: HTMLElement = document.querySelector("#unity-canvas");
    var loadingBar: HTMLElement = document.querySelector("#unity-loading-bar");
    var progressBarFull: HTMLElement = document.querySelector("#unity-progress-bar-full");
    var fullscreenButton: HTMLElement = document.querySelector("#unity-fullscreen-button");
    var warningBanner = document.querySelector("#unity-warning");

    // Shows a temporary message banner/ribbon for a few seconds, or
    // a permanent error message on top of the canvas if type=='error'.
    // If type=='warning', a yellow highlight color is used.
    // Modify or remove this function to customize the visually presented
    // way that non-critical warnings and error messages are presented to the
    // user.
    // function unityShowBanner(msg: string, type: string) {
    //   function updateBannerVisibility() {
    //     warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
    //   }
    //   var div = document.createElement('div');
    //   div.innerHTML = msg;
    //   warningBanner.appendChild(div);
    //   if (type == 'error') div.style = 'background: red; padding: 10px;';
    //   else {
    //     if (type == 'warning') div.style = 'background: yellow; padding: 10px;';
    //     setTimeout(function () {
    //       warningBanner.removeChild(div);
    //       updateBannerVisibility();
    //     }, 5000);
    //   }
    //   updateBannerVisibility();
    // }

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
      // showBanner: unityShowBanner,
    };

    canvas.style.width = "960px";
    canvas.style.height = "600px";

    loadingBar.style.display = "block";

    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      createUnityInstance(canvas, config, (progress: number) => {
        progressBarFull.style.width = 100 * progress + "%";
      }).then((unityInstance: { SetFullscreen: (arg0: number) => void; }) => {
        loadingBar.style.display = "none";
        fullscreenButton.onclick = () => {
          unityInstance.SetFullscreen(1);
        };
      }).catch((message: any) => {
        alert(message);
      });
    };
    document.body.appendChild(script);
  }

  ngOnDestroy(): void {
    this.gameInstance.Quit();
  }

  // startStopRotating() {
  //   this.gameInstance.SendMessage('Director', 'StartStopRotating');
  // }

  // startStopAnimation() {
  //   this.gameInstance.SendMessage('Director', 'StartStopAnimation');
  // }

  // setDistance(distance: number) {
  //   this.gameInstance.SendMessage('Director', 'SetDistance', distance);
  // }

}
