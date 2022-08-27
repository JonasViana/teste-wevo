import styled from "styled-components";

export const ContainerUser = styled.div`
  height: 60vh;
  background-color:  rgba(172, 165, 169, 0.72);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  margin-left: 1rem;
  width: 13vw;

  button {
  width:120px;
  font-family: 'source sans pro';
  margin-top: 1rem;
  border-radius: 5px;
  border: none;
}

button:hover{
  background-color: #484644;
  color: white;
  cursor: pointer;
}
`