import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import Workouts from './pages/Workouts';
import ChestWorkouts from './pages/workouts/ChestWorkouts';
import LegWorkouts from './pages/workouts/LegWorkouts';
import CardioWorkouts from './pages/workouts/CardioWorkouts';
import YogaWorkouts from './pages/workouts/YogaWorkouts';
import WorkoutDetail from './pages/WorkoutDetail';
import SavedPlans from './pages/SavedPlans';
import Trainers from './pages/Trainers';
import TrainerProfile from './pages/TrainerProfile';
import BMI from './pages/BMI';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Join from './pages/Join';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/workouts/chest" element={<ChestWorkouts />} />
            <Route path="/workouts/legs" element={<LegWorkouts />} />
            <Route path="/workouts/cardio" element={<CardioWorkouts />} />
            <Route path="/workouts/yoga" element={<YogaWorkouts />} />
            <Route path="/workout/:name" element={<WorkoutDetail />} />
            <Route path="/saved-plans" element={<SavedPlans />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/trainer/:name" element={<TrainerProfile />} />
            <Route path="/bmi" element={<BMI />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
