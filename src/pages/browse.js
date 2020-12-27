import React from "react";
import { BrowseContainer } from "../containers/browse";
import useContent from "../hooks/use-content";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  //we need series & films
  const { series } = useContent("series");
  const { films } = useContent("films");
  console.log(series);
  console.log(films);

  //we need slides
  const slides = selectionFilter({ series, films });
  console.log(slides);

  // pass to browser container
  return <BrowseContainer slides={slides} />;
}
