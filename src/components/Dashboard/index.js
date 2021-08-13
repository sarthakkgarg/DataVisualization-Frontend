import React, { Component } from 'react'
import Dashboard from './Dashboard' 


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
             
            jsondata:[],
            limitState:5
            };
      }

    componentDidMount = async () => {

      }

    changeLimit = async (input) => {
        if(input<1){
            window.alert("Should be greater than 0")
            return
        }
        await this.setState({limitState:parseInt(input)})
        // console.log(this.state.limitState, typeof(this.state.limitState))
        this.loadData()
    }

    loadData = async () => {
            console.log("Started")
        
            let limit = this.state.limitState
            let skip = 0
            
            const res = await fetch("http://localhost:5000/Dashboard", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            limit,
                            skip,
                            
                        }),
                    })
                        .then((res) => res.json())
                        .catch((err)=> console.log("error",err));
            
            console.log(res)
            
            this.setState({jsondata:res.data})
            console.log(this.state.jsondata)

    }



    render() {
        return (
           <Dashboard 
           state={this.state} 
           loadData={this.loadData}
           changeLimit={this.changeLimit}
           />
       
        )
    }
}
