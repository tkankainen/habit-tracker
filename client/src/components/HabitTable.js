import { Button, Table, Td, Th } from './Styled'

const HabitTable = ({ habits, deleteHabit, showEdit, markHabitDone }) => {
    return (
      <Table>
        <thead>
          <tr>
            <Th>Habit</Th>
            <Th>Target Frequency</Th>
            <Th>Current streak</Th>
            <Th>Mark done</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </tr>
        </thead>
        <tbody>
          {habits.map(habit => (
            <tr key={habit.id}>
              <Td><b>{habit.name}</b></Td>
              <Td>{habit.targetFrequency} times per day</Td>
              <Td><b>{habit.currentStreak}</b> days in a row</Td>
              <Td><Button $primary onClick={() => markHabitDone(habit)}>DONE</Button></Td>
              <Td><Button onClick={() => showEdit(habit)}>edit</Button></Td>
              <Td><Button onClick={() => deleteHabit(habit)}>remove</Button></Td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
}

export default HabitTable