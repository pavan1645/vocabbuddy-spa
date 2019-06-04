import { Component, OnInit } from '@angular/core';
import SECTIONS from "../assets/section-mapping.json";
import { Globals } from './globals.js';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

	ngOnInit() {
		let progressJson = JSON.parse(localStorage.getItem("progress"));
		if (!progressJson) progressJson = SECTIONS;
		
		let globals = new Globals();
		globals.progress = progressJson;
	}

}
