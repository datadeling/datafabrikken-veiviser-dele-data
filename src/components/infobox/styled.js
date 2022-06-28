import styled from 'styled-components';

const onMobileView = '@media (max-width: 900px)';

const InfoBoxContainer = styled.div`
  display: flex;
  flex: 1;  
  padding: 0 40px 40px 60px;
  margin-left: 340px;
  margin-top: 2em;
  max-width: 700px;

  ${onMobileView} {
    padding: 0;
    width: 90%;
    margin: 30px auto;
  }
`;

const InfoBox = styled.div`
  background-color: #fff;  
  box-shadow: 0 2px 3px rgb(0 0 0 / 18%);
  display: flex;
  flex-direction: column;
  flex: 1;
  line-height: 1.15;
  width: 100%;
  padding: 10px 20px 20px 20px;

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
  InfoBoxContainer,
  InfoBox,
};
