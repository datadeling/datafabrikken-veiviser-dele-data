import styled from 'styled-components';

const Root = styled.div`
  & > div:first-child > div, & > div:nth-child(2) > div {
    background-color: #ebf1ff;
    background-image: none !important;
  }

  & > div:first-child > div, & > div:nth-child(2) > div > div {
    min-height: auto !important;
  }
`;

export default {
  Root,
};
