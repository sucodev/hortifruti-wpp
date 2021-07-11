import { FoodTypeProps } from "../../Models/AddProductProps";
import styles from "./styles.module.scss";

export function Suggestions({ data, setSearch, setUserInputPrice }: any) {
  function suggestionSelected(value: FoodTypeProps) {
    setUserInputPrice(value.foodPrice);
    setSearch({
      text: value.foodName,
      suggestions: [],
    });
  }

  return (
    <div className={styles.suggestionContainer}>
      {data.map((suggestion: FoodTypeProps) => (
        <tr
          key={suggestion.foodName}
          onClick={() => suggestionSelected(suggestion)}
        >
          <td>{suggestion.foodName}</td>
          <td>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(suggestion.foodPrice)}
          </td>
          <td></td>
          <td></td>
        </tr>
      ))}
    </div>
  );
}
