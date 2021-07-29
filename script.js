const WELLCOME_MESSAGE = "Here you can insert the path from the windows folder with a "
+ "right-click and have it processed. When the path is displayed, another path can be "
+ "added with enter and all paths are formatted in the form that is common in most "
+ "programming languages."
const STANDART_MESSAGE = "Path:"
var aWriter = null
var aMyStorage = null

function myExport(pWriter, pMyStorage) {
	aWriter = pWriter
	aMyStorage = pMyStorage
}

function store(id, value) {
	aMyStorage.setItem(id, value);
}

function restore(id) {
	var ret = aMyStorage.getItem(id);
	return ret
}

function write(str) {
	aWriter.write(str)
}

function processed(val) {
	
}

function known() {
	processed(prompt(STANDART_MESSAGE))
}

function unconsciously() {// new user
	processed(prompt(WELLCOME_MESSAGE))
}

function main() {
	var state = restore(0)
	if (state == 1) {
		known()
	} else {
		unconsciously()
		store(0, 1)
	}
}