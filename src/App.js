import React from 'react';
import { Box } from '@mui/material';
import Form from './components/Form'
import Activity from './components/Activity'
import './index.css';
import video from './video/waves.mp4'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#311b92',
     
    },
  },
});
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.state = { activity: "" }
  }

  handleDataChange(suggestion) {
    console.log(suggestion)
    this.setState({ activity: suggestion + "." });
  }


  render() {
    return <ThemeProvider theme = {theme}>
      <body>


        <div className="container">
          <Box className="box" sx={{ m: 4, p: 2, }}>
            <Form action={this.handleDataChange} />
          </Box>

          <Box className="box" sx={{ m: 4, p: 2 }}>

            <Activity data={this.state.activity} />


          </Box>
        </div>
        <div class="glass">

        </div>
        <video className="wavesVideo" loop autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>

      </body>
    </ThemeProvider>
  }
}