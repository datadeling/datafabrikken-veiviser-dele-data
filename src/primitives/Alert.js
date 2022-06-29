import styled from 'styled-components';

const Alert = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  padding: 20px;
  color: white;
  background: #2d3340;
  text-align: center;
  line-height: 1.6;
  font-weight: 500;
  font-size: 24px;
  h1 {
    line-height: 1.2;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

export default Alert;
