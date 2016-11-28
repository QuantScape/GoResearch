/*
 * William Fleming, Eddie Galloway, Matt Steinkamp
 * CSC 434: Programming Languages
 *
 * Google Go Programming Language Research
 * Algorithm 2: Merge Sort
 *
*/ 

// slice is a key golang data structure works as an abscration of an Array
// mergesort takes a single slice as a input parameter and Reuters a single slice
func MergeSort(slice []int) []int { 
	//if the slice is less than 2 return the slice
	if len(slice) < 2 { 
		return slice
	}
	//take length of the slice and picks the center for the merge
	mid := (len(slice)) / 2 
	// recursively call mergesort with the slice sliced on the left and the right and merge them together
	return Merge(MergeSort(slice[:mid]), MergeSort(slice[mid:]))
}
// merge takes two int arrays and returns a single int array
func Merge(left, right []int) []int {
	size := len(left)+len(right)
	// i and j will be used to index into the slice and keep track of which index we are at
	i := 0 
	j:= 0
	// create a new slice to avoid destroying the unsorted slice 
	// we use make because we know the size of the slice and it will allocate memory for the slice
	slice := make([]int, size, size)
	// loop through every item in both slices
	// and put the smallest from both slices into the new slice
	for k := 0; k < size; k++ {
		if i > len(left)-1 && j <= len(right)-1 {
			slice[k] = right[j]
			j++
		} else if j > len(right)-1 && i <= len(left)-1 {
			slice[k] = left[i]
			i++
		} else if left[i] < right[j] {
			slice[k] = left[i]
			i++
		} else {
			slice[k] = right[j]
			j++
		}
	}
	// return our now sorted single slice
	return slice
}