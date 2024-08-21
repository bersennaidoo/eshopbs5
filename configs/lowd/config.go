package lowd

import (
	"github.com/bersennaidoo/eshopbs5/models"
	"github.com/valerianomacuri/lowdb/low"
	"github.com/valerianomacuri/lowdb/adapters"
)

func CreateLowDBClient() *low.Low[models.Data] {
	adapter := adapters.NewJSONFile[models.Data]("posts.json")
	db := low.New[models.Data](adapter)

	return db
}