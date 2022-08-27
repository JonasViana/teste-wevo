import styled from 'styled-components'

export const Form = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #484644;
  color: white;
  border-radius: 10px;
  height: 60vh;
  margin-left: 2rem;
  margin-right: 5rem;
  align-items: center;

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input{
  border-radius: 5px;
  border: none;
  margin-bottom: 1rem;
  width: 20vw;
}

button {
  width:120px;
  font-family: 'source sans pro';
  margin-top: 1rem;
  border-radius: 5px;
  border: none;
}

button:hover{
  background-color: rgba(172, 165, 169, 0.52);
  color: white;
  cursor: pointer;
}

`