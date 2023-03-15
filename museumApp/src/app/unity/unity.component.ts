import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.scss']
})
export class UnityComponent implements OnInit {
  gameInstance: any;

  constructor() { }

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
