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

function resetStorage() {
	aMyStorage.clear()
}

function write(str) {
	aWriter.write(str)
}

function test() {
	store(1, 32)		// 1 is the key 32 the value
	alert(restore(1))	// With the key I can get the value.
	write("AAA")
}

function main() {		// delete it
	test()
}
