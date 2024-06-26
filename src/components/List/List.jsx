import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

const List = () => {
//   const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();
  const [type, setType] = useState('restaurants');
  const [rating,setRating] = useState('');

  const places = [
    { name : 'cool place'},
    { name : 'best bear'},
    { name : 'cool place'},
    { name : 'best bear'},
    { name : 'cool place'},
    { name : 'best bear'},
    { name : 'cool place'},
    { name : 'best bear'},
    { name : 'cool place'},
    { name : 'best bear'},
    { name : 'cool place'},
    { name : 'best bear'},
  ];
//   useEffect(() => {
//     setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
//   }, [places]);



  return (
    <div className={classes.container}>
      <Typography variant="h5">Food & Dining around you</Typography>
      {/* {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      )  */}
      
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="3.5">Above 3.5</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
              <MenuItem value="4.8">Above 4.8</MenuItem>

            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails place={place} />
              </Grid>
            ))}
          </Grid>
        </>
    </div>
  );
};

export default List;
