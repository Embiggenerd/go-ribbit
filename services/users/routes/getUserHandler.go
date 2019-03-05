package routes

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"users/models"
)

type User struct {
	Username string
	Password string
}

func getUser(w http.ResponseWriter, r *http.Request) *appError {
	var user User

	body, err := ioutil.ReadAll(r.Body)

	err = json.Unmarshal(body, &user)

	if err != nil {
		return &appError{err.Error(), "Internal server error", 500}
	}

	fmt.Println("webgetusername", user)
	foundUser, err := models.GetUserByUsername(user.Username)
	fmt.Println(foundUser)

	if err != nil {
		return &appError{err.Error(), "Username not found", 400}
	}

	jsonUser, err := json.Marshal(foundUser)

	if err != nil {
		return &appError{err.Error(), "Internal server error", 500}
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonUser)
	return nil
}
