package main

import "net/http"

func main() {
    panic(http.ListenAndServe(":5000", http.FileServer(http.Dir("./public"))))
}