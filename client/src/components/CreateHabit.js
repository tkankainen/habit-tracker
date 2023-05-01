import { useState } from 'react'
import { Input, Button, Title } from './Styled'

const CreateHabit = ({ createHabit }) => {

  const [newName, setNewName] = useState('')
  const [newTargetFrequency, setNewTargetFrequency] = useState('')

  const addHabit = (event) => {
    event.preventDefault()
    createHabit({
      name: newName,
      targetFrequency: newTargetFrequency,
      currentStreak: 0
    })
    setNewName('')
    setNewTargetFrequency('')
  }

  return (
    <div>
      <Title>create new habit</Title>

      <form onSubmit={addHabit}>
        <div>
          <Input
            type="text"
            value={newName}
            id="name"
            placeholder='habit name'
            onChange={({ target }) => setNewName(target.value)}
          />
        </div>
        <div>
          <Input
            type="number"
            value={newTargetFrequency}
            id="target frequency"
            placeholder='target frequency'
            onChange={({ target }) => setNewTargetFrequency(target.value)}
          />
        </div>
        <Button type="submit" className='create-button'>create</Button>
      </form>
    </div>
  )
}

export default CreateHabit