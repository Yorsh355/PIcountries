import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/action";
import s from "../styles/FilterCountries.module.css";

const FilterCountries = () => {
  const activity = useSelector((state) => state.activities);

  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleChangeAct = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleSubmitAct = (e) => {
    e.preventDefault();
    dispatch(actions.filterActivity(input));
    dispatch(actions.update());
  };

  const handleChangeCont = (e) => {
    setInput(e.target.value);
  };

  const handleSubmitCont = (e) => {
    e.preventDefault();
    dispatch(actions.filterContinent(input));
    dispatch(actions.update());
  };
  console.log(input);
  return (
    <div className={s.container_filter}>
      <form>
        <button type="submit" onClick={handleSubmitAct}>
          Actividades
        </button>
        <select name="Actividades" onChange={handleChangeAct}>
          <option value=""> -- Select Actividad -- </option>
          {activity.map((op) => (
            <option value={op}>{op}</option>
          ))}
        </select>

        <button type="submit" onClick={handleSubmitCont}>
          Continent
        </button>
        <select name="Continent" onChange={handleChangeCont}>
          <option value=""> -- Select Continent -- </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
};

export default FilterCountries;
