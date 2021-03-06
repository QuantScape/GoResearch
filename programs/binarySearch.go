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
 * Executed at Runtime, Calls the Binary Search
*/
func main() {
	searchSpace := []int {1,2,3,4,5,6,7,8,9,10}
	fmt.Println(binarySearch(searchSpace, 2))
}
/*
 * Performs a Binary Search on a sorted slice of integers.
*/ 
func binarySearch(space []int, target int) (int){
	// If target in space, min will hold index
	min := 0 
	max := len(space) - 1
	// max will eventually cause the condition to be false 
	for (min <= max) {
		median := (min + max) / 2
		if space[median] < target{
			min = median + 1  // Increment min
		} else {
			max = median - 1  // Decrement max
		}
	}
	if min == len(space) || space[min] != target{
		return -1
	} else {
		return min
	}
}

