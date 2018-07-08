import styled from 'vue-styled-components';

const Timer = styled.div`
  background: linear-gradient(to left, #0828cc, rgb(255, 51, 102));
  width: 100%;
  height: 4px;
  display: block;
  position: absolute;
  bottom: -4px;
  left: 0;
  text-align: left;
  max-width: 0%;
  transition: opacity 0.3s ease-in-out;
`;

export default Timer;
