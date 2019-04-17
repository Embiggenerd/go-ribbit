package models

import (
	"fmt"
	"users/models/modelTypes"
)

// SaveUser takes a username, and a hashed password, and saves it to DB.
// It returns saved user details, error
func SaveUser(u, hp string) (*modelTypes.User, error) {

	user := new(modelTypes.User)
	sqlUser := `
		INSERT INTO users (username, password)
		VALUES ($1, $2)
		RETURNING id, username; `
	err := db.QueryRow(sqlUser, u, hp).Scan(&user.ID, &user.Username)

	if err != nil {
		return nil, err
	}

	return user, nil
}

// ValidateUser takes a user submitted username and password, and uses
// authUtil's ComparePassword to validate the password. If match, outputs
// user info as a payload
// GetUserByUsername is used to check if a username exists in db
func GetUserByUsername(username string) (*modelTypes.User, error) {
	user := new(modelTypes.User)

	sqlUserQuery := `
		SELECT id, username FROM users
		WHERE username = $1;`
	err := db.QueryRow(sqlUserQuery, username).Scan(&user.ID, &user.Username)
	if err != nil {
		fmt.Println("userQueryErr", err)
		return nil, err
	}

	return user, nil
}
