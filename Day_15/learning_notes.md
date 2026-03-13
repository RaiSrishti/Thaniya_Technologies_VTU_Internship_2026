# Backend Development – Day 15 Notes

## What are Environment Variables?

Environment variables store configuration settings outside the application code.

Examples:
- Database connection string
- API keys
- JWT secret keys
- Server port numbers

## Why Use Environment Variables?

- Improves security
- Avoids exposing sensitive data
- Makes applications flexible for different environments

## dotenv Package

The dotenv package loads environment variables from a .env file into process.env.

Example:

PORT=5000
DB_URL=mongodb://localhost:27017/internshipDB

## Accessing Environment Variables

process.env.PORT
process.env.DB_URL

## Benefits

- Secure configuration management
- Cleaner code
- Easy deployment in different environments

## Learning Outcome

Today I learned how to use environment variables to store sensitive configuration data securely in backend applications.