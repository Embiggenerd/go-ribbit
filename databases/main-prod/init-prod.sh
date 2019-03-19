#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --dbname=mainprod password=postgres --username=postgres <<-EOSQL
	CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT);
  
EOSQL