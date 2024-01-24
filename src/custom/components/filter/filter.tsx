import styles from "./filter.module.scss";
import { Filter } from "../../../common/shared/filter/filter";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Filters = () => {
  const [item, setItem] = useState(Filter);
  const menuItems = [...new Set(Filter.map((index: any) => index.tag))];

  const filterItems = (spo: any) => {
    const newItems = Filter.filter((newindex: any) => newindex.tag === spo);
    setItem(newItems);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardBody}>
        {menuItems.map((index: any) => (
          <button
            className={styles.button}
            onClick={() => filterItems(index)}
            key={index.id}
          >
            {index}
          </button>
        ))}
      </div>
      {item.map((index: any) => (
        <div className={styles.card} key={index.id}>
          <div className={styles.images}>
            <img src={index.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};
