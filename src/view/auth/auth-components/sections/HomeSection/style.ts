import styled from 'styled-components';
import { SectionButton } from '../../../../../styles/auth/Buttons';

const Home = styled.div`
  font-size: 1.25em;
  width: 100%;
  max-width: 1046px;
  height: 100%;
  max-height: 560px;
  display: flex;
  margin: auto 0 auto auto;
  position: relative;
`;

const Buttons = styled.div`
  display: flex;
  max-width: 507px;
`;

const Button = styled(SectionButton)`
  font-size: 0.75em;
  :first-child {
    margin-right: 3.66666667em;
  }
`;

const Content = styled.div`
  height: 100%;
  max-width: 533px;
`;

const ContentText = styled.div`
  & > *:nth-child(2) {
    margin-top: 1.1em;
    margin-bottom: 1.8em;
  }
  & > *:last-child {
    margin-top: 1.8em;
    margin-bottom: 3.4em;
  }
`;

const List = styled.ul`
  list-style-type: disc;
`;

const ListItem = styled.li`
  margin-bottom: 0.7em;
`;

export { Home, Buttons, Button, Content, ContentText, List, ListItem };
