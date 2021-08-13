import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const Container = styled.div`

// // background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
  // display: flex; 
  flex-wrap : wrap;
  justify-content: space-between;
//   flex-direction:row;
  // align-items:center;
  
//   height : 15vh;
// padding : 10%;

// `;

export default function Table() {
    return (
        
             <Container>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>USA</MenuItem>
            <MenuItem value={20}>Russia</MenuItem>
            <MenuItem value={30}>Colombia</MenuItem>
          </Select>
        </FormControl>

        <button>
          Show Data
        </button>
        <input placeholder="0" type="number" onChange={(e) => setLimit(e.target.value)} />
        <button onClick={() => props.changeLimit(limit)} >Get Data</button>

        {props.state.jsondata.map((bringdata) => (
          <Card className={classes.cardd}   >
            <CardActionArea>
              <CardContent style={{ display: "flex" }}>

                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.added}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.country}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.end_year}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.impact}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.insight}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.intensity}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.likelihood}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.pestle}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.published}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.region}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.relevance}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.sector}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.source}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.start_year}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.topic}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                  {bringdata.url}
                </Typography>



              </CardContent>
            </CardActionArea>
            <CardActions>


            </CardActions>
          </Card>
        ))}
      </Container>

            
        
    )
}
