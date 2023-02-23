import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:30px;
    background-color: red;
    color: white;
    display: flex;
    align-items: center;
    font-size: 14px;
    justify-content: center;
    font-weight: 500;
`
const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement