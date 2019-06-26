export class Globals {
	private static progressJson: any[];
	private static words: any[];

	constructor() {
		if (localStorage.getItem("progress")) {
			localStorage.removeItem("progress");
			localStorage.removeItem("words");
		}
	}

	get progress() {
		return [...Globals.progressJson];
	}

	set progress(val) {
		console.log("setter called");
		
		Globals.progressJson = val;
		localStorage.setItem("progress2", JSON.stringify(Globals.progressJson));
	}

	get words() {
		return [...Globals.words];
	}

	set words(val) {
		console.log("words setter called");
		
		Globals.words = val;
		localStorage.setItem("words2", JSON.stringify(Globals.words));
	}
}