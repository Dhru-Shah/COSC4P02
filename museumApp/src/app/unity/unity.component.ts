import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
			.dark-modal .modal-content {
				background-color: #292b2c;
				color: white;
			}
			.dark-modal .close {
				color: white;
			}
			.light-blue-backdrop {
				background-color: #5cb3fd;
			}
		`,
  ],
})


export class UnityComponent implements OnInit {
  gameInstance: any;

  open: boolean = true;
  dismissible: boolean = true;
  timeout: number = 50000;
  closeResult: string;
  @ViewChild('modalButton') modalButton: ElementRef<HTMLElement>;

  constructor(private modalService: NgbModal) { }

  log(alert: any) {
    console.log('alert message closed');
  }
  ngOnInit(): void {

    this.triggerFalseClick();

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

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  triggerFalseClick() {
    setTimeout(() => {
      this.modalButton.nativeElement.click();
    }, 100);
  }
}