import { getItemById, generateRemainingOptions, currencyFormat } from "./ItemHelpers";

describe('getItemById', () => {
    const items: ItemFromJson[] = [
        { id: 1, name: 'Item 1', minPrice: 10, maxPrice: 20, avgPrice: 15, weight: 1, twoHanded: false, conductive: true, hasBattery: false },
        { id: 2, name: 'Item 2', minPrice: 20, maxPrice: 30, avgPrice: 25, weight: 2, twoHanded: true, conductive: false, hasBattery: true },
        { id: 3, name: 'Item 3', minPrice: 30, maxPrice: 40, avgPrice: 35, weight: 3, twoHanded: false, conductive: true, hasBattery: false },
    ];

    it('returns the correct item by id', () => {
        const id = 2;
        const expected = { id: 2, name: 'Item 2', minPrice: 20, maxPrice: 30, avgPrice: 25, weight: 2, twoHanded: true, conductive: false, hasBattery: true };
        expect(getItemById(items, id)).toEqual(expected);
    });

    it('returns undefined for an id that does not exist', () => {
        const id = 4;
        expect(getItemById(items, id)).toBeUndefined();
    });
});

describe('generateRemainingOptions', () => {
    const items: ItemFromJson[] = [
        { id: 1, name: 'Item 1', minPrice: 10, maxPrice: 20, avgPrice: 15, weight: 1, twoHanded: false, conductive: true, hasBattery: false },
        { id: 2, name: 'Item 2', minPrice: 20, maxPrice: 30, avgPrice: 25, weight: 2, twoHanded: true, conductive: false, hasBattery: true },
        { id: 3, name: 'Item 3', minPrice: 30, maxPrice: 40, avgPrice: 35, weight: 3, twoHanded: false, conductive: true, hasBattery: false },
    ];

    it('returns all items when no items are selected', () => {
        const selectedItems: SelectedProfitCalcItems = {};
        const expected = [
            { id: 1, label: 'Item 1' },
            { id: 2, label: 'Item 2' },
            { id: 3, label: 'Item 3' },
        ];
        expect(generateRemainingOptions(items, selectedItems)).toEqual(expected);
    });

    it('excludes selected items', () => {
        const selectedItems: SelectedProfitCalcItems = { 2: 2 };
        const expected = [
            { id: 1, label: 'Item 1' },
            { id: 3, label: 'Item 3' },
        ];
        expect(generateRemainingOptions(items, selectedItems)).toEqual(expected);
    });

    it('returns an empty array when all items are selected', () => {
        const selectedItems: SelectedProfitCalcItems = { 1: 1, 2: 2, 3: 3 };
        const expected: SelectListItem[] = [];
        expect(generateRemainingOptions(items, selectedItems)).toEqual(expected);
    });
});

describe('currencyFormat', () => {
    it('formats 1000 as 1,000', () => {
        expect(currencyFormat(1000)).toBe('1,000');
    });

    it('formats 123456789 as 123,456,789', () => {
        expect(currencyFormat(123456789)).toBe('123,456,789');
    });

    it('formats 123 as 123 (no commas needed)', () => {
        expect(currencyFormat(123)).toBe('123');
    });

    it('formats 0 as 0', () => {
        expect(currencyFormat(0)).toBe('0');
    });

    it('formats -123456 as -123,456', () => {
        // Assuming the function is expected to handle negative numbers correctly.
        expect(currencyFormat(-123456)).toBe('-123,456');
    });
});

