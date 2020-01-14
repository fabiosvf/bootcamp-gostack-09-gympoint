import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 950px;
  min-width: 800px;
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

export const Aside = styled.aside`
  display: flex;

  div {
    width: 250px;
    margin-left: 10px;
  }
`;

export const Grid = styled.div`
  background: #fff;
  display: grid;
  /* grid-template-columns: auto auto auto auto; */
  grid-template-columns: 3fr 3fr 3fr 3fr;
  padding: 10px;

  > div {
    margin: 10px;
  }
`;

export const TitleName = styled.div`
  font-weight: bold;
  grid-column: 1;
`;

export const TitleDuration = styled.div`
  font-weight: bold;
  grid-column: 2;
  justify-self: center;
`;

export const TitleValue = styled.div`
  font-weight: bold;
  grid-column: 3;
  justify-self: end;
`;

export const DetailName = styled.div`
  grid-column: 1;
`;

export const DetailDuration = styled.div`
  grid-column: 2;
  justify-self: center;
`;

export const DetailValue = styled.div`
  grid-column: 3;
  justify-self: end;
`;

export const DetailCommand = styled.div`
  grid-column: 4;
  justify-self: center;

  > a {
    margin: 0 10px;
  }
`;

export const GridSeparator = styled.hr`
  border: 0.7px solid #eee;
  grid-column-start: 1;
  grid-column-end: 5;
`;

export const LinkEdit = styled(Link)`
  color: #4d85ee;
`;

export const LinkDelete = styled(Link)`
  color: #ee4d64;
`;
