import React from 'react';
import { Button, Paper } from '@mui/material';

const AuthForm = ({
  btnText,
  btnDisabled,
  onSubmit,
  children,
}) => (
  <Paper
    component="form"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      p: 2,
    }}
    onSubmit={onSubmit}
  >
    {children}
    <Button
      variant="contained"
      color="success"
      type="submit"
      disabled={btnDisabled}
    >
      {btnText}
    </Button>
  </Paper>
);

export default AuthForm;
