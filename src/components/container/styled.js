import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${({ $width }) => `${$width}px`};
`;

export default {
  Container,
};
