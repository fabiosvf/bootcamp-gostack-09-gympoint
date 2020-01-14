import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  min-width: 600px;
  justify-self: center;
  padding: 30px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  > span {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Grid = styled.div`
  background: #fff;
  display: grid;
  /* grid-template-columns: auto auto auto auto; */
  grid-template-columns: 3fr 1fr;
  padding: 10px;

  > div {
    margin: 10px;
  }
`;

export const TitleStudent = styled.div`
  font-weight: bold;
  grid-column: 1;
`;

export const DetailStudent = styled.div`
  grid-column: 1;
`;

export const DetailCommand = styled.div`
  grid-column: 2;
  justify-self: center;

  > a {
    margin: 0 10px;
  }
`;

export const GridSeparator = styled.hr`
  border: 0.7px solid #eee;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const LinkAnswer = styled(Link)`
  color: #4d85ee;
`;
