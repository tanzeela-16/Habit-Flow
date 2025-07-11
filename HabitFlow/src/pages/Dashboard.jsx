import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { HabitCard } from '../components/HabitCard';
import QuoteBox from '../components/QuoteBox'; 

export default function Dashboard() {
  const [habits, setHabits] = useLocalStorage('habits', []);

  const handleToggleDone = (id) => {
    const updated = habits.map(h => h.id === id ? { ...h, done: !h.done } : h);
    setHabits(updated);
  };

  const handleDelete = (id) => {
    const updated = habits.filter(h => h.id !== id);
    setHabits(updated);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-10">
        Habits Dashboard
      </h1>

    
      <QuoteBox /> 

      {/* Habit Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {habits.map(habit => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggleDone={() => handleToggleDone(habit.id)}
            onDelete={() => handleDelete(habit.id)}
          />
        ))}
      </div>

      {habits.length === 0 && (
        <p className="text-center text-gray-500 mt-8 text-lg">
          No habits yet!
        </p>
      )}
    </div>
  );}