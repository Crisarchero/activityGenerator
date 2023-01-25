import React from 'react';
import {
} from '@mui/material';


export default class Activity extends React.Component{

    render(){
        return <div style = {{
                    height:'50px', 
                    display:'flex', 
                    alignItems:'center', 
                    justifyContent:'center'
                }}>
                  
                 {this.props.data}
            </div>
    }
}