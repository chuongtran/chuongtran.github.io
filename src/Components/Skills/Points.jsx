import styled from 'styled-components';

const StyledPoints = styled.div`
  display: flex;
  grid-gap: 8px;

  span {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    overflow: hidden;
    background: #ededee;

    span {
      display: block;
      background: #00000080;
      border-radius: 0;
    }
  }
`;
const Point = ({ point }) => {
  const tmp = [1, 2, 3, 4, 5];
  const calculateWidth = p => {
    if (point % 1 === 0) return p <= point ? 100 : 0;
    if (Math.floor(p) <= point) return 100;
    return point % 1 * 100;
  }
  return (
    <StyledPoints>
      {tmp.map(point => <span><span style={{ width: `${calculateWidth(point)}%` }}></span></span>)}
    </StyledPoints>
  );
};

export default Point;