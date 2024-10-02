import styled from 'styled-components'
import SignUp from './components/SignUp'
import Login from './components/Login'


function App() {

return (
  <Container>
    <SignUp />
    <Login />
  </Container>
);
}
export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`