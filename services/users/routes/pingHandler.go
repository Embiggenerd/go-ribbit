package routes

import (
	"encoding/json"
	"net/http"
)

// Ping is simple ping/ping json response
type Ping struct {
	Message string `json:"message,omitempty"`
}

func ping(w http.ResponseWriter, r *http.Request) {

	ping := Ping{"pong"}
	js, err := json.Marshal(ping)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}
