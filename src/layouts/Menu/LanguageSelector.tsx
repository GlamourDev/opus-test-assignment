import React, { useEffect, useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Context } from "../../store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 167,
      left: 0,
      float: "left",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const Languages = () => {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");
  // @ts-ignore
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    setCountry(state.currentLng.slice(0, 2));
  });
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountry(event.target.value as string);
    dispatch({ type: "SET_LANG", payload: event.target.value });
  };
  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          id="simple-select-outlined"
          className="country-select-outlined"
          value={country}
          variant="outlined"
          onChange={handleChange}
          label="Country"
        >
          <MenuItem value="en">Inglise</MenuItem>
          <MenuItem value="et">Eesti</MenuItem>
          <MenuItem value="lt">Leedu</MenuItem>
          <MenuItem value="de">Saksa</MenuItem>
          <MenuItem value="ru">Vene</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Languages;
