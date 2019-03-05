package models

import "fmt"

type User struct {
	ID       int    `json:"id,omitempty"`
	Username string `json:"username,omitempty"`
	Password string `json:"password,omitempty"`
}

func GetUserById(id int) (*User, error) {
	user := new(User)

	sqlUserQuery := `
		SELECT * FROM users
		WHERE id = $1;`
	err := db.QueryRow(sqlUserQuery, id).Scan(&user.Username, &user.Password)
	if err != nil {
		return nil, err
	}
	return user, nil
}

func GetUserByUsername(username string) (*User, error) {
	user := new(User)

	sqlUserQuery := `
		SELECT * FROM users
		WHERE username = $1;`
	err := db.QueryRow(sqlUserQuery, username).Scan(&user.ID, &user.Username, &user.Password)
	if err != nil {
		fmt.Println("userQueryErr", err)
		return nil, err
	}

	return user, nil
}
