interface ItemFromJson {
  id: number;
  name: string;
  minPrice: number;
  maxPrice: number;
  twoHanded: boolean;
}

interface ProfitCalcItem {
  [key: number]: number
}

interface ProfitCalcItemArray {
  selectedItems: ProfitCalcItem[]
}