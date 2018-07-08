import styled from 'vue-styled-components';

const Link = styled.a`
  color: #ff3366;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 15px;
  text-align: center;
  margin: 0 auto;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    height: 3px;
    background-color: #ff3366;
    bottom: -5px;
    left: 0;
    width: 100%;
    max-width: 0%;
    backface-visibility: hidden;
    transition: max-width 0.3s ease-in-out;
  }

  &:hover {
    &:after {
      max-width: 100%;
    }
  }
`;

export default Link;
