import items from '../Data/items.json';

const getItemById = (id: number): ItemFromJson => {
  let foundItem!: ItemFromJson;

  items.forEach((item: ItemFromJson) => {
    if (item.id === id) {
      foundItem = item;
      return;
    }
  });

  return foundItem;
}

const generateRemainingOptions = (items: ItemFromJson[], selectedItems: SelectedProfitCalcItems): SelectListItem[] => {
  return items.filter(item => !(item.id in selectedItems))
    .map(item => ({id: item.id, label: item.name}));
};

const currencyFormat = (value: number) => {
  return value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export { getItemById, generateRemainingOptions, currencyFormat };