import styled from 'styled-components';
import Row from './Grid/Row';

const StyledWrapper = styled.div`
  h3 {
    font-weight: normal;
    font-size: 22px;
    margin: 0;
  }
`;

const Education = () => {
  return (
    <StyledWrapper>
      <h3>
        <Row align="center">
          <b>POST AND TELECOMMUNICATION INSTITUTE OF TECHNOLOGY, HCMC</b>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>(2009-2014)</span>
        </Row>
      </h3>
      <Row>
        <Row align="center">
          <span>Technology Information</span>
          &nbsp;&nbsp;/&nbsp;&nbsp;
          <span>Emphasize: Network</span>
        </Row>
      </Row>
    </StyledWrapper>
  )
};

export default Education;
