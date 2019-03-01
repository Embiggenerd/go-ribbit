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

func getUser(w http.ResponseWriter, r *http.Request) {
	var user User
	body, err := ioutil.ReadAll(r.Body)

	// fmt.Println(string(body))

	err = json.Unmarshal(body, &user)

	foundUser, err := models.GetUserByUsername(user.Username)
	fmt.Println(foundUser)

	if err != nil {
		fmt.Println(err)
	}

}
