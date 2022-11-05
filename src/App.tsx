import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Agree, Disagree } from './Buttons';
import { ResultAgreed, ResultDisagreed } from './Results';


function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs ></Grid>
        <Grid xs={10}>
          <Box sx={{ marginTop: '7vh' }}>
            <Paper elevation={24} style={{ padding: '25px', border: "2px solid black" }}><p><strong>What is GCV?</strong></p>

              <p>GCV stands for &quot;Global Consensus Value&quot; of the Pi Tokens. The Core Team stated there is no such type of value, and they are right. We can&#39;t call something &quot;global consensus&quot; without showing how many people agree with that value. Also, Pi isn&#39;t a stable currency; the only way to keep it at a value is if no one on Earth is willing to sell it lower. This app is to make it clear how many people agree with this value and how many disagree.</p>

              <p><strong>1 pi = 314 159 $(USD) according to GCV.</strong></p>

              <p><strong>[One Pi is equal to three hundred fourteen thousand one hundred fifty-nine US dollars.]</strong></p>

              <p>Do you agree with this valuation? Would you buy and sell Pi tokens at or around this price? Do you feel this GCV is the value which is fair and you wouldn&#39;t sell your Pi any cheaper?</p>

              <p>If you feel <strong>YES</strong>, this is how you value Pi, then please click on the &quot;<strong>I Agree</strong>&quot; button. If <strong>NOT</strong>, please click on the &quot;<strong>I Disagree</strong>&quot; button. If you feel this vote isn&#39;t for you, then you can leave now because there is nothing else you can find here.</p>

              <p>After clicking the button, you will face a window where you can choose to share your information with us. Why is it necessary? Because we have to prevent someone from sending a vote more than once, or voting for both options, etc. With this authentication method, we can make sure one Pi account has just one vote on this cause. The server is storing the usernames, but the usernames and which option they chose cannot be connected by viewing the database. We only store the usernames to prevent multiple votes. Good luck, choose wisely.</p></Paper>
            <Stack direction="row" sx={{ marginTop: '5vh', display: 'flex', justifyContent: 'center' }} spacing={10}>
              <Agree></Agree>
              <Disagree></Disagree>
            </Stack>
            <Stack direction="row" sx={{ marginTop: '5vh', display: 'flex', justifyContent: 'center' }} spacing={10}>
              <ResultAgreed></ResultAgreed>
              <ResultDisagreed></ResultDisagreed>
            </Stack>
          </Box>
        </Grid>
        <Grid xs></Grid>
      </Grid>
    </Box >
  );
}

export default App;
