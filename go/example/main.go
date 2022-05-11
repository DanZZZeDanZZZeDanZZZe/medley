package main

import (
	"fmt"
)

func main() {
	srcDir := "./hello"
	distDir := "./"

	if err := RecursiveCopyContent(srcDir, distDir); err != nil {
		fmt.Println(err)
	}
}
