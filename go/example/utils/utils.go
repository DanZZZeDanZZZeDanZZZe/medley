package utils

import (
	"io"
	"io/ioutil"
	"os"
	"path"
)

// File copies a single file from src to dist
func CopyFile(src, dist string) error {
	var err error
	var srcFile *os.File
	var distFile *os.File
	var srcInfo os.FileInfo

	if srcFile, err = os.Open(src); err != nil {
		return err
	}
	defer srcFile.Close()

	if distFile, err = os.Create(dist); err != nil {
		return err
	}
	defer distFile.Close()

	if _, err = io.Copy(distFile, srcFile); err != nil {
		return err
	}

	if srcInfo, err = os.Stat(src); err != nil {
		return err
	}

	return os.Chmod(dist, srcInfo.Mode())
}

// Dir copies a whole directory recursively
func RecursiveCopyContent(src string, dist string) error {
	var err error
	var srcContent []os.FileInfo
	var srcInfo os.FileInfo

	if srcInfo, err = os.Stat(src); err != nil {
		return err
	}

	if !srcInfo.IsDir() {
		if err = CopyFile(src, dist); err != nil {
			return err
		}
		return nil
	}

	if err = os.MkdirAll(dist, srcInfo.Mode()); err != nil {
		return err
	}

	if srcContent, err = ioutil.ReadDir(src); err != nil {
		return err
	}

	for _, srcContentInfo := range srcContent {
		innerSrcFile := path.Join(src, srcContentInfo.Name())
		innerDistFile := path.Join(dist, srcContentInfo.Name())

		if err = RecursiveCopyContent(innerSrcFile, innerDistFile); err != nil {
			return err
		}
	}
	return nil
}
