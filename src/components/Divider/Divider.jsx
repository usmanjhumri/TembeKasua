import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
export default function Divide() {

    return (
        <Divider sx={{padding:"25px"}}>
            <div>
                <Typography style={{
                    fontFamily: 'Archivo',
                    fontStyle: 'italic',
                    fontWeight: 800,
                    fontSize: '20px',
                    lineHeight: '22px',
                    display: ' flex',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>

                    What people are saying about us
                </Typography>
            </div>
        </Divider >


    )


}