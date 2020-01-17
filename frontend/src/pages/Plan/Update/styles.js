import styled from 'styled-components';

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

export const Aside = styled.div`
  display: flex;

  button:last-child {
    margin-left: 10px;
  }
`;

export const Fields = styled.div`
  background: #fff;
  display: grid;
  /* grid-template-columns: auto auto auto auto; */
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;

  > div {
    margin: 10px;
  }
`;

export const FieldTitle = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;

export const FieldDuration = styled.div`
  grid-column: 1;
`;

export const FieldPrice = styled.div`
  grid-column: 2;
`;

export const FieldTotal = styled.div`
  grid-column: 3;
`;
