FROM postgres

# run create.sql on init
COPY create.sql /docker-entrypoint-initdb.d
# populate db
COPY init-dev.sh /docker-entrypoint-initdb.d

