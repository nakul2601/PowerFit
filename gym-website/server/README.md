# Gym Website Backend Server

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with the following variables:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/gym-website
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5173
```

3. Start the server:
```bash
# For development
npm run dev

# For production
npm start
```

## API Endpoints

### Test Endpoints
- `GET /api/test` - Test if API is running
- `GET /api/health` - Health check

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Packages
- `GET /api/packages` - Get all membership packages
- `GET /api/packages/:id` - Get package by ID

### Trainers
- `GET /api/trainers` - Get all trainers
- `GET /api/trainers/:id` - Get trainer by ID

### Workouts
- `GET /api/workouts` - Get all workouts
- `GET /api/workouts/:level` - Get workouts by difficulty level

### Contact
- `POST /api/contact` - Submit contact form

## Database Models

### User Model
```javascript
{
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  membershipType: String,
  membershipStartDate: Date,
  membershipEndDate: Date,
  isActive: Boolean
}
```

## Project Structure

```
server/
├── config/
│   └── db.js          # Database connection
├── controllers/       # Route controllers
├── models/
│   └── User.js       # User model
├── routes/
│   ├── auth.js       # Authentication routes
│   ├── users.js      # User routes
│   ├── packages.js   # Package routes
│   ├── trainers.js   # Trainer routes
│   ├── workouts.js   # Workout routes
│   └── contact.js    # Contact routes
├── .env              # Environment variables
├── package.json      # Dependencies
├── server.js         # Server entry point
└── README.md         # This file
```

## Features

- ✅ Express server setup
- ✅ MongoDB connection with Mongoose
- ✅ Environment configuration
- ✅ CORS setup
- ✅ Basic route structure
- ✅ User model with password hashing
- ✅ Error handling middleware
- ✅ Health check endpoints

## Next Steps

1. Implement authentication logic in controllers
2. Create more models (Package, Trainer, Workout)
3. Add validation middleware
4. Implement business logic for each route
5. Add file upload for trainer images
6. Add email functionality for contact forms
