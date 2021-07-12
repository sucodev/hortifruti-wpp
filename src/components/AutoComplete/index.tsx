import { ChangeEvent, useState } from "react";
import { InputProps, SuggestionsProps } from "../../Models/AutoComplete";
import { Input } from "../Input";

import styles from "./styles.module.scss";

export function AutoComplete({
  id,
  name,
  type,
  suggestions,
  product,
  setProduct,
  quantity,
  setQuantity,
  price,
  setPrice,
  select,
  setSelect,
}: InputProps) {
  const [suggestionVisible, setSuggestionVisible] = useState(false);

  function activeSuggestion({ target }: ChangeEvent<HTMLInputElement>) {
    const productName = target.value;
    let suggestionArray = [];

    if (productName.length > 0) {
      const regex = new RegExp(`^${productName}`, "i");
      suggestionArray = suggestions
        .sort()
        .filter((v: SuggestionsProps) => regex.test(v.foodName));
    }
    setProduct({ suggestionArray, text: productName });

    if (suggestionArray.length > 0) {
      setSuggestionVisible(true);
    } else {
      setSuggestionVisible(false);
      setQuantity(0);
      setPrice(0);
    }
  }

  function suggestionSelected(value: SuggestionsProps) {
    setProduct({
      text: value.foodName,
      suggestions: [],
    });
    setSuggestionVisible(false);
    setPrice(value.foodPrice);
    setQuantity(quantity + 1);
    setSelect(!select);
  }

  return (
    <>
      <div className={styles.inputContainer} style={{ position: "relative" }}>
        <Input
          onChange={activeSuggestion}
          value={product.text}
          disabled={select}
          placeholder="Nome do Produto"
        />
        {suggestionVisible && (
          <>
            <div className={`${styles.suggestion}`}>
              {product.suggestionArray.map((product: SuggestionsProps) => (
                <button
                  key={product.id}
                  onClick={() => suggestionSelected(product)}
                >
                  {product.foodName}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
