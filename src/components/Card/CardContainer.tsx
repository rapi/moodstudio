// CardContainer.tsx
import React, { FC, ReactNode } from "react";
import styles from "./CardContainer.module.css";

interface CardContainerProps {
  children: ReactNode;
}

const CardContainer: FC<CardContainerProps> = ({ children }) => {
  return <div className={styles.cardContainer}>{children}</div>;
};

export default CardContainer;
