import * as React from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const QrCode = () => {
    const [QrText, setQrText] = React.useState("Raam");
    const [QrSize, setQrSize] = React.useState("150");
    const [QrImg, setQrImg] = React.useState(`https://api.qrserver.com/v1/create-qr-code/?size=${QrSize}x${QrSize}&data=${encodeURI(QrText)}`);

    const generateQrCode = () => {
        try {
            setQrImg(`https://api.qrserver.com/v1/create-qr-code/?size=${QrSize}x${QrSize}&data=${encodeURI(QrText)}`);
        } catch (error) {
            console.log(error);
        }
    }

    const downloadQrCode = () => {
        const link = document.createElement('a');
        link.href = QrImg;
        link.download = 'qrcode.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <Box className='app-container' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, textAlign: 'center' }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    QR Code Generator
                </Typography>
                <img src={QrImg} alt="QR Code" className='qr-img' style={{ marginBottom: 20 }} />
                <FormControl fullWidth variant="outlined" margin="normal">
                    <TextField
                        id="qr-text"
                        label="QR Input"
                        variant="outlined"
                        value={QrText}
                        onChange={(e) => setQrText(e.target.value)}
                    />
                </FormControl>
                <FormControl fullWidth variant="outlined" margin="normal">
                    <TextField
                        id="qr-size"
                        label="QR Size"
                        variant="outlined"
                        value={QrSize}
                        onChange={(e) => setQrSize(e.target.value)}
                    />
                </FormControl>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                    <Button variant="contained" onClick={generateQrCode} sx={{ marginRight: 1 }}>
                        Generate QR Code
                    </Button>
                    <Button variant="outlined" onClick={downloadQrCode}>
                        Download QR Code
                    </Button>
                </Box>
            </Paper>
            <Typography variant="body2" component="footer" sx={{ marginTop: 3 }}>
                Designed by RK Raam
            </Typography>
        </Box>
    );
}
