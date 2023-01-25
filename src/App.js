import React from 'react';
import {Container, Box} from '@mui/material';
import Form from './components/Form'
import Activity from './components/Activity'
import './index.css';


export default class App extends React.Component{
    constructor(props){
      super(props);
      this.handleDataChange = this.handleDataChange.bind(this);
      this.state = {activity:""}
    }    
  
  handleDataChange(suggestion){
    console.log(suggestion)
    this.setState({activity: suggestion + "."});
  } 


    render() {
      return <body>
        
  
                <Container  maxWidth="sm">
                        <Box className = "box" sx = {{m:4, p:2}}>
                            <Form action = {this.handleDataChange}/>
                        </Box>
                    
                        <Box className = "box" sx = {{m:4, p:2}}>
                        
                            <Activity data = {this.state.activity}/>
                  
                            
                        </Box>
                </Container>
                
           
        </body>
    }
  }