import React from 'react';
import { FaTrash, FaCheckSquare, FaRegSquare } from 'react-icons/fa';

export const HabitCard = ({ habit, onToggleDone, onDelete }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white hover:bg-teal-50 shadow-lg hover:shadow-xl rounded-2xl px-5 py-4 transition-all duration-300 border-l-4 border-teal-500 transform hover:scale-[1.02]">
      
      {/* Habit Info */}
      <div className="flex-1">
        <h3 className={`text-lg font-semibold ${
          habit.done ? 'line-through text-gray-400' : 'text-teal-800'
        } transition-all duration-200`}>
          {habit.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Frequency: <span className="font-medium text-green-600">{habit.frequency}</span>
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 text-xl">
        <button
          onClick={onToggleDone}
          className="p-2 rounded-full transition-all hover:bg-green-100 text-green-600 hover:text-green-800 hover:scale-110"
          title={habit.done ? 'Mark as not done' : 'Mark as done'}
        >
          {habit.done ? <FaCheckSquare /> : <FaRegSquare />}
        </button>

        <button
          onClick={onDelete}
          className="p-2 rounded-full transition-all hover:bg-yellow-100 text-yellow-500 hover:text-yellow-700 hover:scale-110"
          title="Delete habit"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
