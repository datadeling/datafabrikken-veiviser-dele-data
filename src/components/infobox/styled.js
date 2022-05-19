import styled from 'styled-components';

const InfoBox = styled.div`
  background-color: #fff;  
  box-shadow: 0 2px 3px rgb(0 0 0 / 18%);
  display: flex;
  flex-direction: column;
  flex: 0 1 49%;
  line-height: 1.15;
  padding: 2em;
  margin-bottom: 2em;

  & > a {
    color: #566c99;
    text-decoration: none;    
    margin-bottom: 0.8em;

    &:hover {
      text-decoration: underline;   
    }
  }
`;

export default {
  InfoBox,
};
