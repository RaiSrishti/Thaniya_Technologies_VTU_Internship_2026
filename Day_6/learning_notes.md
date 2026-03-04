# Backend Development – Day 6 Notes

## What is Authentication?
Authentication is the process of verifying a user's identity (login).

## What is Authorization?
Authorization determines what actions an authenticated user is allowed to perform.

## What is JWT?
JWT (JSON Web Token) is a secure token used to:
- Authenticate users
- Maintain stateless sessions
- Protect APIs

## JWT Structure
A JWT consists of:
1. Header
2. Payload
3. Signature

## Why JWT?
- No server-side session storage
- Secure and scalable
- Widely used in REST APIs

## Authentication Flow
1. User sends login credentials
2. Server verifies credentials
3. JWT token is generated
4. Token is sent to client
5. Client sends token with requests
6. Server verifies token before granting access

## Key Learnings
- How JWT works internally
- Securing routes using middleware
- Importance of token-based authentication