/*
 * William Fleming, Eddie Galloway, Matt Steinkamp
 * CSC 434: Programming Languages
 *
 * Google Go Programming Language Research
 * Algorithm 1: Binary Search
 *
*/ 


package main

import "fmt"


/*
 * Performs a binary search on a sorted array of integers.
 * @param s  - slice - of sorted integers
 * @param t  - int - target value to search for
 * @return 1 - boolean - true if found, false if not
 * @return 2 - int - if found: index of target value, else: -1 
*/ 
func binarySearch(s []int, t int) (bool, int){
	// The median value of the search space is length of the space / 2
	var indexOfMedian = len(s) / 2
	var medianValue = s[indexOfMedian]

	fmt.Println("binarySearch() - Current Median: ", medianValue, "Target: ", t, "Search Space: ", s)

	// The median is larger than the target, search the smaller space next.
	if (medianValue > t){
		var newSearchSpace = s[:indexOfMedian]
		fmt.Println("Median is < Target - Next Search Space: ", newSearchSpace)
		binarySearch(newSearchSpace, t)
	} 
	
	// The median is less than the target, search the larger space next.
	if (medianValue < t){
		var newSearchSpace = s[indexOfMedian:]
		fmt.Println("Median is < Target - Next Search Space: ", newSearchSpace)
		binarySearch(newSearchSpace, t)
	} 
	
	// The median is the the target value, return.
	if (medianValue == t){
		fmt.Println("Target Found. Returning Index: ", indexOfMedian)
		return true, indexOfMedian
	}
	fmt.Println("here")
	// Nothing matched, target was not found.
	return false, 0
}


/*
 * Required Go function
 * Calls the binary search
*/
func main() {
	// Sorted slice of integers that comprise the "search space"
	var searchSpace = []int{0,5,13,19,22,41,55,68,72,81,98} 

	// The value being sought
	var target int = 55 

	// Call the search and return a boolean status, and the index of target (-1 if not found=false) 
	var found, index = binarySearch(searchSpace, target, ch)

	// Print to the console the index of the target if it was found
	if (found == true){
		fmt.Println(index)
	} else {
		fmt.Println("Target Not Found.")
	}
    

}