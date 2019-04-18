package routes

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"testing"
	"users/models/modelTypes"
)

func TestRegisterHandler(t *testing.T) {

	user := modelTypes.User{Username: "Igorzzzzz", Password: "Lala."}
	jsonUser, _ := json.Marshal(user)
	bytes.NewBuffer(jsonUser)
	resp, err := http.Post("http://service-users:3002/users/register", "application/json", bytes.NewBuffer(jsonUser))
	if err != nil {
		t.Fatal(err)
	}
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("register user didn’t respond 200 OK: %s", resp.Status)

	}
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		t.Fatal(err)
	}
	t.Logf("This is the response1: %v", body)

	type registerUserRes struct {
		Success string
		Token   string
	}

	var rez interface{}
	respBody := json.Unmarshal(body, &rez)
	t.Logf("This is the response: %v", respBody)
	// req, err := http.NewRequest("POST", "http://service-users:3002/users/registerUser", bytes.NewBuffer(jsonUser))
	// if err != nil {
	// 	t.Fatalf("Could not send post request to register users. Got: %v", err)
	// }
	// t.Log("reqz", req)
	// rec := httptest.NewRecorder()

	// registerUser(rec, req)

	// res := rec.Result()
	// if res.StatusCode != http.StatusOK {
	// 	t.Errorf("Expected response status ok. Got: %v", res.Status)
	// }
	// defer res.Body.Close()

	// bytes, err := ioutil.ReadAll(res.Body)
	// if err != nil {
	// 	t.Fatalf("Could not read response body. Got: %v", err)
	// }
	// t.Logf("Result body is %v", bytes)
	// // figure out what response should be
}
