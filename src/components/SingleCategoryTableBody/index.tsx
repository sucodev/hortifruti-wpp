import { ChangeEvent, useState } from "react";
import { AutoComplete } from "../AutoComplete";
import { Input } from "../Input";

import { BiPencil } from "react-icons/bi";

import styles from "./styles.module.scss";
import { ProductSuggestionsProps } from "../../Models/SingleCategoryTable";

export function SingleCategoryTableBody({
  productSuggestions,
}: ProductSuggestionsProps) {
  const [product, setProduct] = useState({
    text: "",
    suggestions: [],
  });

  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [instructions, setInstructions] = useState("");
  const [productSelected, setProductSelected] = useState(false);

  function onTextChangeQuantity(e: ChangeEvent<HTMLInputElement>) {
    const onlyNumber = +e.target.value.replace(/\D+/g, "");
    if (onlyNumber < 0) {
      setQuantity(0);
    } else {
      setQuantity(onlyNumber);
    }

    if (onlyNumber === 0) {
      setProduct({
        text: "",
        suggestions: [],
      });
      setProductSelected(!productSelected);
    }
  }

  return (
    <tbody>
      <tr className={styles.rowContainer}>
        <td className={styles.rowAutoCompleteItem}>
          <AutoComplete
            placeholder="Nome do Produto"
            suggestions={productSuggestions}
            product={product}
            setProduct={setProduct}
            quantity={quantity}
            setQuantity={setQuantity}
            setPrice={setPrice}
            select={productSelected}
            setSelect={setProductSelected}
          />
        </td>

        <td
          /* eslint-disable */
          className={`${styles.rowAddQuantity} ${
            product.text !== product.text ? styles.disabled : ""
          }`}
          /* eslint-disable */
        >
          <Input
            type="number"
            onChange={onTextChangeQuantity}
            value={quantity.toFixed()}
            placeholder="---"
            hasIcon={<BiPencil />}
            disabled={product.text === ""}
          />
        </td>
        <td className={styles.rowTotalPrice}>
          <p>
            R${" "}
            {price === 0
              ? "R$ 0,00"
              : new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(price * quantity)}
          </p>
        </td>
        <td
          className={`${styles.rowAddInstructions} ${
            product.text === "" && styles.disabled
          }`}
        >
          <Input
            type="text"
            placeholder="Observações"
            onChange={(e) => setInstructions(e.target.value)}
            value={instructions}
            hasIcon={<BiPencil />}
            disabled={product.text === ""}
          />
        </td>
      </tr>
    </tbody>
  );
}
