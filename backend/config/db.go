package config

import (
	"fmt"

	"PJ/backend/entity"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func ConnectionDB() {
	database, err := gorm.Open(sqlite.Open("sa.db?cache=shared"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	fmt.Println("connected database")
	db = database
}

func SetupDatabase() {

	db.AutoMigrate(
		&entity.Member{},
		&entity.Payment{},
		&entity.Package{},
		&entity.Paypal{},
		&entity.PromptPay{},
		&entity.CreditCard{},
		&entity.Subscription{},
		
	)

	

	hashedPassword, _ := HashPassword("789012")
	Member := entity.Member{
		Username:  "Fah",
		Password:  hashedPassword,
		Email:     "Fah@gmail.com",
		FirstName: "Faprathan",
		LastName:  "Lertsungnoen",
	}

	db.FirstOrCreate(&Member, entity.Member{Email: "Fah@gmail.com"})

}
