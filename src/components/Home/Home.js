import React from 'react'
import Background_img from "../../assets/cover.jpg"
import classes from "./Home.module.css"
import Img_1 from "../../assets/bottle_1.jpg"
import Img_2 from "../../assets/bottle_2.jpg"
import Img_3 from "../../assets/bottle_3.jpg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={classes.container}>
        <Link to="/"> <h1 className={classes.title}>Aqualifi</h1></Link>
        <div className={classes.homecontent}>
          <img className={classes.background} src={Background_img} alt='background_img' />
          <p className={classes.intro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus condimentum quam. Sed est urna, pharetra eu consectetur eget, lacinia fermentum arcu. Duis ex mi, posuere quis nunc id, scelerisque cursus ex. Sed imperdiet urna a lacus interdum, et semper nisl facilisis. Nullam urna lectus, faucibus nec elit at, venenatis sagittis ipsum. Sed auctor elementum magna at consectetur. Vivamus eget semper sapien. Donec efficitur congue elit. Ut a mi id nibh ultrices egestas.</p>
        </div>

        <div className={classes.feature}>
          <div className={classes.items}>
            <img className={classes.pic} src={Img_1} alt="feture_1" />
            <Link to="/feature_1"> <h3 className={classes.feature_title}>Feature 1 </h3></Link>
            <p className={classes.feature_intro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus condimentum quam. </p>
          </div>
          <div className={classes.items}>
            <img className={classes.pic} src={Img_2} alt="feture_1" />
            <Link to="/feature_2"> <h3 className={classes.feature_title}>Feature 2 </h3></Link>
            <p className={classes.feature_intro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus condimentum quam. </p>
          </div>
          <div className={classes.items}>
            <img className={classes.pic} src={Img_3} alt="feture_1" />
            <Link to="/feature_3"> <h3 className={classes.feature_title}>Feature 3 </h3></Link>
            <p className={classes.feature_intro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus condimentum quam. </p>
          </div>
        </div>
    </div>
  )
}

export default Home