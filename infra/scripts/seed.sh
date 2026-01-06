#!/bin/sh

echo "Running database seed..."
npx prisma db seed
