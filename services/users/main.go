package main

import (
	"users/models"
	"users/routes"

	_ "github.com/lib/pq"
)

func main() {
	models.Init()
	routes.Init()
}
