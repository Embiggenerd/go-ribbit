package models

import (
	"database/sql"
	"fmt"
	"os"
	"time"
)

var db *sql.DB

func Init() {
	var err error

	psql := os.Getenv("DATABASE_URL")
	fmt.Println("getenv", psql)
	for i := 0; i < 10; i++ {
		db, err = sql.Open("postgres", psql)
		if db != nil {
			break
		}
		time.Sleep(time.Second * 1)
	}

	if err != nil {
		// fmt.Println(err)

		panic(err)
	}
	err = db.Ping()
	if err != nil {
		fmt.Println("zzz", err)
		panic(err)
	}

	fmt.Println("zzz", db)
	// createTables()

	fmt.Println("Successfully connected to main database")
}

// func createTables() {
// 	_, err := db.Query(`
// 		CREATE TABLE IF NOT EXISTS users (
// 			id SERIAL PRIMARY KEY,
// 			username TEXT,
// 			password TEXT);`)

// 	if err != nil {
// 		fmt.Println(err)
// 		panic(err)
// 	}
// }
