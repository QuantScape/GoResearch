package main

import (
  "fmt"
  "math/rand"
  "time"
)


func quicksort(a []int) []int {

  // If list only contains one item, BOOM already sorted
  if len(a) < 2 { return a }

  // Get first and last index
  left, right := 0, len(a) - 1

  // Pick a pivot
  pivotIndex := rand.Intn(10) % len(a)

  // Move the pivot all the way to the right
  a[pivotIndex], a[right] = a[right], a[pivotIndex]

  // Move elements smaller than the pivot to the left
  for i := range a {
    if a[i] < a[right] {
      a[i], a[left] = a[left], a[i]
      left++
    }
  }

  // Place the pivot after the last smaller element
  a[left], a[right] = a[right], a[left]

  // Go down the recursion rabbit hole
  quicksort(a[:left])
  quicksort(a[left + 1:])


  return a
}

func main() {
  a := make([]int, 10)

  for i := 0; i < 10; i++ {
    a[i] = rand.Intn(10)
    fmt.Printf("%d ", a[i])
  }

  fmt.Printf("\nSorting array...\n")

  t0 := time.Now()
  quicksort(a)
  t1 := time.Now()

  for i := 0; i < len(a); i++ {
    fmt.Printf("%d ", a[i])
  }

  fmt.Printf("\nSort of %v integers took %v to run.\n", len(a), t1.Sub(t0))

  
}
