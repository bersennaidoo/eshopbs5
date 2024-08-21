package models 

import (
	"github.com/google/uuid"
)

type Post struct {
	ID uuid.UUID `json:"id"`
	Title string `json:"title"`
}

type Data struct {
	Posts []Post `json:"posts"`
}