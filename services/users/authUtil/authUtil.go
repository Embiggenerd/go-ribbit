package authutil

import (
	"errors"
	"os"
	"time"
	myTypes "users/models/modelTypes"

	"github.com/dgrijalva/jwt-go"
	"golang.org/x/crypto/bcrypt"
)

// SECRET is the secret we use to sign jwt token
var SECRET = os.Getenv("JWT_SECRET")

// JwtToken holds our Token string
type JwtToken struct {
	Token string `json:"token"`
}

// UserClaims is the struct for putting user info into jwt payload
type UserClaims struct {
	CustomClaims map[string]interface{}
	jwt.StandardClaims
}

// CallbackType is the type for the callback passed to DecodeToken
type CallbackType func(*UserClaims, error)

type appError struct {
	Error   string `json:"error,omitempty"`
	Message string `json:"message,omitempty"`
	Code    int    `json:"code,omitempty"`
}

// EncodeToken takes data and makes a token with it
func EncodeToken(u *myTypes.User) (*JwtToken, error) {

	claims := UserClaims{
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 24 * 14).Unix(),
		},
		CustomClaims: map[string]interface{}{
			"username": u.Username,
			"userid":   u.ID,
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenString, err := token.SignedString([]byte(SECRET))

	if err != nil {
		return nil, err
	}
	return &JwtToken{Token: tokenString}, nil
}

// DecodeToken takes a token, and callback, and invokes the callback
// with null, payload if validated, and error when not validated.
func DecodeToken(t *JwtToken, c CallbackType) {
	tokenData, err := jwt.ParseWithClaims(t.Token, &UserClaims{}, func(t *jwt.Token) (interface{}, error) {

		if jwt.SigningMethodHS256 != t.Method {
			return nil, errors.New("Invalid signing algorithm")
		}
		return []byte(SECRET), nil
	})

	if err != nil {
		c(nil, errors.New("Invalid token"))
		return
	}
	// fmt.Println("claimz", tokenData.Claims)
	claimData := tokenData.Claims.(*UserClaims)

	if claimData.StandardClaims.ExpiresAt < time.Now().Unix() {
		c(nil, errors.New("Expired Token"))
		return
	}

	c(claimData, nil)
}

// ComparePasswords compares two strings, a user submitted password and a
// hashed+salted value from the database
func ComparePasswords(p, h string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(h), []byte(p))
	return err == nil
}

// HashPassword takes a user-submitted string, and outputs a hashed and
// salted string to be used in the database
func HashPassword(s string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(s), 14)
	return string(bytes), err
}
