package routes

import (
	"net/http"
)

func Init() {
	http.HandleFunc("/users/ping", ping)
	http.Handle("/users/getUserByUsername", appHandler(getUser))
	http.Handle("/users/register", appHandler(registerUser))
	http.ListenAndServe(":3002", nil)
}
