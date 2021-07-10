import { Table } from "react-bootstrap";
import styles from "./styles.module.scss";

import { IoIosArrowDown } from "react-icons/io";
import { AddProductInTable } from "../AddProductInTable";

import { ListProductItemsProps } from "../../Models/CartContextProps";

function ProductTableHeader() {
  return (
    <thead>
      <tr>
        <th className={styles.item}>
          <div>
            Item <IoIosArrowDown />
          </div>
        </th>
        <th>
          <div>Preço</div>
        </th>
        <th>
          <div>
            Quantidade <IoIosArrowDown />
          </div>
        </th>
        <th>
          <div>
            Instruções para o separador <IoIosArrowDown />
          </div>
        </th>
      </tr>
    </thead>
  );
}

export function ProductTable({ categoryItems }: ListProductItemsProps) {
  return (
    <div>
      <Table className={styles.tableContainer} responsive="sm">
        <ProductTableHeader />
        <AddProductInTable categoryItems={categoryItems} />
        <AddProductInTable categoryItems={categoryItems} />
        <AddProductInTable categoryItems={categoryItems} />
      </Table>
    </div>
  );
}
