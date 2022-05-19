import { Container } from "@mui/material";
import MainWidget from "../components/MainWidget";
import medellin from "../assets/data/medellin.json";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container className={styles.Home}>
      <MainWidget city={medellin}></MainWidget>
    </Container>
  );
}
