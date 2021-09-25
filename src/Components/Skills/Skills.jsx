import Skill from './Skill';
import styled from 'styled-components';

const skills = [
  {
    title: 'HTML',
    icon: '/images/ic_html.svg',
    point: 4.5,
  },
  {
    title: 'CSS',
    icon: '/images/ic_css.svg',
    point: 4.5,
  },
  {
    title: 'ReactJS',
    icon: '/images/ic_react.svg',
    point: 4.75,
  },
  {
    title: 'AngularJS',
    icon: '/images/ic_angular.svg',
    point: 4,
  },
  {
    title: 'Vue',
    icon: '/images/ic_vue.svg',
    point: 4,
  },
  {
    title: 'NodeJS',
    icon: '/images/ic_node.svg',
    point: 4,
  },
];

const StyledSkills = styled.div`
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
`;

const Skills = () => {
  return (
    <StyledSkills>
      {skills.map(skill => <Skill skill={skill} />)}
    </StyledSkills>
  );
}
export default Skills;
