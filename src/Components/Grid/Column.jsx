import styled from 'styled-components';

const StyledColumn = styled.div`
  display: flex;
  flex-flow: column;
  ${props => {
    if (!props.align) return '';
    return `align-items: ${props.align}`;
  }}
  ${props => {
    if (!props.justify) return '';
    return `justify-content: ${props.justify}`;
  }}
`;

const Column = ({ align, justify, children }) => {
  return (
    <StyledColumn align={align} justify={justify}>
      {children}
    </StyledColumn>
  )
};

export default Column;