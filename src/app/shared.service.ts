import { Injectable } from '@angular/core';
import { Globals } from './globals.js';
import ogProgress from "../assets/section-mapping.json";

const globals = new Globals();

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	
	constructor() { }
	
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

}
