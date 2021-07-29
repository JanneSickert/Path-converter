var aWriter = null
var aStore = null
var aRestore = null

function myExport(writer, store, restore) {
	aWriter = writer
	aStore = store
	aRestore = restore
}

function store(id, value) {
	aStore(id, value)
}

function restore(id) {
	var ret = aRestore(id)
}

function test() {
	// Storage
	store("00", "AA")
	var returnValue = restore("00")
	alert(returnValue)
	// write Text
	aWriter("The Text")
}

function main() {// delete it
	test()
}