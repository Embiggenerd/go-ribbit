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

	fmt.Println("webgetUser", string(body))

	err = json.Unmarshal(body, &user)

	fmt.Println("webgetusername", user)
	foundUser, err := models.GetUserByUsername(user.Username)
	fmt.Println(foundUser)
	if err != nil {

		return &appError{err, "Username not found", 400}
	}
	jsonUser, err := json.Marshal(foundUser)

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonUser)
	// if err != nil {
	// 	fmt.Println("ErrNotNil", err)
	// 	return &appError{err, ""}
	// }
	return nil
}
