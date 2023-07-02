import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "./../../assets/meals.jpg";
export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Happy Meals</h1>
        <HeaderCartButton onClick ={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="food" />
      </div>
    </Fragment>
  );
}
