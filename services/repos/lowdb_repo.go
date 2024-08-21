package repos

import (
	"github.com/bersennaidoo/eshopbs5/models"
	"github.com/valerianomacuri/lowdb/low"
)

type LowDBRepo struct {
	db *low.Low[models.Data]
}

func New(db *low.Low[models.Data]) *LowDBRepo {

	return &LowDBRepo{
		db: db,
	}
}

func (l *LowDBRepo) Read() []models.Post {

	l.db.Read()

	return l.db.Data.Posts
}

func (l *LowDBRepo) Write(post models.Post) []models.Post {

	l.db.Read()

	l.db.Data.Posts = append(l.db.Data.Posts, post)

	l.db.Write()

	return l.db.Data.Posts
}