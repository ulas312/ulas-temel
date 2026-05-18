import axios from 'axios';
import { FormEvent, ChangeEvent, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cardSx } from '../../theme/theme';

interface FormInputs {
  email: string;
  subject: string;
  message: string;
}

const FORMBOLD_URL = 'https://formbold.com/s/35KY8';

export default function EmailForm() {
  const [inputs, setInputs] = useState<FormInputs>({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: FORMBOLD_URL,
      data: inputs,
    })
      .then(() => {
        toast.success('Message sent!');
        setInputs({ email: '', subject: '', message: '' });
      })
      .catch(() => {
        toast.error('Something went wrong. Please try again or email directly.');
      });
  };

  return (
    <Card sx={{ maxWidth: 480, width: '100%', ...cardSx }}>
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        <Typography variant="h3" gutterBottom>
          Send a message
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Or use the buttons above — I’ll get back to you when I can.
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              id="email"
              label="Your email"
              type="email"
              required
              fullWidth
              value={inputs.email}
              onChange={handleChange}
            />
            <TextField
              id="subject"
              label="Subject"
              fullWidth
              value={inputs.subject}
              onChange={handleChange}
            />
            <TextField
              id="message"
              label="Message"
              required
              fullWidth
              multiline
              minRows={4}
              value={inputs.message}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" size="large" fullWidth>
              Send message
            </Button>
          </Stack>
        </Box>
        <ToastContainer position="bottom-left" theme="colored" />
      </CardContent>
    </Card>
  );
}
