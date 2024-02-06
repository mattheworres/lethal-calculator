/* eslint-disable @typescript-eslint/no-unused-vars */
interface ItemFromJson {
  id: number;
  name: string;
  minPrice: number;
  maxPrice: number;
  twoHanded: boolean;
}

interface SelectListItem {
  id: number;
  label: string;
}

interface SelectedProfitCalcItems {
  [key: number]: number;
}

interface ProfitCalcItemArray {
  selectedItems: SelectedProfitCalcItems[];
}