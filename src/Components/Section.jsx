import styled from 'styled-components'

const StyledSection = styled.div`
  margin-top: 24px;
`;

const StyledHeader = styled.div`
  border-bottom: 2px solid var(--color-text);
  
  b {
    font-size: 22px;
    display: inline-flex;
    padding: 3px 5px 0px;
    background: var(--color-text);
    color: #fff;
    line-height: 1.2;
  }
`;
const StyledContent = styled.div`
  padding: 12px 24px;
`;
const Section = ({ header, children }) => {
  return (
    <StyledSection>
      <StyledHeader>
        <b>
          {header}
        </b>
      </StyledHeader>
      <StyledContent>
        {children}
      </StyledContent>
    </StyledSection>
  );
};
export default Section;