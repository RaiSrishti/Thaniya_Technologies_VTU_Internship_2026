# User Management API Documentation

## Base URL
http://localhost:5000/api

---

## 1. Get All Users

GET /users

Response:
200 OK
[
  {
    "_id": "123",
    "name": "Srishti",
    "email": "srishti@email.com",
    "role": "admin"
  }
]

---

## 2. Create User

POST /users

Request Body:
{
  "name": "Srishti",
  "email": "srishti@email.com",
  "role": "admin"
}

Response:
201 Created

---

## 3. Update User

PUT /users/:id

Response:
200 OK

---

## 4. Delete User

DELETE /users/:id

Response:
200 OK