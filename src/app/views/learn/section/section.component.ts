import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Globals } from 'src/app/globals.js';
import { SharedService } from 'src/app/shared.service.js';
import { NgForm } from '@angular/forms';

const globals = new Globals();

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
	flipped: boolean = false;

	constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }
	
	ngOnInit() {
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

		}, 1000);		// card removing animation
	}
	
	calc(firstItr: boolean = false) {
		this.pendingWords = this.section.words.filter(f => f.isRemembered < 2);
				
		let randInt: number = Math.floor(Math.random() * this.pendingWords.length);

		if (this.currWord && this.currWord.wordIndex == this.pendingWords[randInt].wordIndex) return this.calc();		// Same word check
		
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

		this.stats();
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
	
	answer(val: number) {
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

	flipCard() { this.flipped = !this.flipped; }

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

	italicizeEg(wordDef): string {
		if (!wordDef.example) return "";
		const regex = new RegExp(wordDef.word.substring(0, wordDef.word.length - 2) + "\\w+");
		const match = wordDef.example.match(regex);
		if (!match) return "empty";
		return wordDef.example.replace(regex, "<em>" + match[0] +  "</em>");
	}

	resetSection() {
		this.sharedService.resetSection(this.section.name);
		this.ngOnInit();
	}
	
}
