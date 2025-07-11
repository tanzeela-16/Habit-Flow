import React, { useState } from 'react';

export default function HabitForm({
  onSubmit,
  initialName = '',
  initialFrequency = 'daily',
}) {
  const [name, setName] = useState(initialName);
  const [frequency, setFrequency] = useState(initialFrequency);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit({ name: name.trim(), frequency });
    setName('');
    setFrequency('daily');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-5xl bg-gradient-to-br from-green-50 to-teal-50 border border-teal-200 rounded-3xl px-8 py-12 shadow-xl hover:shadow-2xl transition-all duration-300 mx-auto mt-10 relative overflow-hidden"
    >
      <span className="absolute top-[-40px] left-[-40px] w-40 h-40 bg-teal-300 opacity-20 rounded-full filter blur-3xl animate-pulse"></span>
      <span className="absolute bottom-[-30px] right-[-30px] w-52 h-52 bg-yellow-300 opacity-15 rounded-full filter blur-2xl"></span>

      <h2 className="text-4xl font-extrabold text-center text-teal-700 mb-10 tracking-wide">
        {initialName ? 'Update Your Habit' : 'Create a New Habit'}
      </h2>

      <div className="w-full max-w-xl mx-auto space-y-6 relative z-10">
        <input
          type="text"
          placeholder="Enter habit name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-teal-300 focus:ring-2 focus:ring-teal-400 focus:border-teal-500 bg-white p-4 rounded-xl shadow-sm transition-all text-lg placeholder:text-teal-400"
        />

        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="w-full border border-teal-300 focus:ring-2 focus:ring-teal-400 focus:border-teal-500 bg-white p-4 rounded-xl shadow-sm transition-all text-lg text-teal-700"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 via-green-500 to-yellow-400 hover:brightness-110 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-xl transition-all text-lg"
        >
          {initialName ? 'Update Habit' : 'Add Habit'}
        </button>
      </div>
    </form>
  );
}
