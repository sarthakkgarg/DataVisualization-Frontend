import React, { Component } from 'react'
import TreeMap from './Treemap'
import Button from "@material-ui/core/Button";
import Data from "./Data";


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                
                
               
            ],
            gasIntensity:""
        }
    }

    componentDidMount = () => {
        this.loadData()
    }

    loadData = async () => {
        console.log("started")

        const res = await fetch("http://localhost:5000/Dashboard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                type: "intensity"

            }),
        })
            .then((res) => res.json())
            .catch((err) => console.log("error", err));

        console.log(res)
        this.setState({ jsondata: res.data })
        console.log(this.state.jsondata)
    }
    startSorting = () => {
        let gasIntensity = 0
        this.state.jsondata.map((res) => {
            if(res.topic === "gas"){
                if(typeof(gasIntensity += parseInt(res.intensity)==="number")){
                    gasIntensity = gasIntensity += parseInt(res.intensity)
                };
            }
        })
        console.log(gasIntensity)
    }


    render() {
        return (
            <>
                <Button onClick={this.startSorting} variant="outlined">intensity</Button>
                <TreeMap data={this.state.data} />
            </>
        )
    }
}
