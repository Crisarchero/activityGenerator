import React from 'react';
import {FormControl,
    InputLabel, Select, MenuItem, Button
} from '@mui/material';



  

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.handleDataFetch = this.handleDataFetch.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.state = {url:"https://www.boredapi.com/api/activity/"}
      }
    handleDataFetch() {
    let url = this.state.url
    console.log(url)
    fetch(url).then(res=>res.json()).then(res => this.props.action(res.activity))
  }
    
    handleSelectChange(event){
        let activityType = event.target.value
        if(activityType == "any"){
            this.setState({url:'https://www.boredapi.com/api/activity/'})
            console.log("Set activity to any.")
        } 
        else{
            let newUrl = 'https://www.boredapi.com/api/activity/?type=' + activityType
            console.log(newUrl)
            this.setState({url : newUrl})
        }
    }
  
    render(){
        return <div>

                    <h1>Activity Generator</h1> 
                    <h3 style = {{color:'#0047AB'}}>Powered by Bored API.</h3>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id = "activity-label">Activity Type</InputLabel>
                            <Select sx = {{p:1}} labelId ="activity-label" label ="Activity Type" onChange={this.handleSelectChange} size = "small">
                                <MenuItem value={"any"}>Any</MenuItem>
                                <MenuItem value={"education"}>Education</MenuItem>
                                <MenuItem value={"recreational"}>Recreational</MenuItem>
                                <MenuItem value={"social"}>Social</MenuItem>
                                <MenuItem value={"diy"}>DIY</MenuItem>
                                <MenuItem value={"charity"}>Charity</MenuItem>
                                <MenuItem value={"cooking"}>Cooking</MenuItem>
                                <MenuItem value={"relaxation"}>Relaxing</MenuItem>
                                <MenuItem value={"music"}>Musical</MenuItem>
                                <MenuItem value={"busywork"}>Busywork</MenuItem>
                            </Select>
                            
                            
                            <Button onClick = {this.handleDataFetch} sx = {{mt:5,}} variant="contained">Generate</Button>
        
                        
                        </FormControl>
                    </div>
            </div>
    }
}