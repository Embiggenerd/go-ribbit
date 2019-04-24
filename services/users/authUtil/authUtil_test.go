package authutil_test

import (
	"reflect"
	"testing"
	authutil "users/authUtil"
	"users/models/modelTypes"
)

func TestEncodeToken(t *testing.T) {
	user := modelTypes.User{
		ID: 3,
	}
	token, err := authutil.EncodeToken(&user)
	if err != nil {
		t.Error(err)
	}
	tokent := *token
	tt := reflect.TypeOf(tokent.Token).Kind()
	if tt != reflect.String {
		t.Errorf("Token has incorrect type got: %s, wanted: %s.", tt, "string")
	}
}

func TestDecodeToken(t *testing.T) {
	var userID int = 33
	user := modelTypes.User{
		ID: userID,
	}
	token, err := authutil.EncodeToken(&user)
	authutil.DecodeToken(token, func(c *authutil.UserClaims, e error) {
		idData := c.CustomClaims["userid"].(float64)
		converted := int(idData)
		if converted != userID {
			t.Errorf("Claims are incorrect, got: %d, wanted: %d.", c.CustomClaims["userid"], userID)
		}

	})
	if err != nil {
		t.Error(err)
	}
}
