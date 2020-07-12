FROM golang:1.12-alpine3.9 AS base

# download necessary things
RUN apk update && apk add --no-cache git ca-certificates

WORKDIR /go/src/users

# force the go compiler to use modules
ENV GO111MODULE=on
ENV CGO_ENABLED=0

#  populate the module cache based on the go.{mod,sum} files.
COPY go.mod .
COPY go.sum .

# download all the dependencies that are specified in 
# the go.mod and go.sum file.
RUN go mod download

# download 3rd party package for recompiling on change
RUN go get github.com/githubnemo/CompileDaemon

# This image builds the server
FROM base AS builder

# Here we copy the rest of the source code
COPY . .

# Use 3rd party tool for auto recompile on change
ENTRYPOINT CompileDaemon -log-prefix=false -build="go build -o app ." -command="./app"

