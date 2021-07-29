const WELLCOME_MESSAGE = "Here you can insert the path from the windows folder with a "
+ "right-click and have it processed. When the path is displayed, another path can be "
+ "added with enter and all paths are formatted in the form that is common in most "
+ "programming languages."
const STANDART_MESSAGE = "Path:"
const KEY = "00"

var aWriter = null
var aStore = null
var aRestore = null

function myExport(writer, store, restore) {
	aWriter = writer
	aStore = store
	aRestore = restore
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
	var state = aRestore(KEY)
	alert(state)
	if (state === "1") {
		known()
	} else {
		unconsciously()
		aStore(KEY, "1")
	}
}