import React, { Component } from 'react'
import TreeMap from './Treemap'
import Pie from './Pie'
import Map from './Map'
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';



const SelectFilter = styled.select`
    margin: 0px 10px 0px 10px;
    width: 300px;
    height: 37px;
    color: black;
    outline: none;
    border: 1px solid darkgrey;
    border-radius: 5px;
    font-size: 14px;
    text-transform: uppercase;
    padding: 0px 10px 0px 5px;
`


const LoaderContainer = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    bottom:0;
    left:0;
    right:0;

`
// const Piecss = styled.div`
//     width: 50%;
//     height: 50%;
//     position: absolute;
//     display: flex;
//     justify-content: center;
//     align-items: center;


//     `
const Treemapcss = styled.div`
margin-top: 70px;
width: 1000px;
    height: 500px;

    `
const Piecss = styled.div`
    margin-top: 70px;
    width: 1200px;
    height: 500px;
    
    `
const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content : center;
    align-items : center;   
    flex-direction: column;
`



export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsondata: '',
            gasIntensity: 100,
            oilIntensity: 100,
            exporteIntensity: 100,
            productionIntensity: 100,
            enviromentIntensity: 100,
            batteryIntensity: 100,
            biofuelIntensity: 100,
            countryList: [1],
            filterKey: '',
        }
    }

    componentDidMount = () => {
        this.loadData();
        console.log("Triggered")
    }

    getcountryData = async () => {
        const getData = await fetch("http://localhost:5000/Dashboard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                type: "country",
                filterKey: this.state.filterKey


            }),
        })
            .then((getData) => getData.json())
            .catch((err) => console.log("error", err));

        await this.setState({ jsondata: getData.data })
        this.startSorting()
        console.log("Changing Data")


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

        this.setState({ jsondata: res.data })
        // console.log(this.state.jsondata)

        const init = await fetch("http://localhost:5000/init", {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
            },

        })
            .then((init) => init.json())
            .catch((err) => console.log("error", err));

        // console.log(init)

        const newList = init.countryWithNumber.sort(function (a, b) {
            var keyA = b.number,
                keyB = a.number;
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
        // console.log(newList)
        newList.splice(0, 1)
        this.setState({ countryList: newList })

    }
    changeFilter = (e) => {
        this.setState({ filterKey: e.target.value })
        // console.log(this.state.filterKey)

    }
    startSorting = () => {

        let gas = 0
        this.state.jsondata.map((res) => {
            if (res.topic === "gas") {
                if (typeof (res.intensity) === "number") {
                    gas = gas + res.intensity
                }
            } return "done"
        })
        this.setState({ gasIntensity: gas })

        let oil = 0
        this.state.jsondata.map((res) => {
            if (res.topic === "oil") {
                if (typeof (res.intensity) === "number") {
                    oil = oil + res.intensity
                }
            } return "done"
        })
        this.setState({ oilIntensity: oil })
        let exporte = 0
        this.state.jsondata.map((res) => {
            if (res.topic === "export") {
                if (typeof (res.intensity) === "number") {
                    // console.log(res.intensity, typeof (res.intensity))
                    exporte = exporte + res.intensity
                    // console.log("exporte", exporte)
                }
            } return "done"
        })
        this.setState({ exporteIntensity: exporte })

        let production = 0
        this.state.jsondata.map((res) => {
            if (res.topic === "production") {
                if (typeof (res.intensity) === "number") {
                    // console.log(res.intensity, typeof (res.intensity))
                    production = production + res.intensity
                    // console.log("exporte", production)
                }
            } return "done"
        })
        this.setState({ productionIntensity: production })

        let enviroment = 0
        this.state.jsondata.map((res) => {
            if (res.topic === "energy") {
                if (typeof (res.intensity) === "number") {
                    console.log(res.intensity, typeof (res.intensity))
                    enviroment = enviroment + res.intensity
                    console.log("exporte", enviroment)
                }
            } return "done"
        })
        this.setState({ enviromentIntensity: enviroment })

        let battery = 0
        this.state.jsondata.map((res) => {
            if (res.topic === "battery") {
                if (typeof (res.intensity) === "number") {
                    console.log(res.intensity, typeof (res.intensity))
                    battery = battery + res.intensity
                    console.log("exporte", battery)
                }
            }
            return "done"
        })
        this.setState({ batteryIntensity: battery })

        let biofuel = 0
        this.state.jsondata.map((res) => {
            if (res.topic === "biofuel") {
                if (typeof (res.intensity) === "number") {
                    console.log(res.intensity, typeof (res.intensity))
                    biofuel = biofuel + res.intensity
                    console.log("exporte", biofuel)
                }
            } return "done"
        })
        this.setState({ biofuelIntensity: biofuel })
    }


    render() {
        return (
            <>
                <MainContainer>
                    {this.state.countryList[0] === 1 ?
                        <LoaderContainer>
                            <CircularProgress />
                        </LoaderContainer> : ''}
                    <Typography variant="h1" style={{ fontFamily: "Marcellus, serif", fontSize: "85px" }}>
                        Data Visualization
                    </Typography>
                    <div style={{ widht: "1000px" }}>
                        <Treemapcss>
                            <Typography>
                                Data Visualization By BarChart
                            </Typography>
                            {this.state.jsondata === '' ?
                                <Button onClick={this.startSorting} variant="outlined" disabled>Get Intensity Data</Button> :
                                <Button onClick={this.startSorting} variant="outlined" enable >Get Intensity Data</Button>}
                            <SelectFilter onChange={this.changeFilter}>
                                {this.state.countryList.map((one) => (
                                    <option value={one.country}>{one.country}</option>
                                ))}
                            </SelectFilter>
                            <Button onClick={() => this.getcountryData()} variant="outlined">Filter Country</Button>
                            <TreeMap state={this.state} data={this.data} />
                        </Treemapcss>
                        <Piecss>
                            <Typography>
                                Data Visualization By PieChart
                            </Typography>
                            <Pie state={this.state} data={this.data} />
                        </Piecss>
                        <Piecss>
                            <Typography>
                                Data Visualization By PieChart
                            </Typography>
                        </Piecss>
                    </div>
                </MainContainer>
            </>
        )
    }
}
