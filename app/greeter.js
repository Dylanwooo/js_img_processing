/**
 * Created by Dylanwoo on 2017/11/8.
 */


import React,{Component} from 'react';
import config from './config.json';

class Greeter extends Component{
    render(){
        return(
            <div>
                {config.greetText}
            </div>
        )
    }
}

export default Greeter