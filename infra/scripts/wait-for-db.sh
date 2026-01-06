#!/bin/sh

until pg_isready -h postgres -p 5432; do
  echo "Waiting for postgres..."
  sleep 2
done

echo "Postgres is ready!"
