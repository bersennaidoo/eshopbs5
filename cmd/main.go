package main

import (
	"fmt"
	"github.com/bersennaidoo/eshopbs5/configs/lowd"
	"github.com/bersennaidoo/eshopbs5/models"
	"github.com/bersennaidoo/eshopbs5/services/repos"
)

func main() {
	db := lowd.CreateLowDBClient()

	repo := repos.New(db)

	post := models.Post{
		ID:    1111111,
		Title: "I am a go lambda function",
	}

	res := repo.Write(post)

	fmt.Println(res)

	list := repo.Read()
	fmt.Println(list)

}
