import { Component, OnInit } from '@angular/core';
import SECTIONS from "../assets/section-mapping.json";
import WORDS from "../assets/words.json";
import { Globals } from './globals.js';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

	ngOnInit() {
		let globals = new Globals();
		let progressJson = JSON.parse(localStorage.getItem("progress"));
		if (!progressJson) progressJson = SECTIONS;
		
		globals.progress = progressJson;

		let words = JSON.parse(localStorage.getItem("words"));
		if (!words) words = WORDS;

		globals.words = words;
	}

}
