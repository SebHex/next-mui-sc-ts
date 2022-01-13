import MuiButton from '@mui/material/Button'
import styled from 'styled-components'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Buttons>
      <MuiButton variant="contained">MUI button! 💎</MuiButton>
      <CustomMuiButton variant="contained">
        Custom MUI button! 💙
      </CustomMuiButton>
      <ScButton>SC button! 💅</ScButton>
    </Buttons>
  )
}

const Buttons = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`

const CustomMuiButton = styled(MuiButton)`
  color: rgba(0, 0, 0, 0.87);
  background-color: #83e8ff;
  border-radius: 20px 0;
  text-transform: none;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 8px 16px;

  :hover {
    background-color: #b5f1ff;
  }
`

const ScButton = styled.button`
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 100px;
  padding: 0 20px;
  line-height: 48px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  background-color: #ffa4ff;
  border: none;
  user-select: none;
`

export default Home
