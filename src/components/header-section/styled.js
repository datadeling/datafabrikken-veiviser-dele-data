import styled from 'styled-components';

const onMobileView = '@media (max-width: 900px)';

const HeaderSection = styled.section`
  display: flex;
  color: #ffffff;
  background: #252933;
  padding-bottom: 2em;
  overflow-x: hidden;
`;

const Container = styled.div`
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 990px;
  z-index: 10;

  @media (max-width: 721px) {
    & {
      width: 100%;
      padding: 0 3.2em;
    }
  }

  ${onMobileView} {
    & {
      padding: 60px calc(12px + (32 - 12) * ((100vw - 320px) / (900 - 320))) 0;
    }
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 400;
  line-height: 1.25rem;
  margin-bottom: 1em;

  ${onMobileView} {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.div`
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-bottom: 0.8em;
  ${onMobileView} {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export default {
  HeaderSection,
  Container,
  Title,
  Subtitle,
};
