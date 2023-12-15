import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const AddTaskForm = ({ onAddTask, darkTheme }) => {
  const [title, setTitle] = useState("");
  const [date, onDate] = useState(new Date().toLocaleDateString());
  const [time, onTime] = useState(new Date().toLocaleTimeString());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim(), date, time);
      setTitle("");
      onTime('')
      onDate('')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={` ${darkTheme ? "bg-gray-800" : "bg-white"
          } w-full flex space-x-2 items-center rounded-lg px-4`}
      >
        <CiCirclePlus size={28} className="px-0 text-gray-500 stroke-1" />
        <input
          className=" bg-transparent w-full h-fit p-1 py-4 text-lg focus:outline-none"
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="date" className=" bg-transparent h-fit p-1 py-4 text-sm text-gray-300 focus:outline-none" onChange={(e) => onDate(e.target.value)} value={date} />
        <input type="time" className=" bg-transparent h-fit p-1 py-4 text-sm text-gray-300 focus:outline-none" onChange={(e) => onTime(e.target.value)} value={time} />
        <button className=" px-4 py-2 uppercase hover:text-green-500 hover:bg-slate-700 rounded-md font-bold text-gray-400" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
