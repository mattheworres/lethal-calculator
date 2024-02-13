/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { SelectedItemsDisplay } from './SelectedItemsDisplay';

const mockItems = [
    {
        id: 1,
        name: 'Item 1',
        minPrice: 10,
        maxPrice: 20,
        avgPrice: 15,
        weight: 1,
        twoHanded: false,
        conductive: false,
        hasBattery: false,
    },
    {
        id: 2,
        name: 'Item 2',
        minPrice: 15,
        maxPrice: 25,
        avgPrice: 20,
        weight: 2,
        twoHanded: true,
        conductive: true,
        hasBattery: true,
    },
];

const mockSelectedItems: SelectedProfitCalcItems = {
    1: 3,
    2: 1,
};

describe('SelectedItemsDisplay', () => {
    it('renders selected items chips', () => {
        const { getAllByTestId } = render(<SelectedItemsDisplay items={mockItems} selectedItems={mockSelectedItems} />);

        const chips = getAllByTestId('item-chip');

        expect(chips.length).toEqual(mockItems.length);
    });
});