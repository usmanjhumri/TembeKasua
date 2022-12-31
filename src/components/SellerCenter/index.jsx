import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './components/addressform/index';
import PaymentForm from './components/paymentform/index';
import Review from './components/Review/index';
import { Divider } from '@mui/material';
import './index.css'
import BankAccount from './components/BankAccount';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Seller Account', 'Business Information', 'Bank Account', 'Summary'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <BankAccount/>;
      case 3:
        return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function SellerCenter() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Box
      sx={{
        display:"flex",
        justifyContent:"space-between"
      }}        
      
      >
        
        <Box>
          <Typography variant="h6"  noWrap sx={{
            fontSize:"20px",
            textTransform:"uppercase",
            fontWeight:700,
          }}>
            seller<span className='sellerCenter'>center</span>
          </Typography>
        </Box>
        <Box>
          <Typography sx={{
            fontSize:"14px",
            textTransform:"uppercase",
            background:"#5071b7",
            color:"white"
          }}>
            raise a claim
          </Typography>
        </Box>
      </Box>
      <Divider sx={{

}}/>
      <Typography m={2} sx={{
        fontSize:"20px",
        color:"#5e5d5d"
      }} >
            Register and start selling today - create your own seller account 
          </Typography>
          <Stepper activeStep={activeStep} sx={{  }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, background:"#f0f5f1" }}>
          
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length  ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        
      </Container>
    </ThemeProvider>
  );
}