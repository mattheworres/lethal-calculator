import items from '../Data/items.json'

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

export { getItemById };