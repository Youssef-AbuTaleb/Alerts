import classes from "./IndustryFilters.module.css";

import health from "../../assets/svg/filters/health.svg";
import materials from "../../assets/svg/filters/materials.svg";
import energy from "../../assets/svg/filters/energy.svg";
import conDic from "../../assets/svg/filters/consumer-discretionary.svg";
import conStap from "../../assets/svg/filters/consumer-staples.svg";
import realEstate from "../../assets/svg/filters/real-estate.svg";
import it from "../../assets/svg/filters/it.svg";
import comm from "../../assets/svg/filters/communication.svg";
import industrials from "../../assets/svg/filters/industrials.svg";
import utilities from "../../assets/svg/filters/utilities.svg";
import financials from "../../assets/svg/filters/financials.svg";
import FilterTitle from "./FilterTitle";

function IndustryFilters() {
  const industryArrayOne = [
    { name: "health care", imgSrc: health },
    { name: "materials", imgSrc: materials },
    { name: "energy", imgSrc: energy },
    { name: "consumer disecretionary", imgSrc: conDic },
    { name: "consumer staples", imgSrc: conStap },
    { name: "real estate", imgSrc: realEstate },
  ];
  const industryArrayTwo = [
    { name: "IT", imgSrc: it },
    { name: "communication", imgSrc: comm },
    { name: "industrials", imgSrc: industrials },
    { name: "utilities", imgSrc: utilities },
    { name: "financials", imgSrc: financials },
  ];
  return (
    <div className={classes.industry}>
      <FilterTitle title="Industry" />

      <div className={classes.lists}>
        <ul className={classes.list}>
          {industryArrayOne.map((item, index) => (
            <li className={classes.item} key={index}>
              <img src={item.imgSrc} alt={item.name} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
        <ul className={classes.list}>
          {industryArrayTwo.map((item, index) => (
            <li className={classes.item} key={index}>
              <img src={item.imgSrc} alt={item.name} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IndustryFilters;
