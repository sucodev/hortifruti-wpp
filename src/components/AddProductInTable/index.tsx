import { ChangeEvent, useRef, useState } from "react";
import { BiPencil } from "react-icons/bi";

import { Suggestions } from "../Suggestions";
import { Input } from "../Input";

import styles from "./styles.module.scss";
import { FoodTypeProps } from "../../Models/AddProductProps";

export function AddProductInTable({ categoryItems }: any) {
  const reference = useRef<HTMLTableRowElement>(null);

  const [userInputPrice, setUserInputPrice] = useState(0);
  const [userInputQuantity, setUserInputQuantity] = useState("");
  const [userInputInstructions, setUserInputInstructions] = useState("");

  const [search, setSearch] = useState({ text: "", suggestions: [] });

  function onTextChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    let suggestions = [];

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = categoryItems
        .sort()
        .filter((v: FoodTypeProps) => regex.test(v.foodName));
    }
    setUserInputPrice(0);

    setSearch({ suggestions, text: value });
  }

  const { suggestions } = search;

  return (
    <>
      <tbody>
        <tr className={styles.itemRow} ref={reference}>
          <td className={styles.adicionarItem}>
            <div>
              <Input
                type="text"
                onChange={onTextChange}
                value={search.text}
                placeholder="Adicionar Item"
              />
            </div>
          </td>
          <td className={styles.preco}>
            <p>
              {userInputPrice === 0
                ? "---"
                : new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(userInputPrice)}
              /kg
            </p>
          </td>
          <td className={styles.quantidade}>
            <div>
              <Input
                type="number"
                onChange={(e) => setUserInputQuantity(e.target.value)}
                value={userInputQuantity}
                placeholder="---"
              />
              <BiPencil />
            </div>
          </td>
          <td className={styles.instrucoes}>
            <div>
              <Input
                type="text"
                onChange={(e) => setUserInputInstructions(e.target.value)}
                value={userInputInstructions}
                placeholder="Adicionar Item"
              />
              <BiPencil />
            </div>
          </td>
        </tr>
      </tbody>
      <Suggestions
        setUserInputPrice={setUserInputPrice}
        setSearch={setSearch}
        data={suggestions}
      />
    </>
  );
}
