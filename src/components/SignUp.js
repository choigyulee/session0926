import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ServerURL = process.env.REACT_APP_SERVER_URL;

const SignUp = () => {

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${ServerURL}/api/user/signup`, {
        userId,
        password,
        email,
      })
      if (response.status === 200) {
        alert('회원가입이 완료되었습니다.')
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert('이미 사용 중인 아이디입니다.')
      } else {
        alert('회원가입에 실패하였습니다.')
      }
    };
  }


return (
    <SubContainer>
      <Title>회원가입</Title>
      <Item>
        <ItemLabel>아이디<RequireSpan>*</RequireSpan></ItemLabel>
        <InputDiv>
          <InputField
            type='text'
            id='userId'
            value={userId}
            onChange={e => setUserId(e.target.value)} 
            placeholder="아이디를 설정해주세요"
            required />
        </InputDiv>
      </Item>
      <Item>
        <ItemLabel>비밀번호<RequireSpan>*</RequireSpan></ItemLabel>
        <InputDiv>
          <InputField
            type='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="비밀번호를 설정해주세요"
            required />
        </InputDiv>
      </Item>
      <Item>
        <ItemLabel>이메일</ItemLabel>
        <InputDiv>
          <InputField
            type='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요"/>
        </InputDiv>
      </Item>
      <Button onClick={handleSignUp}>회원가입 완료</Button>
    </SubContainer>
);
}

export default SignUp;


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

const ItemLabel = styled.label`
  font-size: 20px;
`

const RequireSpan = styled.span`
  color: red;
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
  margin: 8px 0;
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
