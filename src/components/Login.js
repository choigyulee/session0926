import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ServerURL = process.env.REACT_APP_SERVER_URL;


function Login() {

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async (e) => {
      try {
          const response = await axios.post(`${ServerURL}/api/user/login`, {
              userId,
              password,
            })
            if (response.status === 200) {
              alert(`로그인 성공, 사용자 고유 id: ${response.data}`)
            }
          } catch (error) {
            alert('로그인에 실패했습니다.')
          }
        }


return (
    <SubContainer>
      <Title>로그인</Title>
      <Item>
        <InputDiv>
          <InputField
            type='text'
            id='userId'
            value={userId}
            onChange={e => setUserId(e.target.value)}
            placeholder="아이디"
            required />
        </InputDiv>
      </Item>
      <Item>
        <InputDiv>
          <InputField
            type='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="비밀번호"
            required />
        </InputDiv>
      </Item>
      <Button onClick={handleLogin}>로그인 완료</Button>
    </SubContainer>
);
}

export default Login;


const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`

const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.8rem;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.2rem;
`

const InputDiv = styled.div`
  position: relative;
  align-items: center;
`

const InputField = styled.input`
  width: 350px;
  height: 56px;
  border: 2px solid #737373;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 2px 0;
  font-size: 20px;
  font-weight: 400;
  padding-left: 20px;

  &::placeholder {
      font-size: 20px;
      color: #B8B8B8;
    }
`

const Button = styled.div`
  width: 340px;
  height: 50px;
  border-radius: 10px;
  box-sizing: border-box;
  color: #ffffff;
  background-color: #3A74D9;
  font-size: 25px;
  text-align: center;
  padding-top: 0.7rem;
  cursor: pointer;
`