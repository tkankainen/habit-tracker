import { useState } from 'react'
import { Input, Button, Title, Label } from './Styled'
import habitService from '../services/habits'

const EditHabit = ({ habit, onUpdate }) => {

  const [name, setName] = useState(habit.name)
  const [targetFrequency, setTargetFrequency] = useState(habit.targetFrequency)

  const updateHabit = async (event) => {
    event.preventDefault()
    try {
        const updatedHabit = {
            ...habit,
            name: name,
            targetFrequency: targetFrequency
        }
        await habitService.update(habit.id, updatedHabit)
        onUpdate(updatedHabit)
    } catch(exception) {
        console.log('Error updating habit:', exception)
    }
  }

  return (
    <div>
      <Title>update habit</Title>

      <form onSubmit={updateHabit}>
        <div>
          <Label>Habit name</Label>
          <Input
            type="text"
            value={name}
            id="name"
            placeholder='habit name'
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          <Label>Target frequency</Label>
          <Input
            type="number"
            value={targetFrequency}
            id="target frequency"
            placeholder='target frequency'
            onChange={({ target }) => setTargetFrequency(target.value)}
          />
        </div>
        <Button type="submit">OK</Button>
      </form>
    </div>
  )
}

export default EditHabit