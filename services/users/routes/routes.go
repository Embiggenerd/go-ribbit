package routes

import (
	"net/http"
)

func Init() {
	http.HandleFunc("/users/ping", ping)
	http.HandleFunc("/users/getUser", getUser)
	http.ListenAndServe(":3002", nil)

}
