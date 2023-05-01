import { useState, useEffect } from 'react'
import HabitTable from './HabitTable'
import habitService from '../services/habits'
import logService from '../services/logs'
import CreateHabit from './CreateHabit'

const Habits = () => {

  const [habits, setHabits] = useState([])
  const [logs, setLogs] = useState([])
  const [currentStreak, setCurrentStreak] = useState([])

  useEffect(() => {
    habitService.getAll().then(habits =>
      setHabits(habits)
    )
    logService.getAll().then(logs =>
      setLogs(logs)
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

  const deleteHabit = async (habitToRemove) => {
    if (window.confirm(`Remove habit ${habitToRemove.name}?`)) {
      try {
        await habitService.remove(habitToRemove.id)
        setHabits(habits.filter((habit) => habit.id !== habitToRemove.id))
      } catch (exception) {
        console.log('Error deleting habit:', exception)
      }
    }
  }

  const markHabitDone = async (habitDone) => {
    try {
      const habit = habits.find(h => h.id === habitDone.id)
      const today = new Date().toISOString().slice(0, 10)
      const log = await logService.create({
        habitID: habit.id,
        date: today,
        comments: ''
      })

      const newStreak = habit.currentStreak + 1
      await habitService.update(habit.id, {currentStreak: newStreak})

      const updatedHabits = habits.map(h => {
        if (h.id === habit.id) {
          return { ...h, currentStreak: newStreak }
        }
        return h
      })
      
      setLogs(logs.concat(log))
      setCurrentStreak(updatedHabits.map(h => h.currentStreak))
      setHabits(updatedHabits)
    } catch (exception) {
      console.log('Error marking habit as done:', exception)
    }
  }

  return (
    <div>
    <HabitTable 
      habits={habits}
      deleteHabit={deleteHabit}
      markHabitDone={markHabitDone}
    />
    <CreateHabit
      createHabit={createHabit}
    />
  </div>
  )
}

export default Habits