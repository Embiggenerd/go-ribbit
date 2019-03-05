package routes

import (
	"net/http"
)

func Init() {
	http.HandleFunc("/users/ping", ping)
	http.Handle("/users/getUserByUsername", appHandler(getUser))
	http.ListenAndServe(":3002", nil)
}
