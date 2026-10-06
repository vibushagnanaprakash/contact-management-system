# Contact Management System

A RESTful Contact Management System developed using **Node.js, Express.js, MongoDB Atlas, and Mongoose**.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Thunder Client / Postman

---

## Project Structure

```text
contact-management-system/
│
├── .env
├── .gitignore
├── package.json
├── server.js
├── README.md
│
├── models/
│   └── Contact.js
│
└── routes/
    └── contactRoutes.js
Setup Instructions
1. Clone the Repository
git clone <YOUR_GITHUB_REPOSITORY_URL>

Navigate into the project:

cd contact-management-system
2. Install Dependencies

Run:

npm install
3. Configure Environment Variables

Create a .env file in the project root directory.

Add:

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

Example:

MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.mongodb.net/contact_management
PORT=5000

Note: Do not upload the .env file to GitHub because it contains database credentials.

4. Start the Server

Run:

node server.js

If the connection is successful, the terminal will display:

MongoDB connected successfully
Server running on http://localhost:5000

The API is now available at:

http://localhost:5000
API Endpoints
Method	Endpoint	Description
POST	/contacts	Create a new contact
GET	/contacts	Get all contacts
GET	/contacts/:id	Get a contact by ID
PUT	/contacts/:id	Update a contact
DELETE	/contacts/:id	Delete a contact
Contact Data Format

Each contact contains:

Field	Type	Required	Description
contactId	String	Yes	Unique contact ID
name	String	Yes	Contact name
phone	String	Yes	Exactly 10 digits
email	String	Yes	Valid and unique email
Example Requests and Responses
1. Create a Contact
Request

POST

http://localhost:5000/contacts

Body:

{
  "contactId": "C001",
  "name": "Rahul Kumar",
  "phone": "9876543210",
  "email": "rahul@gmail.com"
}
Response

Status: 201 Created

{
  "message": "Contact created successfully",
  "contact": {
    "contactId": "C001",
    "name": "Rahul Kumar",
    "phone": "9876543210",
    "email": "rahul@gmail.com"
  }
}
2. Get All Contacts
Request

GET

http://localhost:5000/contacts
Response

Status: 200 OK

[
  {
    "contactId": "C001",
    "name": "Rahul Kumar",
    "phone": "9876543210",
    "email": "rahul@gmail.com"
  },
  {
    "contactId": "C002",
    "name": "Priya Sharma",
    "phone": "9123456780",
    "email": "priya@gmail.com"
  }
]
3. Get Contact by ID
Request

GET

http://localhost:5000/contacts/<MongoDB_ID>

Example:

http://localhost:5000/contacts/68f123456789abcdef123456
Response

Status: 200 OK

{
  "contactId": "C001",
  "name": "Rahul Kumar",
  "phone": "9876543210",
  "email": "rahul@gmail.com"
}

If the contact does not exist:

Status: 404 Not Found

{
  "message": "Contact not found"
}
4. Update a Contact
Request

PUT

http://localhost:5000/contacts/<MongoDB_ID>

Body:

{
  "name": "Rahul Kumar Updated",
  "phone": "9876543210",
  "email": "rahulupdated@gmail.com"
}
Response

Status: 200 OK

{
  "message": "Contact updated successfully",
  "contact": {
    "contactId": "C001",
    "name": "Rahul Kumar Updated",
    "phone": "9876543210",
    "email": "rahulupdated@gmail.com"
  }
}
5. Delete a Contact
Request

DELETE

http://localhost:5000/contacts/<MongoDB_ID>
Response

Status: 200 OK

{
  "message": "Contact deleted successfully",
  "contact": {
    "contactId": "C001",
    "name": "Rahul Kumar",
    "phone": "9876543210",
    "email": "rahul@gmail.com"
  }
}

If the contact does not exist:

Status: 404 Not Found

{
  "message": "Contact not found"
}
Validation and Error Handling

The application validates:

contactId is required and unique.
name is required.
phone must contain exactly 10 digits.
email is required.
Email must have a valid format.
Email must be unique.
Invalid contact IDs are handled.
Non-existing contacts return 404 Not Found.
Example: Invalid Phone Number

Request:

{
  "contactId": "C004",
  "name": "Test User",
  "phone": "12345",
  "email": "test@gmail.com"
}

Response:

{
  "message": "Error creating contact"
}
Example: Invalid Email

Request:

{
  "contactId": "C005",
  "name": "Test User",
  "phone": "9876543210",
  "email": "invalid-email"
}

Response:

{
  "message": "Error creating contact"
}
Database

The application uses MongoDB Atlas.

Database name:

contact_management

Mongoose is used to connect the Node.js application to MongoDB Atlas.

Testing

The API was tested using Thunder Client.

The following operations were tested:

Create contact
Get all contacts
Get contact by ID
Update contact
Delete contact
Invalid phone number
Invalid email
Missing required fields
Duplicate email
Duplicate contact ID