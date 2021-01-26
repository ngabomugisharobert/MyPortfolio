import React from "react";
import Mycards from "./MyCards";
import { Grid } from "@material-ui/core";
import dtList from "./ProjectData";
import hobby from './HobbyData'
import './Cards.css'

const MyCard = () => {
  const getCard = cardObj => {
    return (
      <Grid item xs={8} sm={4}>
        <Mycards {...cardObj} />
      </Grid>
    );
  };

  return (
    <>
    <div className="project_type">
      <h3>Professional Projects</h3>
    </div>
    <Grid container spacing={2}>
      {dtList.map(cardObj => getCard(cardObj))}
    </Grid>
    <div className="project_type">
      <h3>Hobby Projects</h3>
    </div>
    <Grid container spacing={2}>
      {hobby.map(cardObj => getCard(cardObj))}
    </Grid>
    </>
  );
};

export default MyCard;
