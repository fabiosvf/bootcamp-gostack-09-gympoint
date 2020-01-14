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
  grid-template-columns: 2fr 1fr 2fr 2fr 1fr 1fr;
  padding: 10px;

  > div {
    margin: 10px;
  }
`;

export const TitleStudent = styled.div`
  font-weight: bold;
  grid-column: 1;
`;

export const TitlePlan = styled.div`
  font-weight: bold;
  grid-column: 2;
  justify-self: center;
`;

export const TitleStart = styled.div`
  font-weight: bold;
  grid-column: 3;
  justify-self: center;
`;

export const TitleEnd = styled.div`
  font-weight: bold;
  grid-column: 4;
  justify-self: center;
`;

export const TitleActive = styled.div`
  font-weight: bold;
  grid-column: 5;
  justify-self: center;
`;

export const DetailStudent = styled.div`
  grid-column: 1;
`;

export const DetailPlan = styled.div`
  grid-column: 2;
  justify-self: center;
`;

export const DetailStart = styled.div`
  grid-column: 3;
  justify-self: center;
`;

export const DetailEnd = styled.div`
  grid-column: 4;
  justify-self: center;
`;

export const DetailActive = styled.div`
  grid-column: 5;
  justify-self: center;
`;

export const DetailCommand = styled.div`
  grid-column: 6;
  justify-self: center;

  > a {
    margin: 0 10px;
  }
`;

export const GridSeparator = styled.hr`
  border: 0.7px solid #eee;
  grid-column-start: 1;
  grid-column-end: 7;
`;

export const LinkEdit = styled(Link)`
  color: #4d85ee;
`;

export const LinkDelete = styled(Link)`
  color: #ee4d64;
`;
