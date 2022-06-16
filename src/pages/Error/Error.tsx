import { FC } from 'react';
import { Alert } from '@mui/material';

interface iErrorProps {
  text: string;
}

export const Error: FC<iErrorProps> = ({ text }) => {
  return <Alert severity="error">{text}</Alert>;
};
