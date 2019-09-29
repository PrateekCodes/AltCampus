import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Tag.scss";

export default function Tag(props) {
  let { tag } = props;
  return (
    <Link className='tag' key={tag._id} to={props}>
      {tag.name}
    </Link>
  );
}