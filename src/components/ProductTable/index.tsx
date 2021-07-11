import { Table } from "react-bootstrap";
import styles from "./styles.module.scss";

import { IoIosArrowDown } from "react-icons/io";
import { AddProductInTable } from "../AddProductInTable";

import { ListProductItemsProps } from "../../Models/CartContextProps";
import { useState } from "react";
import { JsxElement } from "typescript";

function ProductTableHeader() {
  return (
    <thead>
      <tr>
        <th className={styles.item}>
          <div>
            Produto <IoIosArrowDown />
          </div>
        </th>
        <th>
          <div>Quantidade</div>
        </th>
        <th>
          <div>
            Total <IoIosArrowDown />
          </div>
        </th>
        <th>
          <div>
            Observações <IoIosArrowDown />
          </div>
        </th>
      </tr>
    </thead>
  );
}

export function ProductTable({ categoryItems }: ListProductItemsProps) {
  const [rows, setRows] = useState(1);

  return (
    <div>
      <Table className={styles.tableContainer} responsive="sm">
        <ProductTableHeader />
        {[...Array(rows)].map((_, i) => (
          <AddProductInTable key={i} categoryItems={categoryItems} />
        ))}
      </Table>
      <button
        className={styles.addNewRowTable}
        style={{
          background: "var(--color-brown-900)",
          padding: "10px",
          fontSize: "14px",
        }}
        onClick={() => setRows(rows + 1)}
      >
        Adicionar Produto
      </button>
    </div>
  );
}
