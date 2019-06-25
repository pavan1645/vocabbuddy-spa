import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals.js';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

let globals = new Globals();
const progress = globals.progress;
const words = globals.words;

@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

	section: any;
	wordDefs: any[] = words;
	currentScore: number = 0;
	bestScore: number = 0;
	remainingWords: any[];
	currentWord: any = {
		wordIndex: -1,
		defs: []
	}


	correctIndex: number = -1;
	answeredIndex: number = -1;
	animating: boolean = false;
	showNext: boolean = false;
	showScore: boolean = false;

	
	constructor(private activatedRoute: ActivatedRoute, public sharedService: SharedService) {}
	
	ngOnInit() {
		this.activatedRoute.params.subscribe(p => {
			this.section = progress.find(s => s.name == p.section);
			this.reset();
			this.calcWord();
		})
	}

	calcWord() {
		this.answeredIndex = -1, this.correctIndex = -1;
		this.showNext = false;

		let randIndex = Math.floor(Math.random() * this.remainingWords.length);
		this.currentWord.wordIndex = this.remainingWords[randIndex].wordIndex;

		this.currentWord.defs = [];
		this.currentWord.defs.push(this.wordDefs[this.currentWord.wordIndex].definition);
		
		while (this.currentWord.defs.length < 4) {
			randIndex = Math.floor(Math.random() * this.section.words.length);
			const wordIndex = this.section.words[randIndex].wordIndex;
			const definition = this.wordDefs[wordIndex].definition;

			if (this.currentWord.defs.indexOf(definition) === -1) this.currentWord.defs.push(definition);
		}

		this.shuffleArray(this.currentWord.defs);
	}


	answer(i: number) {
		const correctDef = this.wordDefs[this.currentWord.wordIndex].definition;

		this.answeredIndex = i;
		this.correctIndex = this.currentWord.defs.indexOf(correctDef);

		if (i == this.correctIndex) this.currentScore++;

		if (this.currentScore > this.bestScore) this.sharedService.updateScore(this.section.name, this.currentScore);

		this.remainingWords.splice(this.remainingWords.findIndex(w => w.wordIndex == this.currentWord.wordIndex), 1);

		this.showNext = true;
	}
	
	next() {
		if (this.remainingWords.length == 0) {
			this.showNext = false;
			return this.showScore = true
		};

		this.animating = true;
		setTimeout(() => {
			this.calcWord();
		}, 500);
		setTimeout(() => {			
			this.animating = false;
		}, 1300);
	}
	
	shuffleArray(array: string[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	reset() {
		this.remainingWords = [...this.section.words];

		this.currentScore = 0;
		this.bestScore = this.section.score;
		if (this.bestScore === undefined) this.bestScore = 0;

		this.showScore = false;
	}
}
