package models

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	dbname   = "maindev"
	password = "postgres"
)

var db *sql.DB

func Init() {
	var err error

	psql := os.Getenv("DATABASE_URL")
	fmt.Println("getenv", psql)

	db, err = sql.Open("postgres", psql)
	if err != nil {
		panic(err)
	}
	err = db.Ping()
	if err != nil {
		fmt.Println(err)
		panic(err)
	}

	// createTables()

	fmt.Println("Successfully connected to main-dev")
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
