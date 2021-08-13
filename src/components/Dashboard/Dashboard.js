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
import Treemap from '../Treemap';








const useStyles = makeStyles((theme) => ({
  cardd: {
    width: "2500px",
    display: "flex",
    marginTop: "30px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },


}));



function Dashboard(props) {
  // console.log(props)
  const classes = useStyles();
  const [age, setAge] = useState();
  const [limit, setLimit] = useState(5)
  

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>

        <div style={{height:"500px", width:"1000px"}}>
          <Treemap/>
        </div>
     

    </>
  );

}
export default Dashboard;
