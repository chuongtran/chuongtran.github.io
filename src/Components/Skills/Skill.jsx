import styled from 'styled-components';
import Point from './Points';

const StyledSkill = styled.div`
  display: flex;
  flex-flow: column;
  font-size: 24px;
  text-align: center;
  font-weight: 500;
  align-items: center;
  grid-gap: 8px;
`;
const StyledIconWrapper = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 8px;

  img {
    max-height: 80%;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
  &::before {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-text);
    opacity: 0.9;
    border-radius: 8px;
  }
`;

const Skill = ({ skill }) => {
  return (
    <StyledSkill>
      <StyledIconWrapper>
        <img src={skill.icon} alt={skill.title} />
      </StyledIconWrapper>
      <span>{skill.title}</span>
      <Point point={skill.point} />
    </StyledSkill>
  );
};

export default Skill;