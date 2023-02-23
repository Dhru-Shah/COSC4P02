import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.scss']
})
export class UnityComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    //grabbing the html elements to update the unity loader
    var container: HTMLElement = document.querySelector("#unity-container");
    var canvas: HTMLElement = document.querySelector("#unity-canvas");
    var loadingBar: HTMLElement = document.querySelector("#unity-loading-bar");
    var progressBarFull: HTMLElement = document.querySelector("#unity-progress-bar-full");
    var fullscreenButton: HTMLElement = document.querySelector("#unity-fullscreen-button");

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
      canvas.style.width = "960px";
      canvas.style.height = "600px";
    }

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
}
