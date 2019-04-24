package models

import (
	// "fmt"
	authutil "users/authUtil"
	"users/models/modelTypes"
)

// GetUsernameByID retrieves only username and id by id
func GetUsernameByID(id int) (*modelTypes.User, error) {
	user := new(modelTypes.User)

	sqlUserQuery := `
		SELECT username 
		FROM users
		WHERE id = $1;`
	err := db.QueryRow(sqlUserQuery, id).Scan(&user.Username)
	if err != nil {
		return nil, err
	}
	return user, nil
}

// UserExists takes a username and outputs a bool if in database
func UserExists(u string) (bool, error) {
	var count int
	sqlQuery := `
		SELECT COUNT(*)
		FROM  users
		WHERE username = $1;`

	err := db.QueryRow(sqlQuery, u).Scan(&count)
	if err != nil {
		return false, err
	}
	// fmt.Println("countz", count)
	if count > 0 {
		return true, nil
	}

	return false, nil
}

// CreateUser uses SaveUser and UserExists to create a new user
func CreateUser(u *modelTypes.User) (*modelTypes.User, error) {
	hashedPassword, err := authutil.HashPassword(u.Password)

	if err != nil {
		return nil, err
	}

	savedUser, err := SaveUser(u.Username, hashedPassword)

	if err != nil {
		return nil, err
	}

	return savedUser, nil

}

// LoginUser

// LogoutUser
