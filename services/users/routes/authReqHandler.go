package routes

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	authutil "users/authUtil"
	"users/models"
	"users/models/modelTypes"
)

// authReq takes a request sent by another service, runs decodeToken
// on the string under the Authorization header, which will test the signature
func authReq(w http.ResponseWriter, r *http.Request) *appError {

	auth := strings.SplitN(r.Header.Get("Authorization"), " ", 2)

	fmt.Println("auth header", auth)

	var handleError *appError

	var foundUser *modelTypes.User

	if len(auth) != 2 || auth[0] != "Bearer" {
		return &appError{"Authorization failed", "Please login", 401}
	}

	token := auth[1]

	jwtToken := authutil.JwtToken{token}

	authutil.DecodeToken(&jwtToken, func(c *authutil.UserClaims, err error) {

		if err != nil {
			fmt.Println("ooo", err)
			handleError = &appError{err.Error(), "Invalid token", 401}
			return
		}
		idData := c.CustomClaims["userid"].(float64)

		converted := int(idData)

		foundUser, err = models.GetUsernameByID(converted)

		if err != nil {
			handleError = &appError{err.Error(), "User not found by ID", 500}
		}

	})
	fmt.Printf("authReq payload: %v", foundUser)
	jsonUser, err := json.Marshal(foundUser)

	if err != nil {
		handleError = &appError{err.Error(), "Internal server error", 500}
	}
	if handleError != nil {
		return handleError
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonUser)
	fmt.Println("handleError", handleError)
	return nil
}
