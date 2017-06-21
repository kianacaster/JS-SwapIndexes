Array.prototype.swap = function(index1, index2){
	var temp = this[index2]; // Temporary variable to store the value at index2
	this[index2] = this[index1]; // The value at index2 becomes the one at index1
	this[index1] = temp; // Since the value at index2 has been overridden, the value at index1 becomes the value we stored in the temporary variable.
	return this; // Return the array.
}
