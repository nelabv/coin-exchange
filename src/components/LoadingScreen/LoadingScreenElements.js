import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 50px 0;
  border-radius: 15px;
`;

export const Text = styled.p`
  line-spacing: 1px;
  margin-top: 20px;
  color: ${props => props.theme.colors.disabled};
`;