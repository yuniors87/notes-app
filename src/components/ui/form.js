import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
  background: ${props => props.theme.formBackground};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.dark};
  padding: 1rem;
`

const from = props => {
  return (
    <StyledForm>
      {props.children}
    </StyledForm>
  )
}

export default from
