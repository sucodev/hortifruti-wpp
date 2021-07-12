// REACT
import { useState } from "react";

// STYLES
import { Table } from "react-bootstrap";
import styles from "./styles.module.scss";

// COMPONENTS
import { SingleCategoryTableHead } from "../SingleCategoryTableHead";
import { SingleCategoryTableBody } from "../SingleCategoryTableBody";
import { ProductSuggestionsProps } from "../../Models/SingleCategoryTable";

export function SingleCategoryTable({
  productSuggestions,
}: ProductSuggestionsProps) {
  const [newRowInTable, setNewRowInTable] = useState(1);

  function createNewRowInTable() {
    setNewRowInTable(newRowInTable + 1);
  }

  return (
    <>
      <Table className={styles.tableContainer} responsive="sm">
        <SingleCategoryTableHead />
        {[...Array(newRowInTable)].map((_, index) => (
          <SingleCategoryTableBody
            key={index}
            productSuggestions={productSuggestions}
          />
        ))}
      </Table>
      <button className={styles.addNewRowTable} onClick={createNewRowInTable}>
        Adicionar Produto
      </button>
    </>
  );
}
