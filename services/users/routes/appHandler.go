package routes

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type appHandler func(http.ResponseWriter, *http.Request) *appError

type appError struct {
	Error   error  `json:"error,omitempty"`
	Message string `json:"message,omitempty"`
	Code    int    `json:"code,omitempty"`
}

func (fn appHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// if err := fn(w, r); err != nil {
	// 	http.Error(w, err.Error(), 500)
	// }
	if e := fn(w, r); e != nil { // e is *appError, not os.Error.
		// c := appengine.NewContext(r)
		// c.Errorf("%v", e.Error)
		// http.Error(w, e.Message, e.Code)
		fmt.Println("goErr", e)
		eJSON, err := json.Marshal(e)
		fmt.Println("goErrJSON", eJSON)

		if err != nil {
			fmt.Println("errErr", err)
		}
		// fmt.Errorf("%v", e.Error)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		w.Write(eJSON)
	}
}
