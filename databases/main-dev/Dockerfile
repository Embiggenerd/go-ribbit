FROM postgres

# run create.sql on init
COPY create.sql /docker-entrypoint-initdb.d
# ADD seed.sql /docker-entrypoint-initdb.d
COPY init-dev.sh /docker-entrypoint-initdb.d

