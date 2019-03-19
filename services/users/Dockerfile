FROM golang:1.12-alpine3.9 AS base

RUN apk update && apk add --no-cache git ca-certificates

WORKDIR /go/src/users

# Force the go compiler to use modules
ENV GO111MODULE=on

# We want to populate the module cache based on the go.{mod,sum} files.
COPY go.mod .
COPY go.sum .

# download all the dependencies that are specified in 
# the go.mod and go.sum file.
RUN go mod download
# RUN go get github.com/githubnemo/CompileDaemon
RUN go get github.com/githubnemo/CompileDaemon


# This image builds the weavaite server
FROM base AS builder
# Here we copy the rest of the source code
COPY . .
# And compile the project


#In this last stage, we start from a fresh Alpine image, to reduce the image size and not ship the Go compiler in our production artifacts.
# FROM alpine as app
# RUN go get github.com/githubnemo/CompileDaemon

# Finally we copy the statically compiled Go binary.
# COPY --from=builder /go/bin/goTodos /bin/goTodos
# ENTRYPOINT ["/app"]
ENTRYPOINT CompileDaemon -log-prefix=false -build="go build -o app ." -command="./app"

