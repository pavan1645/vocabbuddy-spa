import { Injectable } from '@angular/core';
import { Globals } from './globals.js';

const globals = new Globals();

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	
	constructor() { }
	
	updateProgress(sectionName, word) {
		let progress = globals.progress;

		const sectionIndex = progress.findIndex(s => s.name == sectionName);
		const wordIndex = progress[sectionIndex].words.findIndex(w => w.wordIndex == word.wordIndex);
		progress[sectionIndex].words[wordIndex] = {...word};
		
		globals.progress = progress;
	}

}
