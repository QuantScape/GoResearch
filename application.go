package main

import (
    "log"
    "net/http"
    "os"
)

func main() {
    panic(http.ListenAndServe(":5000", http.FileServer(http.Dir("./public"))))

}
