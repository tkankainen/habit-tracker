import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin-bottom: 1em;
  margin-top: 1em;
  `;

export const Wrapper = styled.section`
    padding: 3em;
    background: papayawhip;
  `;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "palevioletred" : "white"};
  color: ${props => props.$primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Form = styled.div`
  width: 100%;
  background: #fff;
  padding: 30px;
  max-width: 450px;
  border-radius: 10px;
  box-shadow: rgba(3, 3, 3, 0.1) 10px 0px 50px;
`;

export const Field = styled.div`
  margin-bottom: 30px;
`;

export const Label = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
  fort-weight: 600;
  color: #777;
`;

export const Input = styled.input`
  width: 100%;
  padding: 25px 15px;
  border: 0;
  background: #f0f0f0;
  border-radius: 5px;
  font-size: 18px;
  color: #555;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const Th = styled.th`
  background-color: #ddd;
  font-weight: bold;
  padding: 0.5rem;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
`;