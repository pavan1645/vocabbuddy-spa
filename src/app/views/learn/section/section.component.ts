import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import WORDS from "../../../../assets/words.json";
import { Globals } from 'src/app/globals.js';
import { SharedService } from 'src/app/shared.service.js';

let progess = new Globals().progress;

@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
	
	private section: any;
	private sectionName: string = "";
	private wordDefs: any[] = WORDS;
	private secWords: any[] = [];
	private pendingWords: any[] = [];
	private currWord: any;
	private switchVal: number = -1;

	private removeCard: number = 0;
	private dataIndex: number[] = [0, 1, 2, 3];
	private defShow: boolean = false;
	private speakActive: boolean = false;

	constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }
	
	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			this.sectionName = params["section"];
			this.secWords = progess.find(s => s.name == this.sectionName).words;
			this.calc();
		})	
	}

	play() {
		const _this = this;
		_this.removeCard = 1;
		setTimeout(() => {
			_this.dataIndex.unshift(-1);
			setTimeout(() => {
				_this.dataIndex.shift();
				_this.removeCard = 0;
			}, 750);
		}, 750);
	}
	
	calc() {
		this.section = progess.find(s => s.name == this.sectionName);

		this.pendingWords = this.section.words.filter(f => f.isRemembered < 2);
				
		let randInt: number = Math.floor(Math.random() * this.pendingWords.length);

		if (this.currWord && this.currWord.wordIndex == this.pendingWords[randInt].wordIndex) return this.calc();		// Same word check
		
		// Determine switchVal value
		if (this.pendingWords.length < 4 && this.switchVal > -1) this.switchVal = (this.switchVal == 0) ? 1 : 0;
		if (this.pendingWords.length < 4 && this.switchVal == -1) this.switchVal = 0;

		// Using switchVal value to decide words array
		if (this.switchVal == 0) {
			randInt = Math.floor(Math.random() * this.secWords.length);
			this.currWord = this.secWords[randInt]
		} else {
			this.currWord = this.pendingWords[randInt];
		}
	}
	
	answer(val: number) {
		this.defShow = false;

		let rememberVal = this.currWord.isRemembered;
		if (val === -1) {
			this.currWord.isRemembered = ((rememberVal - 1) < 0) ? 0 : (rememberVal - 1);
		} else {
			this.currWord.isRemembered = ((rememberVal + 1) > 2) ? 2 : (rememberVal + 1);
		}
		
		this.sharedService.updateProgress(this.sectionName, this.currWord);
		this.calc();
		this.play();
	}

	showDef() {
		this.defShow = true;
	}

	readWord() {
		const _this = this;
		this.speakActive = true;

		const ssu = new SpeechSynthesisUtterance(this.wordDefs[this.currWord.wordIndex].word);
		ssu.rate = 0.75;

		window.speechSynthesis.speak(ssu);

		ssu.addEventListener("end", function () {
			_this.speakActive = false;			
		})
	}
	
}
