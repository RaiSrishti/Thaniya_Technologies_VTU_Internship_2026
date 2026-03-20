## Base URL
http://localhost:5000/api

---

## Get All Users

GET /users

Response:
200 OK
[
  {
    "id": 1,
    "name": "Srishti",
    "email": "srishti@email.com"
  }
]

---

## Create User

POST /users

Request Body:
{
  "name": "Srishti",
  "email": "srishti@email.com"
}

Response:
201 Created
{
  "message": "User created successfully"
}

---

## Update User

PUT /users/:id

Response:
200 OK

---

## Delete User

DELETE /users/:id

Response:
200 OK