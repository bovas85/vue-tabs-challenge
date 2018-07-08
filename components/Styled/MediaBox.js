import styled from 'vue-styled-components';

const MediaBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-basis: calc(33.3333% - 50px);
  text-align: center;
  cursor: pointer;
  margin: 50px 0;

  h2 {
    color: #1f2532;
    font-size: 24px;
    font-weight: 400;
    display: block;
    letter-spacing: -0.12px;
    line-height: 40px;
    text-align: center;
  }

  p {
    max-width: 280px;
    color: #495367;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.1px;
    line-height: 28px;
    text-align: center;
  }

  img {
    width: auto;
    height: auto;
    display: block;
    max-width: 200px;
    max-height: 200px;

    @supports (object-fit: contain) {
      object-fit: contain;
      width: 100%;
      height: 100%;
      min-height: 200px;
    }
  }
`;

export default MediaBox;
