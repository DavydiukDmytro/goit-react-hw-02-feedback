import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  padding-bottom: 30px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: var(--color-white);
  color: var(--color-primary-bg);
  font-size: 22px;
  border: 2px solid var(--color-secondary-bg);
  border-radius: 10px;
  padding: 4px 15px;
  &:hover,
  &:focus {
    color: var(--color-white);
    background-color: var(--color-primary-bg);
  }
`;
