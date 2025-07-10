import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

export default function AddHabit() {
  const [habits, setHabits] = useLocalStorage('habits', []);
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('daily');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newHabit = {
      id: Date.now(),
      name: name.trim(),
      frequency,
      done: false,
      createdAt: new Date().toISOString()
    };

    setHabits([...habits, newHabit]);
    navigate('/');
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Add a New Habit</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter habit name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Habit
        </button>
      </form>
    </div>
  );
}
