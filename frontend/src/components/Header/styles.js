import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border: 1px solid #ddd;
  height: 64px;
  min-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }
`;

export const VerticalRow = styled.div`
  border-left: 1px solid #ddd;
  height: 32px;
  margin: 0 25px;
`;

export const StyledLink = styled(Link)`
  margin-right: 20px;
  font-weight: bold;
  font-size: 15;
  color: ${props =>
    props.selected === '1'
      ? props.editmode === '1'
        ? '#ee4d64'
        : '#444'
      : '#999'};
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  strong {
    color: #666;
    text-align: right;
  }

  a {
    color: #ee4d64;
  }
`;
