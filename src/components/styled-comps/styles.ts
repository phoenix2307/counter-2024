import styled from "styled-components";

export const DisplayContainer = styled.div `
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
  color: ${props=>props.color};
`

export const DisplaySet = styled.div`
/*  height: 250px;
  width: 500px;
  display: flex;
  flex-direction: column;
  border: inherit;
  border-radius: 7px;
  justify-content: space-evenly;*/
`

export const BlockButtons = styled.div`
/*  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  !**!
  border: inherit;
  border-radius: 7px;
  height: 80px;
  width: 500px;  */
`

export const BlockInput = styled.div`
 /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 460px;
  font-size: 18px;
  padding-left: 20px;
  gap: 15px;*/
`

export const ButtonCounter = styled.button`
 /* height: 50px;
  width: 150px;
  background-color: #7dacea;
  color: black;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  text-align: center;*/
`