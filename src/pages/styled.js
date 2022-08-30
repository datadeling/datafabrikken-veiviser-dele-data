import styled from 'styled-components';

const onMobileView = '@media (max-width: 900px)';

const BetaInfoBox = styled.div`
  margin-bottom: 2em;
  
  & > div {
    margin-left: 0;
    padding: 0;
    max-width: none;

    ${onMobileView} {
      margin: 0;
    }

    & > div {
      position: relative;
      padding: 2em 6em 0;
      overflow: hidden;

      ${onMobileView} {
        padding: 4em 2em 2em 2em;
      }

      h3 {
        font-size: 1.5rem;
        font-weight: 400;
        color: #566C99;
    }
    }
  }
`;

const BetaRibbon = styled.span`
  position: absolute;
  top: -10px;
  left: -60px;
  transform: rotate(-45deg);
  padding: 2em 4em 0.8em;
  font-size: 1rem;
  font-weight: 400;
  color: #1C2026;
  background: #8FB4FF;
`;

export default {
  BetaInfoBox,
  BetaRibbon
};
