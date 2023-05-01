import { useState, useEffect } from 'react'
import habitService from '../services/habits'

const Habits = () => {

  const [habits, setHabits] = useState([])

  useEffect(() => {
    habitService.getAll().then(habits =>
      setHabits(habits)
    )
  }, [])

  return (
    <ul>
      {habits.map(habit => (
        <li key={habit.id}>
            {habit.name} - Current streak {habit.currentStreak}
        </li>
      ))}
    </ul>
  )
}

export default Habits