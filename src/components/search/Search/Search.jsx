import React from "react";
import Form from "../Form/Form";

import classes from "./Search.module.css"

const Search = () => {
  return (
    <section className={`${classes.wrapper} content`}>
      <Form />
    </section>
  )
};

export default Search;
