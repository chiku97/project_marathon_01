# Backend Project

This is a simple backend project that implements a `/login` route for user authentication.

## Project Structure

```
backend-project
├── api
│   └── login.js
├── package.json
├── vercel.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd backend-project
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Project Locally

To start the server locally, use the following command:
```
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoint

### POST /login

- **Request Body**:
  - `username`: string
  - `password`: string

- **Success Response**:
  - Status: 200 OK
  - Body: `{ "message": "Login successful" }`

- **Error Response**:
  - Status: 401 Unauthorized
  - Body: `{ "message": "Invalid username or password" }`

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Push your code to a Git repository (GitHub, GitLab, etc.).
2. Connect your repository to Vercel.
3. Vercel will automatically detect the project and deploy it.

## License

This project is licensed under the MIT License.