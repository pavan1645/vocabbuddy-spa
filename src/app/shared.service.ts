import { Injectable } from '@angular/core';
import { Globals } from './globals.js';
import ogProgress from "../assets/section-mapping.json";
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

const globals = new Globals();
declare let ga: any;


@Injectable({
	providedIn: 'root'
})
export class SharedService {
	
	constructor(private location: Location, private title: Title, private router: Router) { }
	
	updateProgress(sectionName: string, word: any): void {
		let progress = globals.progress;

		const sectionIndex = progress.findIndex(s => s.name == sectionName);
		const wordIndex = progress[sectionIndex].words.findIndex(w => w.wordIndex == word.wordIndex);
		progress[sectionIndex].words[wordIndex] = {...word};
		
		globals.progress = progress;
	}

	updateWord(wordIndex: number, notes: any): void {
		let words = globals.words;
		// const wordIndex = words.findIndex(w => w.word == word);
		words[wordIndex].notes = notes;

		globals.words = words;
	}

	updateScore(sectionName: string, score: number) {
		let progress = globals.progress;
		const sectionIndex = progress.findIndex(s => s.name == sectionName);
		progress[sectionIndex]["score"] = score;

		globals.progress = progress;
	}

	resetSection(sectionName: string) {
		let progress = globals.progress;
		const sectionIndex = ogProgress.findIndex(s => s.name == sectionName);
		progress[sectionIndex] = ogProgress[sectionIndex];
		
		globals.progress = progress;
	}

	setSeo(params: any = {}) {
		if (!params.title) params["title"] = "Vocabbuddy - A Flashcard based Vocab Trainer";
		this.title.setTitle(params.title);


		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				ga('set', 'page', event.urlAfterRedirects);
				ga('send', 'pageview');
			}
		});
	}

	goBack() {
		this.location.back();
	}

}
