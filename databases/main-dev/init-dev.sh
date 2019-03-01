#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --dbname=maindev password=postgres --username=postgres <<-EOSQL
	CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT);
  INSERT INTO users VALUES (DEFAULT,'igor', 'blah');
  
EOSQL