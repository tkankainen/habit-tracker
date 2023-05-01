import { useState, useEffect } from 'react'
import habitService from '../services/habits'
import CreateHabit from './CreateHabit'

const Habits = () => {

  const [habits, setHabits] = useState([])

  useEffect(() => {
    habitService.getAll().then(habits =>
      setHabits(habits)
    )
  }, [])

  const createHabit = async (event) => {
    try {
      const habit = await habitService.create(event)
      setHabits(habits.concat(habit))
    } catch (exception) {
      console.log('Error creating habit:', exception)
    }
  }

  const deleteBlog = async (habitToRemove) => {
    if (window.confirm(`Remove habit ${habitToRemove.name}?`)) {
      try {
        await habitService.remove(habitToRemove.id)
        setHabits(habits.filter((habit) => habit.id !== habitToRemove.id))
      } catch (exception) {
        console.log('Error deleting habit:', exception)
      }
    }
  }

  return (
    <div>
    <ul>
      {habits.map(habit => (
        <li key={habit.id}>
            {habit.name} - Current streak {habit.currentStreak} <button onClick={() => deleteBlog(habit)}>remove</button>
        </li>
      ))}
    </ul>
    <CreateHabit
      createHabit={createHabit}
    />
  </div>
  )
}

export default Habits