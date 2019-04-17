package routes

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	authutil "users/authUtil"
	"users/models"
	"users/models/modelTypes"
)

func registerUser(w http.ResponseWriter, r *http.Request) *appError {
	var user modelTypes.User

	body, err := ioutil.ReadAll(r.Body)

	err = json.Unmarshal(body, &user)

	if err != nil {
		return &appError{err.Error(), "Internal server error", 500}
	}

	exists, err := models.UserExists(user.Username)
	if exists {
		return &appError{"Username unavailable", "Username taken", 400}
	}
	fmt.Println("userExists", exists, err)
	createdUser, err := models.CreateUser(&user)
	if err != nil {
		return &appError{err.Error(), "Internal server error", 500}
	}

	token, err := authutil.EncodeToken(createdUser)
	if err != nil {
		return &appError{err.Error(), "Internal server error", 500}
	}

	response := struct {
		status string
		token  string
	}{
		"success",
		token.Token,
	}

	jsonToken, err := json.Marshal(response)
	if err != nil {
		return &appError{err.Error(), "Internal server error", 500}
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonToken)
	fmt.Println("rezponse", response)

	return nil
}
