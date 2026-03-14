# PowerFit Gym – MERN Stack Gym Management Website

## 📋 Problem Statement

Traditional gyms often lack a proper digital platform where users can explore workouts, view trainers, check membership plans, calculate BMI, and contact the gym easily. This creates a gap between fitness enthusiasts and gym services, making it difficult for potential members to get comprehensive information and join conveniently.

**Project Goal**: Create a modern, user-friendly fitness website where users can:

• 🏋️ Explore detailed workout plans and categories
• 👨‍🏫 View professional trainer profiles and expertise
• 📏 Calculate BMI for health assessment
• 💳 Join gym membership with different plans
• 📞 Contact gym easily through integrated forms
• 👤 Create and manage user accounts
• 📱 Access responsive design on all devices

## 📖 Project Description

PowerFit Gym is a comprehensive gym management website built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform provides a seamless digital experience for gym members and potential customers. Users can browse workout categories, view detailed trainer profiles, calculate their BMI, explore membership packages, and easily sign up for accounts. The website features a modern, responsive design with smooth navigation and professional UI/UX. The backend provides robust REST APIs for data management, user authentication, and secure data storage in MongoDB.

## ✨ Features Implemented

### 🎯 User Side Features

• **User Registration (Sign Up)** - Complete account creation with email validation
• **User Login** - Secure authentication with JWT tokens
• **Responsive UI** - Mobile-friendly design that works on all devices
• **Workout Categories** - Browse exercises by type (Chest, Legs, Cardio, Yoga)
• **Workout Plans Page** - Detailed workout descriptions with step-by-step instructions
• **Trainers Page** - View all expert trainers with their specializations
• **Trainer Profiles** - Individual trainer pages with detailed information
• **BMI Calculator** - Interactive health assessment tool
• **Membership / Join Page** - Complete gym membership application form
• **Contact Page** - Get in touch with gym management
• **Gym Packages Page** - View different membership pricing plans

### 🛠️ Website Features

• **Modern UI Design** - Professional, clean interface with smooth animations
• **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
• **Navigation System** - Intuitive menu and breadcrumb navigation
• **Form Validation** - Client-side and server-side validation for all forms
• **MongoDB Database Integration** - Secure data storage and retrieval
• **REST API** - Well-structured API endpoints using Node.js and Express
• **Data Storage** - Efficient data management using Mongoose ODM

## 🛠️ Tech Stack

### 🎨 Frontend
• **React.js** - Modern JavaScript framework for building user interfaces
• **HTML** - Semantic markup for structure
• **CSS** - Styling with modern design principles and animations
• **JavaScript** - Dynamic functionality and interactions
• **React Router** - Client-side routing for navigation
• **Axios** - HTTP client for API requests

### 🔧 Backend
• **Node.js** - JavaScript runtime for server-side development
• **Express.js** - Web framework for building REST APIs
• **JWT (JSON Web Tokens)** - Secure user authentication
• **bcryptjs** - Password hashing for security
• **CORS** - Cross-Origin Resource Sharing for API access

### 🗄️ Database
• **MongoDB** - NoSQL database for flexible data storage
• **Mongoose** - Object Data Modeling (ODM) for MongoDB

### 🛠️ Tools Used
• **Git** - Version control system
• **GitHub** - Code repository and collaboration
• **MongoDB Compass** - GUI for MongoDB database management
• **VS Code** - Integrated Development Environment
• **Vite** - Fast build tool for React development

## 📁 Project Folder Structure

```
PowerFit-Gym/
│
├── client/                    # React Frontend Application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── TrainerCard.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Workouts.jsx
│   │   │   ├── Trainers.jsx
│   │   │   ├── BMI.jsx
│   │   │   ├── Join.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── workouts/
│   │   ├── services/        # API service functions
│   │   │   └── api.js
│   │   ├── styles.css       # Global CSS styles
│   │   └── App.jsx          # Main App component
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
│
├── server/                   # Node.js Backend Application
│   ├── config/              # Database configuration
│   │   └── db.js            # MongoDB connection setup
│   ├── controllers/         # Route controller functions
│   │   ├── authController.js
│   │   └── membershipController.js
│   ├── middleware/          # Custom middleware functions
│   │   ├── auth.js          # Authentication middleware
│   │   └── validation.js     # Input validation
│   ├── models/              # MongoDB data models
│   │   └── User.js          # User schema definition
│   ├── routes/              # API route definitions
│   │   ├── auth.js          # Authentication routes
│   │   └── membership.js    # Membership routes
│   ├── .env                 # Environment variables
│   ├── package.json         # Backend dependencies
│   └── server.js            # Main server entry point
│
└── README.md                 # Project documentation
```

## ⚙️ Prerequisites (Important)

Before running the project, please ensure the following software is installed on your system:

### Required Software
• **Node.js** (version 16 or higher recommended)
• **npm** (Node Package Manager - comes with Node.js)
• **MongoDB** (Community Server)
• **MongoDB Compass** (optional, for database visualization)
• **Git** (for version control)

### How to Check Versions
Open your terminal/command prompt and run:

```bash
# Check Node.js version
node -v

# Check npm version
npm -v

# Check MongoDB version (after installation)
mongod --version
```

### Installation Links
• **Node.js**: https://nodejs.org/
• **MongoDB**: https://www.mongodb.com/try/download/community
• **MongoDB Compass**: https://www.mongodb.com/products/compass
• **Git**: https://git-scm.com/

## 🚀 How to Run the Project (Very Important)

Follow these step-by-step instructions to run the project on your local machine:

### Step 1 – Clone the Repository
```bash
git clone <repository_link>
cd PowerFit-Gym
```

### Step 2 – Install Backend Dependencies
```bash
cd server
npm install
```

### Step 3 – Setup Environment Variables
Create a `.env` file inside the `server` folder and add the following configuration:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/powerfitgym
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**Important**: Make sure to replace `your_super_secret_jwt_key_change_this_in_production` with a secure secret key.

### Step 4 – Start MongoDB Service
Before running the backend, ensure MongoDB is running on your system:

**Windows:**
```bash
# Start MongoDB service
net start MongoDB
```

**macOS/Linux:**
```bash
# Start MongoDB daemon
mongod
```

### Step 5 – Start Backend Server
```bash
cd server
npm start
```

The server should start successfully and display:
```
Server is running on port 5000
MongoDB Connected: localhost
Database: powerfitgym
```

**Backend URL**: http://localhost:5000

### Step 6 – Install Frontend Dependencies
Open a **new terminal window** and run:

```bash
cd client
npm install
```

### Step 7 – Start React Frontend
```bash
cd client
npm run dev
```

The frontend development server will start and display:
```
VITE v8.0.0 ready in XXX ms
➜  Local:   http://localhost:5173/
```

**Frontend URL**: http://localhost:5173

### � Final Setup Verification
Once both servers are running, you should have:

• **Frontend Application**: http://localhost:5173
• **Backend API**: http://localhost:5000
• **API Health Check**: http://localhost:5000/api/health

## 🗄️ MongoDB Setup

### Database Configuration
• **Database Name**: `powerfitgym`
• **Connection String**: `mongodb://127.0.0.1:27017/powerfitgym`

### Collections
The following collections will be created automatically when data is inserted:

• **users** - User account information and authentication data
• **memberships** - Gym membership applications and data

### Database Management
You can use **MongoDB Compass** to visually inspect the database:
1. Open MongoDB Compass
2. Connect to: `mongodb://127.0.0.1:27017`
3. Select the `powerfitgym` database
4. Browse collections and data

## 📸 Screenshots Section

### Home Page
![Home Page](screenshots/homepage.png)
*Main landing page with hero section, features, and call-to-action buttons*

### Workouts Page
![Workouts Page](screenshots/workouts.png)
*Browse workout categories and detailed exercise plans*

### Trainers Page
![Trainers Page](screenshots/trainers.png)
*View expert trainers with their specializations and profiles*

### BMI Calculator
![BMI Calculator](screenshots/bmi-calculator.png)
*Interactive tool for calculating Body Mass Index*

### Membership Page
![Membership Page](screenshots/membership.png)
*View gym membership plans and pricing options*

## 🔮 Future Improvements

Planned enhancements for the next version of PowerFit Gym:

• **💳 Online Payment Integration** - Secure payment gateway for membership purchases
• **👨‍💼 Admin Dashboard** - Complete admin panel for managing users and gym operations
• **� User Progress Tracking** - Track workout progress, set goals, and view analytics
• **📅 Trainer Booking System** - Online booking system for personal training sessions
• **📱 Mobile App Version** - Native mobile applications for iOS and Android
• **🥗 Nutrition Tracking** - Meal planning and nutrition monitoring features
• **🎯 Workout Customization** - Personalized workout plans based on user goals
• **💬 Live Chat Support** - Real-time customer support integration
• **🏆 Achievement System** - Gamification with badges and rewards
• **� Video Exercise Library** - Video demonstrations for all exercises

## 👨‍� Author

**Name**: [Your Full Name]
**College**: [Your College/University Name]
**Course**: [Your Course/Program]
**Email**: [Your Email Address]
**GitHub**: [Your GitHub Profile]

---

## 📞 Support & Contact

For any questions or support regarding this project:

• **📧 Email**: info@powerfitgym.com
• **📱 Phone**: +91 1234567890
• **🏢 Address**: Sector 17 Plaza, Chandigarh, Punjab 160017, India

---

**🏋️‍♂️ PowerFit Gym - Transform Your Body, Transform Your Life! 🏋️‍♂️**

*Built with ❤️ using MERN Stack*
