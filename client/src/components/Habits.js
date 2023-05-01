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
      console.log('Error creating habit:', exception.response.data.error)
    }
  }

  return (
    <div>
    <ul>
      {habits.map(habit => (
        <li key={habit.id}>
            {habit.name} - Current streak {habit.currentStreak}
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