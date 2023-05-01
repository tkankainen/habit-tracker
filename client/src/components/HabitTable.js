import { Button, Table, Td, Th } from './Styled'

const HabitTable = ({ habits, deleteHabit, markHabitDone }) => {
    return (
      <Table>
        <thead>
          <tr>
            <Th>Habit</Th>
            <Th>Target Frequency</Th>
            <Th>Current streak</Th>
            <Th>Mark done</Th>
            <Th>Delete</Th>
          </tr>
        </thead>
        <tbody>
          {habits.map(habit => (
            <tr key={habit.id}>
              <Td>{habit.name}</Td>
              <Td>{habit.targetFrequency} times per day</Td>
              <Td>{habit.currentStreak} days in a row</Td>
              <Td><Button $primary onClick={() => markHabitDone(habit)}>DONE</Button></Td>
              <Td><Button onClick={() => deleteHabit(habit)}>remove</Button></Td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
}

export default HabitTable