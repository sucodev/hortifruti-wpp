// ICONS
import { IoIosArrowDown } from "react-icons/io";

// STYLES
import styles from "./styles.module.scss";

export function SingleCategoryTableHead() {
  return (
    <thead className={styles.theadContainer}>
      <tr>
        <th>
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
