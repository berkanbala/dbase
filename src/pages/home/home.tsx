import React from "react";
import styles from "./home.module.scss";
import { Navbar } from "../../custom/components/navbar/navbar";
import { ContentPage } from "../../custom/components/contentPage/contentPage";
import { Header } from "../../common/components/layout/header/header";

export const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <ContentPage />
    </div>
  );
};
