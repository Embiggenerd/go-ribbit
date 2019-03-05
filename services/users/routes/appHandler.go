package routes

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type appHandler func(http.ResponseWriter, *http.Request) *appError

type appError struct {
	Error   string `json:"error,omitempty"`
	Message string `json:"message,omitempty"`
	Code    int    `json:"code,omitempty"`
}

func (fn appHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {

	if e := fn(w, r); e != nil { // e is *appError, not os.Error.

		fmt.Println("goErr", e)

		eJSON, err := json.Marshal(e)

		if err != nil {
			fmt.Println("errErr", err)
		}
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		w.Write(eJSON)
	}
}
