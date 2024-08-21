package main

import (
	//"fmt"
	//"github.com/google/uuid"
	//"encoding/json"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"

	//"github.com/bersennaidoo/eshopbs5/configs/lowd"
	//"github.com/bersennaidoo/eshopbs5/models"
	//"github.com/bersennaidoo/eshopbs5/services/repos"
)

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {

	/*ui,_ := uuid.NewRandom()

	post := models.Post{
		ID:    ui,
		Title: "Hello from Lowdb golang",
	}

	db := lowd.CreateLowDBClient()

	repo := repos.New(db)

	list := repo.Write(post)

	fmt.Println(list)

	_, _ = json.Marshal(list)*/

	return &events.APIGatewayProxyResponse{
		StatusCode: 200,
		Headers: map[string]string{"Content-Type": "application/json"},
		Body:       "hello from Golang",
	}, nil
}

func main() {

	lambda.Start(handler)
}
