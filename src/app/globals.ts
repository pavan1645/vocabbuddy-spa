export class Globals {
	private static progressJson;

	get progress() {
		return Globals.progressJson;
	}

	set progress(val) {
		Globals.progressJson = val;
		localStorage.setItem("progress", JSON.stringify(Globals.progressJson));
	}
}