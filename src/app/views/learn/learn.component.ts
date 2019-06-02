import { Component, OnInit } from '@angular/core';
const WORDS = require("../../../assets/words.json");
const SECTIONS = require("../../../assets/section-mapping.json");

@Component({
	selector: 'app-learn',
	templateUrl: './learn.component.html',
	styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
	private sections: [] = SECTIONS;
	private words: [] = WORDS;

	constructor() { }
	
	ngOnInit() {
	}
	
}
