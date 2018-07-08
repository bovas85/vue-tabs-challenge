import styled from 'vue-styled-components';

const btnProps = { active: Boolean };

const StyledButton = styled('div', btnProps)`
  color: ${props => (props.active ? '#ff3366' : '#1f2532')};
  font-family: inherit;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.12px;
  line-height: 36px;
  display: flex;
  flex-basis: calc(33.3333% - 2px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding-bottom: 14px;
  border-bottom: ${props =>
    props.active ? '4px solid #ff3366' : '2px solid #1F2532'};
  transition: border 0.3s ease-in-out;

  span {
    color: #8a959e;
    font-family: inherit;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0.25px;
    line-height: 22px;
    text-align: center;
  }
`;
export default StyledButton;
