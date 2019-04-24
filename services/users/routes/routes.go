package routes

import (
	"net/http"
)

// Init initializes the routes in main
func Init() {
	http.HandleFunc("/users/ping", ping)
	http.Handle("/users/authReq", appHandler(authReq))
	http.Handle("/users/getUserByUsername", appHandler(getUser))
	http.Handle("/users/register", appHandler(registerUser))
	http.Handle("/users/login", appHandler(loginUser))
	http.ListenAndServe(":3002", nil)
}
