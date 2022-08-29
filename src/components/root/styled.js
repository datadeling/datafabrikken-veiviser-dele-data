import styled from 'styled-components';

const Root = styled.div`
  & > div:nth-child(3) > div, & > div:nth-child(4) > div {
    background-color: #ebf1ff;
    background-image: none !important;
  }

  & > div:nth-child(3) > div, & > div:nth-child(4) > div > div {
    min-height: auto !important;
  }

  & > div:nth-child(3) > div > div {
    padding-top: 75px;
    max-width: 990px;
  }
`;

export default {
  Root,
};
