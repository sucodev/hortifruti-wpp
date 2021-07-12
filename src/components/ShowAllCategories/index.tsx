// CART HOOK CONTEXT
import { useCartContext } from "../../hooks/useCartContext";

// STYLE
import { Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { SingleCategory } from "../SingleCategory";

export function ShowAllCategories() {
  const { categories } = useCartContext();
  return (
    <Container className={styles.container}>
      <Row>
        {categories.map(({ categoryName, items }) => (
          <SingleCategory
            key={categoryName + " - " + items.id}
            title={categoryName}
            items={items}
          />
        ))}
      </Row>
    </Container>
  );
}
