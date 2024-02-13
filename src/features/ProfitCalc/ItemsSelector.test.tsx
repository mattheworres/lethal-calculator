/**
 * @jest-environment jsdom
 */

import { render, fireEvent, screen, within } from '@testing-library/react';
import { ItemsSelector } from './ItemsSelector';
import { ReactKeypressDownValues } from '../../shared/enums';

const remainingOptions = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
];

describe('ItemsSelector', () => {
  const addItemMock = jest.fn();

  beforeEach(() => {
    addItemMock.mockClear();
  });

  it('calls addItem when an item is selected and Add button is clicked', async () => {
    render(<ItemsSelector remainingOptions={remainingOptions} addItem={addItemMock} />);
    const autocomplete = screen.getByTestId('autocomplete');
    const autocompleteInput = within(autocomplete).getByTestId('autocompleteInput');
    const quantityInput = screen.getByTestId('quantity');
    const addButton = screen.getByTestId('addButton');

    fireEvent.change(autocompleteInput, { target: { value: remainingOptions[0].id } });

    // Firing enter is necessary for a "change" to be registered to the component
    fireEvent.keyDown(autocomplete, { key: ReactKeypressDownValues.Enter});

    fireEvent.change(quantityInput, { target: { value: 2 } });

    fireEvent.click(addButton);

    expect(addItemMock).toHaveBeenCalledWith(1, 2);
  });
});
