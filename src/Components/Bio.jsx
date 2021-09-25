import styled from 'styled-components';
import Row from './Grid/Row';
import Column from './Grid/Column';

const StyledBio = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 24px;
  img {
    width: 200px;
    display: block;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 20px;
  font-size: 22px;

  h1 {
    margin: 0;
    font-size: 48px;
  }
  
  li {
    margin-top: 12px;
  }
  img {
    width: 22px;
    margin-right: 12px;
  }
`;

const alt = 'Chuong Tran, Sr.Front-end developer';
const Bio = () => {
  return (
    <StyledBio>
      <Row align="center">
        <div> 
          <img src="/images/avatar.jpg" alt="Chuong Tran, Sr.Front-end developer"/>
        </div>
        <StyledInfo>
          <h1>CHUONG TRAN</h1>
          <ul>
            <li>
              <Row align="center">
                <img src="images/ic_phone.svg" alt={alt} /> (+84) 90 240 2728
              </Row>
            </li>
            <li>
              <a href="mail:chuong14011991@gmail.com" target="_blank" rel="noreferrer" >
                <Row align="center">
                  <img src="images/ic_mail.svg" alt={alt} /> chuong14011991@gmail.com
                </Row>
              </a>
            </li>
          </ul>
        </StyledInfo>
      </Row>
      <Column>
        <span style={{ fontSize: 14, marginBottom: 5 }}>
          For more info:
        </span>
        <a href="https://www.linkedin.com/in/chuong-tran-front-end-dev/" target="_blank" rel="noreferrer">
          <img style={{ width: 80 }} src="images/QR.png" alt={alt} />
        </a>
      </Column>
    </StyledBio>
  )
};

export default Bio;