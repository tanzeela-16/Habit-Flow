import React from 'react';
import HabitForm from '../components/HabitForm';
import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

export default function AddHabit() 
{
  const [habits, setHabits] = useLocalStorage('habits', []);
  
  const navigate = useNavigate();
  const handleAddHabit = (habit) => {
    const newHabit = {
      id: Date.now(),
      ...habit,
      done: false,
      createdAt: new Date().toISOString(),
      doneDates: [],
    };

    setHabits([...habits, newHabit]);
    navigate('/');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-5xl">
        <HabitForm onSubmit={handleAddHabit} />
      </div>
    </div>
  );}