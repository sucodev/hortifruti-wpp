import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  suggestions?: SuggestionsProps | any;

  product?: any;
  setProduct?: any;

  quantity?: any;
  setQuantity?: any;

  price?: any;
  setPrice?: any;

  select?: any;
  setSelect?: any;
}
export interface SuggestionsProps {
  id: number;
  foodName: string;
  foodPrice: number;
  suggestionSelected: (v: string) => void;
}
export interface AutoCompleteSuggestionProps {
  options: {
    suggestionArray: [];
    text: string;
  };
  setProduct?: any;
}
