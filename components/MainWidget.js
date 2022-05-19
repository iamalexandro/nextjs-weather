import Grid from "@mui/material/Grid";
import medellin from "../assets/data/medellin.json";
import styles from "../styles/MainWidget.module.css";

function MainWidget(props) {
  return (
    <div className={styles.mainWidget}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <p className={styles.noMargin}>
            {`${props.city.currentConditions.dayhour}`}
          </p>
          <h1 className={`${styles.noMargin} ${styles.cityName}`}>
            {props.city.region.split(",")[0]}
          </h1>
          <h2 className={`${styles.noMargin} ${styles.mood}`}>
            {props.city.currentConditions.comment}
          </h2>
        </Grid>
        <Grid item xs={6}>
          <img
            className={styles.weatherIcon}
            src={props.city.currentConditions.iconURL}
            alt="weather"
          ></img>
        </Grid>
        <Grid item xs={6}>
          <h1 className={styles.temperature}>
            {props.city.currentConditions.temp.c + "°"}
          </h1>
        </Grid>
        <Grid item xs={6}>
          <p className={`${styles.noMargin} ${styles.weatherInfo}`}>
            Max: 19° Mín:14°
          </p>
        </Grid>
        <Grid item xs={6}>
          <p className={`${styles.noMargin} ${styles.weatherInfo}`}>
            Sensación térmica 21°
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainWidget;
