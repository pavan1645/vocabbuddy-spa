import { Component, OnInit } from '@angular/core';
import SECTIONS from "../assets/section-mapping.json";
import WORDS from "../assets/words.json";
import { Globals } from './globals.js';
import { slideInAnimation } from './animations.js';
import { RouterOutlet } from '@angular/router';
import { PwaService } from './pwa.service.js';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [slideInAnimation]
})
export class AppComponent implements OnInit{

	updateAvailable: boolean = false;

	constructor(private pwaService: PwaService) {
		pwaService.updateAvailable.subscribe(e => this.updateAvailable = e);
	}
	
	ngOnInit() {
		let globals = new Globals();
		let progressJson = JSON.parse(localStorage.getItem("progress"));
		if (!progressJson) progressJson = SECTIONS;
		
		globals.progress = progressJson;

		let words = JSON.parse(localStorage.getItem("words"));
		if (!words) words = WORDS;

		globals.words = words;
	}

	prepareRoute(outlet: RouterOutlet) {
		return outlet.activatedRouteData['animation'] || "Default";
	}

	update(val: boolean) {
		setTimeout(() => {
			if (val) window.location.reload();
			else {
				this.updateAvailable = false;
				this.pwaService.updateAvailable.unsubscribe();
			}
		}, 400);
	}
}
