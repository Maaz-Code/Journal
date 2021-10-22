import { Button, styled } from '@material-ui/core'

const CustomButton = styled(Button)(() => ({
    color: '#e9e9e9',
    backgroundColor: '#30343a',
    '&:hover': {
      backgroundColor: '#3a404d',
    },
    borderRadius: '7px',
  }));

export default CustomButton