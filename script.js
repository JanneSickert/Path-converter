const WELLCOME_MESSAGE = "Here you can insert the path from the windows folder with a "
+ "right-click and have it processed. When the path is displayed, another path can be "
+ "added with enter and all paths are formatted in the form that is common in most "
+ "programming languages."
const STANDART_MESSAGE = "Path:"
const ENTER_KEY = 13
var aWriter = null
var aMyStorage = null
var arr = []
var len = 0
var myCodeArray = null
var currentText = null

function writeInClipboard() {
	function copy2Clipboard(str) {
		ta = document.createElement('textarea');
		ta.value = str;
		document.body.appendChild(ta);
		ta.select();
		document.execCommand('copy');
		document.body.removeChild(ta);
	}
	copy2Clipboard(currentText)
}

function myExport(pWriter, pMyStorage) {
	aWriter = pWriter
	aMyStorage = pMyStorage
}

function arrayToString(arr) {
	var str = ""
	for (var i = 0; i < arr.length; i++) {
		str = str + arr[i]
	}
	return str
}

function store(id, value) {
	aMyStorage.setItem(id, value);
}

function restore(id) {
	var ret = aMyStorage.getItem(id);
	return ret
}

function resetStorage() {
	aMyStorage.clear()
}

function write(str) {
	aWriter.write(str)
}

function lineBreak() {
	write("<br><br>")
}

function writePath() {
	if (len == 1) {
		write(arr[0])
		currentText = arr[0]
	} else {
		myCodeArray = "{"
		for (var i = 0; i < len; i++) {
			myCodeArray = myCodeArray + "\"" + arr[i] + "\""
			if (i == (len - 1)) {
				myCodeArray = myCodeArray + "};"
			} else {
				myCodeArray = myCodeArray + ", "
			}
		}
		write(myCodeArray)
		currentText = myCodeArray
		lineBreak()
	}
}

function processed(val) {
	if (val === "help") {
		resetStorage()
		location.reload()
	} else {
		var valAsArray = []
		for (var i = 0; i < val.length; i++) {
			if (val[i] == '\"') {
				continue
			}
			if (val[i] == '\\') {
				valAsArray.push("/")
			} else {
				valAsArray.push(val[i])
			}
		}
		arr.push(arrayToString(valAsArray))
		len++
	}
	writePath()
}

function known() {
	processed(prompt(STANDART_MESSAGE))
}

function unconsciously() {// new user
	processed(prompt(WELLCOME_MESSAGE))
}

function start() {
	var state = restore(0)
	if (state == 1) {
		known()
	} else {
		unconsciously()
		store(0, 1)
	}
}

var setKey = function() {
	aWriter.onkeydown = function(event) {
		if (event.keyCode == ENTER_KEY) {
			start()
			writeInClipboard()
			setKey()
		}
	}
}

function main() {
	setKey()
	start()
	writeInClipboard()
}