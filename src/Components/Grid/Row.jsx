import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  ${props => {
    if (!props.align) return '';
    return `align-items: ${props.align}`;
  }}
  ${props => {
    if (!props.justify) return '';
    return `justify-content: ${props.justify}`;
  }}
`;

const Row = ({ align, justify, children }) => {
  return (
    <StyledRow align={align} justify={justify}>
      {children}
    </StyledRow>
  )
};

export default Row;