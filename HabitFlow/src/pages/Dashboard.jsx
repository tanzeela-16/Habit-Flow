import React, { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Dashboard() {
  const [habits, setHabits] = useLocalStorage('habits', []);
  const [quote, setQuote] = useState('');

  const toggleHabit = (id) => {
    setHabits(habits.map(h => 
      h.id === id ? { ...h, done: !h.done } : h
    ));
  };

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch('https://zenquotes.io/api/today');
        const data = await res.json();
        setQuote(data[0]?.q + ' — ' + data[0]?.a);
      } catch (err) {
        setQuote('Stay consistent. Progress over perfection.');
      }
    };
    fetchQuote();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Habit Dashboard</h1>

      <div className="bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-4 mb-6 rounded">
        <p>{quote}</p>
      </div>

      {habits.length === 0 ? (
        <p className="text-gray-500">No habits added yet.</p>
      ) : (
        <ul className="space-y-3">
          {habits.map(habit => (
            <li
              key={habit.id}
              className={`flex justify-between items-center p-3 rounded shadow ${
                habit.done ? 'bg-green-100' : 'bg-white'
              }`}
            >
              <span className="font-medium">
                {habit.name} ({habit.frequency})
              </span>
              <button
                onClick={() => toggleHabit(habit.id)}
                className={`px-3 py-1 rounded text-sm ${
                  habit.done ? 'bg-green-500 text-white' : 'bg-gray-200'
                }`}
              >
                {habit.done ? 'Done' : 'Mark Done'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
