import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #182a36;
  gap: 100px;
  justify-content: center;
  align-items: center;
`

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 600px;
  padding: 10px;
  border: 2px solid steelblue;
  border-radius: 10px;
  background-color: #2B2B2CFF;
  color: #7dacea;
  font-size: 32px;
`

export const DisplayOutput = styled.div`
  height: 250px;
  width: 500px;
  display: flex;
  flex-direction: column;
  border: inherit;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  font-size: 58px;
  color: ${props => props.color};
`

export const DisplaySet = styled.div`
  height: 250px;
  width: 500px;
  display: flex;
  flex-direction: column;
  border: inherit;
  border-radius: 7px;
  justify-content: space-evenly;
`

export const BlockButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /**/
  border: inherit;
  border-radius: 7px;
  height: 80px;
  width: 500px;
`

export const BlockInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 460px;
  font-size: 18px;
  font-family: Consolas;
  padding-left: 20px;
  gap: 15px;
`

export const ButtonStyle = styled.button`
  height: 50px;
  width: 150px;
  background-color: ${props => props.disabled ? `#687d94` : `#7dacea`};
  opacity: ${props => props.disabled ? 0.5 : 1};
  color: black;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  text-align: center;
`

export const InputStyle = styled.input`
  height: 31px;
  width: 200px;
  border-radius: 5px;
  background-color: ${error => error ? `#aeccf6` : `#a94c4c`} ;
  font-weight: bold;
`