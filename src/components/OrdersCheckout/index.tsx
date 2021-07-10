import { Container, Row, Col } from "react-bootstrap";
import { useCartContext } from "../../hooks/useCartContext";
import { ProductTable } from "../ProductTable";

import styles from "./styles.module.scss";

export function OrdersCheckout() {
  const { categories } = useCartContext();

  return (
    <Container className={styles.container}>
      <Row>
        {categories.map(({ categoryName, items }) => (
          <Col key={categoryName} lg={9} className={styles.content}>
            <h2>{categoryName}</h2>
            <div className={styles.contentOffers}>
              <img
                src="https://via.placeholder.com/825x255"
                alt="Ofertas válidas"
              />
              <p>Ofertas válidas de 00/00 à 00/00</p>
            </div>
            <ProductTable categoryItems={items} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
