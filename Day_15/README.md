# Day 15 – Environment Variables & Secure Configuration

Today, I learned about environment variables and how they are used to manage sensitive configuration data in backend applications. Instead of hardcoding values like database URLs, API keys, or secret tokens directly in the source code, environment variables allow developers to store these values securely outside the application.

I explored how to use the dotenv package in Node.js to load environment variables from a .env file. This helps keep sensitive information secure and allows the application to run in different environments such as development, testing, and production.