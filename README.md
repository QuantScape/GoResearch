# Go CheatSheet

Variables are statically typed (regardless of how they are initialized)

Variables must start with a letter, can be followed by numbers & underscores

The below examples use the package "fmt" you must import it to use the output functionality.

```Go
package main
import "fmt"
...
```

Variable declaration
```Go
// Integers
var x int = 40

// Floats
var y float64 = 40.123456

// Strings
var s string = "string"

// Booleans
var b bool = true

// Dynamic type declartion
z := 40  // Go assigns z the type int *
```

Const declaration
```Go
const x int = 10
```

Standard Printing to the Console
```Go
z := 10
// Standard console output
fmt.Println("Print the value:", z)  // Output - Print the value: 40
// Arithmetic within the print statement
fmt.Println(z + z)                  // Output - 20

```

Special Printing to the Console
```Go
z := 10
// Type
fmt.Printf("%T \n", z)  // Output - int
// Decimal
fmt.Printf("%d \n", z)  // Output - 10
// Binary
fmt.Printf("%b \n", z)  // Output - 1010
```

Basic arithmetic
```Go
z := 10
z + z   // 20
z - z   // 0 
z * z   // 100
z / z   // 1
z % z   // 0
```

String Operations
```Go
s1 := "Hello"
s2 := "World"
// String length
len(s1)        // Output - 5
// String concatenation
s1 + s2         // HelloWorld
s1 + " " + s2   // Hello World               
```

Boolean Operations
```Go
true && false  // false
true || false  // true
!false         // true
```

For loops
``` Go
// Shorthand 
for i:= 0; i<5; i++{
 	fmt.Print(i," ")
 }
 
// Factorial Example
i := 1
z := 1
for i < 10 {
	z = z * i
 	i++
}
fmt.Println(z) // Output - 362880
```

Equalities
```Go
1 == 2   // false 
1 != 2   // true
1 >  2   // false
1 <  2   // true
1 >= 2   // false
1 <= 2   // true
```

Conditionals
```Go
x := 2
if x == 1{
	fmt.Println("condition 1")
} else if x > 1{
	fmt.Println("condition 2")
} else {
	fmt.Println("condition 3")
} // Output - Condition 2  

z := 2
switch z {
	case 1  :  fmt.Println("Case 1")
	case 2  :  fmt.Println("Case 2")
	default :  fmt.Println("Default case") 
}
```

Arrays
```Go
// Array Initialization - Long Way
var favAnimals[5] string 
favAnimals[0] = "Cat"
favAnimals[1] = "Dog"
favAnimals[2] = "Bird"
favAnimals[3] = "Fox"
favAnimals[4] = "Giraffe"
fmt.Println(favAnimals[0])  // Output - Cat

// Array Initialization - Short Way
favAnimals := [5]string {"Cat", "Dog", "Bird", "Fox", "Giraffe"}
fmt.Println(favAnimals[0]) // Output - Cat

// Print an Array
for _, value := range favAnimals {
	 fmt.Print(value, " ")
}  // Output - Cat Dog Bird Fox Giraffe
```

Slices
```Go
// Slices are like arrays without having to maintain a fixed amount of elements
favAnimals := []string {"Cat", "Dog", "Bird", "Fox", "Giraffe"}
favAnimals_subset := favAnimals[3:5]  // [inclusive:exclusive]

for _, values := range favAnimals{
	  fmt.Print(values + " ")
}  // Output - Cat Dog Bird Fox Giraffe

for _, values := range favAnimals_subset{
 	  fmt.Print(values + " ")
}  // Output - Fox Giraffe

// Create a new slice of strings with 5 empty strings, and max number of 10 elements
newSlice := make([]string, 5, 10) 
newSlice = append(newSlice, "Cat", "Dog", "Bird", "Fox", "Giraffe")
```

Maps
```Go
// Maps are like dictionaries, (key - value)
daysOfWeek := make(map[string] int)
daysOfWeek["Sunday"] = 1
daysOfWeek["Monday"] = 2
daysOfWeek["Tuesday"] = 2
fmt.Println(len(daysOfWeek))      // Output - 3
fmt.Println(daysOfWeek["Sunday"]) // Output - 1
delete(daysOfWeek, "Monday")     
fmt.Println(len(daysOfWeek))      // Output - 2
```

Functions
```Go
/*
 * Return the length and sum of a slice of integers
 * :param: nums ([]int)
 * :return1: sum of nums
 * :return2: length of nums
 * :rtype1: int
 * :rtype2: int
*/ 
func sum(nums []int) (int, int){
	sum := 0
	for _, value := range nums{
		sum += value
	}
	return sum, len(nums)
}

listNums := []int{1,2,3}
x,y := sum(listNums)
fmt.Println(x,y)  // Output 6 3

// Same function, but in variadic form
func sum(args ...int) int{
	sum := 0
	for _, value := range args{
		sum += value
	}
	return sum
}
```

Closures
```Go
func main(){
num := 1
double := func() int {
	num *= 2
	return num
}
fmt.Println(double()) // Output - 2
fmt.Println(double()) // Output - 4
}

Recursion
```Go
func factorial(num int) int{
	if num == 0 {  // Exit point
		return 1
	}
	return num * factorial(num-1)
}
```

Defer / Recover
```Go
func deferDivision(num1, num2 int) int{
	// Similar to try/catch, defer/recover catches the error and continues
	defer func(){
		fmt.Println(recover())
	}()
	value := num1 / num2
	return value
}
fmt.Println(deferDivision(10,0))  // Output - runtime error: integer divide by zero
fmt.Println(deferDivision(10,2))  // Output - 5	
```

Pass-by-Values
```Go
func main(){
	x := 10
	fmt.Println("Pre: ", x)  // Output - Pre: 10
	dx(x)                    // Pass by Value
	fmt.Println("Post: ", x) // Output - Post: 10
}
func dx(x int){
	x = 5
}
```

Pass-by-Reference
```Go
func main(){
	x := 10
	fmt.Println("Pre: ", x)   // Pre: 10
	dx(&x)                    // Pass by Reference
	fmt.Println("Post: ", x)  // Post: 5
}
func dx(x *int){
	*x = 5
}
```

Structs
```Go
func main(){
	myLine := Line{x1: 0, x2: 5, y1: 0, y2: 5} 
	fmt.Println("Slope is ", myLine.slope())   // Output - Slope is 1 
}
// Define our own data structure for a Line
type Line struct {
	x1 float64
	x2 float64
	y1 float64
	y2 float64	
}
/*
 * Create a function for calculating the slope of a Line
 * lin is a reference to myLine, slope() is the name of the function.
*/ 
func (lin *Line) slope() float64{
	return ( (lin.y1 - lin.y2) / (lin.x1 - lin.x2) )
} 
```

Interfaces
```Go
type Shape interface {
	area() float64
}
... TODO ...
```

Type Conversions
```Go
import "strconv"
...
x := 5
y := 5.5
s := "100"
v := "100.5"
float64(x)   // int -> float
int(y)       // float -> int
newInt,_ := strconv.ParseInt(s,0,64)    // string -> int
newFloat,_ := strconv.ParseFloat(v, 64) // string -> float
``` 

HTTP Server
```Go
import (
"fmt"
"net/http"
)
func main(){
	http.HandleFunc("/", handler) // Direct requests to the root dir to the handler function
	http.ListenAndServe(":8080", nil)
}
func handler(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "Hello World")
}
```





