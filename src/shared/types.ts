/* eslint-disable @typescript-eslint/no-unused-vars */
interface ItemFromJson {
  id: number;
  name: string;
  minPrice: number;
  maxPrice: number;
  avgPrice: number;
  twoHanded: boolean;
}

interface SelectListItem {
  id: number;
  label: string;
}

interface SelectedProfitCalcItems {
  [key: number]: number;
}

// TODO: is this item array necessary?
interface ProfitCalcItemArray {
  selectedItems: SelectedProfitCalcItems[];
}