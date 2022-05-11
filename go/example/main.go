package main

import (
	"fmt"

	"example.com/example/cmd"
)

func main() {
	cmd.Execute()

	srcDir := "./hello"
	distDir := "./"

	if err := RecursiveCopyContent(srcDir, distDir); err != nil {
		fmt.Println(err)
	}
}
