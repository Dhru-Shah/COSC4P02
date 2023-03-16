import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.scss']
})
export class UnityComponent implements OnInit {
  gameInstance: any;

  open: boolean = true;
  dismissible: boolean = true;
  timeout: number = 50000;

  constructor() { }
  log(alert: any) {
    console.log('alert message closed');
  }
  ngOnInit(): void {

    //grabbing the script to load the unity webgl
    var buildUrl = `/assets/Build`;
    var loaderUrl = buildUrl + "/LoadScript.js";

    //script that is displaying the build component from webgl
    var scriptNew = document.createElement("script");

    //load the script file for webgl
    scriptNew.src = loaderUrl;

    //add to body
    document.body.appendChild(scriptNew);
  }

  ngOnDestroy(): void {
    this.gameInstance = null;
  }
}
