import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Globals } from 'src/app/globals.js';
import { SharedService } from 'src/app/shared.service.js';
import { NgForm } from '@angular/forms';

const globals = new Globals();

let touchstartPoints: number[] = [];
let screenWidth: number = 0;

let stop = false;

@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
	
	private sectionName: string = "";
	private secWords: any[] = [];
	private pendingWords: any[] = [];
	section: any;
	wordDefs: any[] = globals.words;
	currWord: any;
	oldWord: any;
	private switchVal: number = 0;


	counts: any = {}
	removeCard: number = 0;
	dataIndex: number[] = [0, 1, 2, 3];
	defShow: boolean = false;
	speakActive: boolean = false;
	fullscreen: boolean = false;
	answerVal: number = -1;
	transform: number[] = [0, 0, 0];									// translateX, translateY, rotate

	constructor(private activatedRoute: ActivatedRoute, public sharedService: SharedService) { }
	
	ngOnInit() {
		screenWidth = window.innerWidth;
		this.activatedRoute.params.subscribe(params => {
			this.sectionName = params["section"];
			this.secWords = globals.progress.find(s => s.name == this.sectionName).words;
			this.section = globals.progress.find(s => s.name == this.sectionName);
			this.calc(true);
		})	
	}

	play() {
		const _this = this;
		_this.removeCard = 1;
		
		setTimeout(() => {
			_this.removeCard = 2;
			_this.dataIndex.unshift(-1);

			setTimeout(() => {
				_this.removeCard = 3;
				_this.dataIndex.shift();

				setTimeout(() => {
					_this.removeCard = 0;
				}, 100);

			}, 300);	// card pushed up animation

		}, 750);		// card removing animation
	}
	
	calc(firstItr: boolean = false) {
		this.stats();
		this.pendingWords = this.section.words.filter(f => f.isRemembered < 2);
		if (this.pendingWords.length == 0) return;
				
		let randInt: number = Math.floor(Math.random() * this.pendingWords.length);

		// Same word check
		if (this.pendingWords.length > 2 && this.currWord && this.currWord.wordIndex == this.pendingWords[randInt].wordIndex) return this.calc();
		
		// Determine switchVal value
		if (this.pendingWords.length >= 4) this.switchVal = 0;
		else this.switchVal = (this.switchVal == 0) ? 1 : 0;

		// Using switchVal value to decide words array
		if (this.switchVal == 1) {
			randInt = Math.floor(Math.random() * this.secWords.length);
			this.currWord = this.secWords[randInt]
		} else {
			this.currWord = this.pendingWords[randInt];
		}

		if (firstItr) this.oldWord = JSON.parse(JSON.stringify(this.currWord));
		setTimeout(() => {
			this.oldWord = JSON.parse(JSON.stringify(this.currWord));
		}, 1000);
	}
	
	stats() {
		const total = this.section.words.length;
		// c = count, p = percent
		this.counts.lc = this.section.words.filter(f => f.isRemembered == 0).length;
		this.counts.lp = (this.counts.lc / total) * 100;
		this.counts.rc = this.section.words.filter(f => f.isRemembered == 1).length;
		this.counts.rp = (this.counts.rc / total) * 100;
		this.counts.mc = this.section.words.filter(f => f.isRemembered == 2).length;
		this.counts.mp = (this.counts.mc / total) * 100;
	}
	
	answer(val: number, rippleWait: boolean = true) {
		if (stop) return;
		stop = true;
		setTimeout(() => { stop = false }, 1300);

		this.answerVal = val;

		let rippleTime = 300;
		if (!rippleWait) rippleTime = 0;
		

		setTimeout(() => {
			setTimeout(() => { this.defShow = false; }, 1000);				// let def be shown till card is removed
			
			let rememberVal = this.currWord.isRemembered;
			if (val === -1) {
				this.currWord.isRemembered = ((rememberVal - 1) < 0) ? 0 : (rememberVal - 1);
			} else {
				this.currWord.isRemembered = ((rememberVal + 1) > 2) ? 2 : (rememberVal + 1);
			}
			
			this.sharedService.updateProgress(this.sectionName, this.currWord);
			this.play();
			this.calc();
		}, rippleTime);															// ripple effect
	}

	showDef() {
		if (!this.fullscreen) this.defShow = true;
	}

	readWord(e: TouchEvent) {
		e.stopPropagation();
		const _this = this;
		this.speakActive = true;

		const ssu = new SpeechSynthesisUtterance(this.wordDefs[this.currWord.wordIndex].word);
		ssu.rate = 0.75;

		window.speechSynthesis.speak(ssu);

		ssu.addEventListener("end", function () {
			_this.speakActive = false;			
		})
	}

	showFullscreen(e: TouchEvent) { e.stopPropagation(); this.fullscreen = !this.fullscreen; }

	addNote(form: NgForm) {
		let wordNotes: string[] = this.wordDefs[this.oldWord.wordIndex].notes;
		if (!wordNotes) wordNotes = [];
		wordNotes.push(form.value.note);
		this.sharedService.updateWord(this.oldWord.wordIndex, wordNotes);
		form.reset();
	}

	deleteNote(i: number) {
		let wordNotes: string[] = this.wordDefs[this.oldWord.wordIndex].notes;
		wordNotes.splice(i, 1);
		this.sharedService.updateWord(this.oldWord.wordIndex, wordNotes);
	}


	touchstart(e: TouchEvent) {
		touchstartPoints[0] = e.touches[0].screenX;
		touchstartPoints[1] = e.touches[0].screenY;
	}

	touchmove(e: TouchEvent) {
		if (this.fullscreen) return;
		if (!touchstartPoints[0] || !touchstartPoints[1]) return;
		
		let currX = e.touches[0].screenX;
		let currY = e.touches[0].screenY;

		let xDiff = touchstartPoints[0] - currX;
		let yDiff = touchstartPoints[1] - currY;

		if (yDiff > 0) {
			
			if (yDiff > 100) {										// play animamtion
				if (xDiff < 0) this.answer(1, false);				// up right
				if (xDiff > 0) this.answer(-1, false)				// up left

				this.touchend();									// force touchend

			} else {
				this.transform[1] = yDiff * -1;
				const totalTranslate = screenWidth * 2;
				this.transform[0] = Math.round(this.transform[1] * 0.5);
				this.transform[2] = Math.round(this.transform[1] / totalTranslate * 60);

				if (xDiff < 0) {									// up right
					this.transform[0] = this.transform[0] * -1;
					this.transform[2] = this.transform[2] * -1;
				}
				
			}
		}
	}

	touchend(e?: TouchEvent) {
		setTimeout(() => {
			this.transform = [0, 0, 0];
			touchstartPoints = [];
		}, 100);
	}

	italicizeEg(wordDef): string {
		if (!wordDef.example) return "";
		const regex = new RegExp(wordDef.word.substring(0, wordDef.word.length - 2) + "\\w+");
		const match = wordDef.example.match(regex);
		if (!match) return "empty";
		return wordDef.example.replace(regex, "<em>" + match[0] +  "</em>");
	}

	splitString(str: string[]): string {
		return (str) ? str.toString().replace(/,/g, ", ") : "";
	}

	resetSection() {
		this.sharedService.resetSection(this.section.name);
		this.ngOnInit();
	}
	
}
