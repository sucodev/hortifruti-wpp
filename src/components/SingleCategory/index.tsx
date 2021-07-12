// STYLE
import { Col } from "react-bootstrap";
import styles from "./styles.module.scss";

// MODELS PROPS
import { SingleCategoryProps } from "../../Models/SingleCategory";
import { SingleCategoryTable } from "../SingleCategoryTable";

export function SingleCategory({ title, items }: SingleCategoryProps) {
  return (
    <Col key={items.id} lg={9} className={styles.category}>
      <h2>{title}</h2>
      <div className={styles.contentOffers}>
        <img src="https://via.placeholder.com/825x255" alt="Ofertas válidas" />
        <p>Ofertas válidas de 00/00 à 00/00</p>
      </div>

      <SingleCategoryTable productSuggestions={items} />
    </Col>
  );
}
