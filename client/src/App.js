import Habits from './components/Habits';
import { Wrapper, Title } from './components/Styled';

function App() {

  return (
    <div>
      <Wrapper>
        <Title>
          Habit tracker
        </Title>
        <Habits />
      </Wrapper>
    </div>
  )
}

export default App;
