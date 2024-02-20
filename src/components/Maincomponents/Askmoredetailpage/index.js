import React from "react";
import Similarcompare from '../../Pages/Ask-more-page/Similar-compare/Similar-compare';
import Trandingsec from '../../Pages/Ask-more-page/Tranding-sec/Tranding-sec';
import TrandingProgrammers from '../../Pages/Ask-more-page/Tranding-Programmers/Tranding-Programmers';
import Fundamental from '../../Pages/Ask-more-page/Fundamental/Fundamental';
import Ratings from '../../Pages/Ask-more-page/Ratings-frenchise/Ratings';
import FranchiseModel from '../../Pages/Ask-more-page/Franchise-Model/Franchise-Model';

function AskForMoreDetailsPage() {
  return (
    <>
      <Similarcompare />
      <Trandingsec />
      <TrandingProgrammers />
      <Fundamental />
      <Ratings />
      <FranchiseModel />
    </>
  );
}

export default AskForMoreDetailsPage;
