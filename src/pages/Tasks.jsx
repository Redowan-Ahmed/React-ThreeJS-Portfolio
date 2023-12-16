import React, { useState, useEffect } from "react";
import AddTaskForm from "../components/tasks/AddTaskForm";
import TaskList from "../components/tasks/TaskList";
import { MdDarkMode, MdSunny } from "react-icons/md";
import './tasks.css'

function Tasks() {
    useEffect(() => {
        const localTasks = JSON.parse(localStorage.getItem('tasks'))
        const localTheme = localStorage.getItem('theme')
        if (localTasks) {
            setTasks(localTasks)
        }
        if (localTheme == 'true') {
            setDarkTheme(true)
        }

    }, [])

    const [tasks, setTasks] = useState([]);
    const [darkTheme, setDarkTheme] = useState(false);

    const addTask = (title, date, time) => {
        const newTask = { id: Date.now(), title, date, time, completed: false };
        localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
        const localTasks = JSON.parse(localStorage.getItem('tasks'))
        setTasks(localTasks)
    };

    const editTask = (id, title) => {
        const localTasks = JSON.parse(localStorage.getItem('tasks'))
        setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
        localStorage.setItem('tasks', JSON.stringify(localTasks.map((task) => (task.id === id ? { ...task, title } : task))));
    };

    const deleteTask = (id) => {
        const localTasks = JSON.parse(localStorage.getItem('tasks'))
        setTasks(tasks.filter((task) => task.id !== id));
        localStorage.setItem('tasks', JSON.stringify(localTasks.filter((task) => task.id !== id)));
    };

    const toggleCompleted = (id) => {
        const localTasks = JSON.parse(localStorage.getItem('tasks'))
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
        localStorage.setItem('tasks', JSON.stringify(localTasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )));
    };

    const clearTasks = () => {
        localStorage.removeItem('tasks')
        setTasks([]);
    };

    const getCompletedTasks = () => tasks.filter((task) => task.completed);
    const getRemainingTasks = () => tasks.filter((task) => !task.completed);


    const toggleTheme = (e) => {
        setDarkTheme((prevTheme) => !prevTheme);
        const theme = localStorage.getItem('theme')
        if (theme == 'true') {
            localStorage.setItem('theme', false)
        } else {
            localStorage.setItem('theme', true)
        }
    };

    return (
        <div
            className={`hero ${darkTheme ? "bg-gray-900" : "bg-gray-100"
                } h-screen md:min-h-full w-full m-auto flex flex-col items-center mt-14 transition-all duration-500 pt-14 select-none `}
        >
            <div
                className={`flex flex-col space-y-6 md:w-3/4 w-[100%] z-10 p-4 ${darkTheme ? "text-white" : "text-black"
                    }`}
            >
                <div className=" w-full flex items-center justify-between mb-4 md:mb-0">
                    <h1 className=" uppercase text-4xl font-bold text-white tracking-widest md:mb-4 mb-0 md:text-3xl">
                        Personal Tasks
                    </h1>

                    {darkTheme ? (
                        <MdSunny
                            onClick={toggleTheme}
                            className={`bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${darkTheme ? "text-yellow-300" : "text-black"
                                }`}
                            size={32}
                        />
                    ) : (
                        <MdDarkMode
                            onClick={toggleTheme}
                            className={`bg-gray-300 cursor-pointer dark:bg-gray-50 p-2 rounded-lg  bottom-5 right-5 ${darkTheme ? "text-white" : "text-slate-800"
                                }`}
                            size={32}
                        />
                    )}
                </div>
                <div className=" shadow-md">
                    <AddTaskForm darkTheme={darkTheme} onAddTask={addTask} />
                </div>
                <div
                    className={`scroll ${darkTheme ? "bg-gray-800" : "bg-white"
                        } w-full h-full md:h-full max-h-[70vh] px-2 overflow-y-scroll rounded-md shadow-lg relative transition-all duration-500 min-h-[500px]`}
                >
                    <div
                        className={`w-full overflow-hidden mb- sticky top-0 ${darkTheme ? "bg-gray-800" : "bg-white"
                            } flex items-center justify-between text-gray-500 border-b border-gray-500`}
                    >
                        <p className=" text-gray-500 px-2 py-3">
                            {getRemainingTasks().length} Tasks left
                        </p>
                        <p className=" text-gray-500 px-2 py-3">
                            {getCompletedTasks().length} Completed Task's
                        </p>
                        <button className="hover:text-red-600" onClick={clearTasks}>Clear all tasks</button>
                    </div>

                    {tasks.length ? (
                        <TaskList
                            tasks={tasks}
                            onEditTask={editTask}
                            onDeleteTask={deleteTask}
                            onToggleCompleted={toggleCompleted}
                        />
                    ) : (
                        <div className=" w-full h-[80%] flex items-center justify-center overflow-hidden">
                            <p className=" text-gray-500 text-center z-10">Empty task</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Tasks;
