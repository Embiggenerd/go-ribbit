package routes

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"testing"
	authutil "users/authUtil"
	"users/models/modelTypes"
	"users/rand"
)

var user = modelTypes.User{Username: rand.String(10), Password: rand.String(10)}
var jsonUser, _ = json.Marshal(user)
var token authutil.JwtToken

func TestRegisterHandler(t *testing.T) {

	// user := modelTypes.User{Username: rand.String(10) Password: "Lala."}

	resp, err := http.Post("http://service-users:3002/users/register", "application/json", bytes.NewBuffer(jsonUser))

	if err != nil {
		t.Fatal(err)
	}

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("Register user didn’t respond 200 OK: Got %s", resp.Status)
	}

	body, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		t.Fatal(err)
	}

	var respBody authutil.JwtToken

	err = json.Unmarshal(body, &respBody)

	if err != nil {
		t.Fatal(err)
	}

	t.Logf("This is the response: %v", respBody)
}

func TestLoginHandler(t *testing.T) {
	// user := modelTypes.User{Username: "Igorzzzzz", Password: "Lala."}

	// jsonUser, _ := json.Marshal(user)

	resp, err := http.Post("http://service-users:3002/users/login", "application/json", bytes.NewBuffer(jsonUser))

	if err != nil {
		t.Fatal(err)
	}

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("Login user didn’t respond 200 OK: Got %s", resp.Status)
	}

	body, err := ioutil.ReadAll(resp.Body)

	var respBody authutil.JwtToken
	t.Logf("respBody %v", body)
	err = json.Unmarshal(body, &respBody)
	if err != nil {
		t.Fatal(err)
	}

	t.Logf("This is the response2: %v", respBody)

	token = respBody
}

func TestAuthReqHandler(t *testing.T) {
	var authToken string = "Bearer " + token.Token

	client := &http.Client{}

	req, err := http.NewRequest("GET", "http://service-users:3002/users/authReq", nil)
	if err != nil {
		t.Fatal(err)
	}

	req.Header.Set("Authorization", authToken)
	resp, err := client.Do(req)
	if err != nil {
		t.Fatal(err)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("PPP", body)

	var respBody authutil.JwtToken

	err = json.Unmarshal(body, &respBody)

	if err != nil {
		t.Fatal(err)
	}

	t.Logf("This is the response from authReq: %v", respBody)
}
