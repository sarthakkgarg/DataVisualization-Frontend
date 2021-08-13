import React, { Component } from 'react'
import TreeMap from './Treemap'
import Button from "@material-ui/core/Button";


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gasIntensity: 100,
            oilIntensity:100,
            exporteIntensity:100,
            productionIntensity:100,
            enviromentIntensity:100,
            batteryIntensity:100,
            biofuelIntensity:100,
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
    let gas = 0
    this.state.jsondata.map((res) => {
        if (res.topic === "gas") {
            if(typeof(res.intensity)==="number"){
                gas = gas + res.intensity
            }
        } return "done"
    })
    this.setState({gasIntensity:gas})

    let oil = 0
    this.state.jsondata.map((res) => {
        if (res.topic === "oil") {
            if(typeof(res.intensity)==="number"){
                oil = oil + res.intensity
            }
        } return "done"
    })
    this.setState({oilIntensity:oil})
    let exporte = 0
    this.state.jsondata.map((res) => {
        if (res.topic === "export") {
            if(typeof(res.intensity)==="number"){
                console.log(res.intensity, typeof(res.intensity))
                exporte = exporte + res.intensity
                console.log("exporte",exporte)
            }
        } return "done"
    })
    this.setState({exporteIntensity:exporte})

    let production = 0
    this.state.jsondata.map((res) => {
        if (res.topic === "production") {
            if(typeof(res.intensity)==="number"){
                console.log(res.intensity, typeof(res.intensity))
                production = production + res.intensity
                console.log("exporte",production)
            }
        } return "done"
    })
    this.setState({productionIntensity:production})

    let enviroment = 0
    this.state.jsondata.map((res) => {
        if (res.topic === "energy") {
            if(typeof(res.intensity)==="number"){
                console.log(res.intensity, typeof(res.intensity))
                enviroment = enviroment + res.intensity
                console.log("exporte",enviroment)
            }
        } return "done"
    })
    this.setState({enviromentIntensity:enviroment})

    let battery = 0
    this.state.jsondata.map((res) => {
        if (res.topic === "battery") {
            if(typeof(res.intensity)==="number"){
                console.log(res.intensity, typeof(res.intensity))
                battery = battery + res.intensity
                console.log("exporte",battery)
            }
        }
        return "done"
    })
    this.setState({batteryIntensity:battery})

    let biofuel = 0
    this.state.jsondata.map((res) => {
        if (res.topic === "biofuel") {
            if(typeof(res.intensity)==="number"){
                console.log(res.intensity, typeof(res.intensity))
                biofuel = biofuel + res.intensity
                console.log("exporte",biofuel)
            }
        } return "done"
    })
    this.setState({biofuelIntensity:biofuel})
}


render() {
    return (
        <>
            <Button onClick={this.startSorting} variant="outlined">intensity</Button>
            <TreeMap state={this.state} data={this.data} />
        </>
    )
}
}
