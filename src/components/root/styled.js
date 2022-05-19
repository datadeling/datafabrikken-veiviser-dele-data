import styled from 'styled-components';

const Root = styled.div`
  & > div:first-child > div {
    background-color: #ebf1ff;
    background-image: none !important;
  }
`;

export default {
  Root,
};
