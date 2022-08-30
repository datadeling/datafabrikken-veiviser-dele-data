import styled from 'styled-components';

const onMobileView = '@media (max-width: 900px)';

const Container = styled.div`
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  display: flex;
  margin: 0 auto;
  width: 1200px;
  z-index: 10;

  @media (max-width: 1251px) {
    & {
      width: 100%;
      padding: 0 3.2em;
    }
  }

  ${onMobileView} {
    flex-direction: column;

    & {
      padding: 0 calc(12px + (32 - 12) * ((100vw - 320px) / (900 - 320))) 0;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 3em 0;
  margin-top: auto;
  color: #ffffff;
  background: #384359;

  font-size: 1rem;
  line-height: 1.5;

  a {
    color: #ffffff;
  }

  & > span {
    text-align: center;
  }
`;

const ByLine = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  ${onMobileView} {
    flex-basis: 100%;
  }

  & > p {
    margin: 0;
    margin-bottom: 1.2em;
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #8fb4ff;
  margin-bottom: 0.8em;
`;

const LinkSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;
  gap: 1.2em;

  justify-content: space-between;
  ${onMobileView} {
    flex-basis: 100%;
    flex-direction: column;
  }

  & a {
    text-decoration: underline;
  }
`;

const LinkTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 0.6em;
`;

const LinkList = styled.ul`
  list-style: none;
  line-height: 2.5;
  padding: 0;

  

  ${onMobileView} {
    line-height: 1.5;
    margin-bottom: 1.2em;
  }
`;

const Social = styled.div`
  display: flex;
  gap: 1.5em;
  align-items: center;
  margin-bottom: 2em;
`;

export default {
  Footer,
  Container,
  ByLine,
  Title,
  LinkSection,
  LinkTitle,
  LinkList,
  Social
};
