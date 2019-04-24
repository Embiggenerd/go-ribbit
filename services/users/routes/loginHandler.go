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

//loginUser checks if such a user exist; if yes, compares passwords,
// if no, returns no such user. If passwords match, encodes a token
// and responds with token, if not, responds with appropriate error
func loginUser(w http.ResponseWriter, r *http.Request) *appError {
	var user modelTypes.User

	body, err := ioutil.ReadAll(r.Body)

	fmt.Println("login body", body)

	err = json.Unmarshal(body, &user)

	if err != nil {
		return &appError{err.Error(), "Internal server error", 500}
	}

	exists, err := models.UserExists(user.Username)

	if !exists {
		return &appError{"Username not present in database", "No such user", 400}
	}

	foundUser, err := models.GetUserByUsername(user.Username)

	if err != nil {
		return &appError{err.Error(), "Internal server error", 500}
	}

	comparison := authutil.ComparePasswords(user.Password, foundUser.Password)

	if !comparison {
		return &appError{"Password comparison failed", "Wrong password", 400}
	}

	token, err := authutil.EncodeToken(foundUser)

	jsonToken, err := json.Marshal(token)

	if err != nil {
		return &appError{err.Error(), "Internal server error", 500}
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonToken)
	return nil
}
