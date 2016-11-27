package main
import "fmt"
type Singer interface{
	Singing(string)
}
type Person struct{
	name string
	age int
}
type Keyboard struct{
	brand string
}
func (p Person) Singing(song string){
	fmt.Println(p.name  +": "+ song)
}
func (k Keyboard) Singing(song string){
	fmt.Println(k.brand +": "+ song)
}
func Perform (entity Singer){
	entity.Singing("song lyrics")
}
func main(){
	william := Person{name:"William", age:23}
	myKeyboard := Keyboard{brand:"corsair"}
	Perform(william)
	Perform(myKeyboard)
}


