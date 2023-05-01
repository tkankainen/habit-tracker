import { useState } from 'react'

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
      <h3>create new habit</h3>

      <form onSubmit={addHabit}>
        <div>
          habit name
          <input
            type="text"
            value={newName}
            id="name"
            placeholder='name'
            onChange={({ target }) => setNewName(target.value)}
          />
        </div>
        <div>
          target frequency
          <input
            type="number"
            value={newTargetFrequency}
            id="target frequency"
            placeholder='target frequency'
            onChange={({ target }) => setNewTargetFrequency(target.value)}
          />
        </div>
        <button type="submit" className='create-button'>create</button>
      </form>
    </div>
  )
}

export default CreateHabit