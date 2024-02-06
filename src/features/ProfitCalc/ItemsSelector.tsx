import './ItemsSelector.css';
import { Autocomplete, AutocompleteChangeReason, Button, TextField } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { AutocompleteChangeReasons, ReactKeypressDownValues } from '../../shared/enums';

interface ItemsSelectorProps {
    remainingOptions: SelectListItem[],
    addItem: (id: number, quantity: number) => void
}

const defaultItem = {id: 0, label: ""};
const defaultQuantity = 1;

const ItemsSelector = ({remainingOptions, addItem}: ItemsSelectorProps) => {
    const [selectedItem, setSelectedItem] = useState<SelectListItem>(defaultItem);
    const [quantity, setQuantity] = useState(defaultQuantity);
    const itemRef = useRef<HTMLInputElement>();
    const quantityRef = useRef<HTMLInputElement>();
    const valid = useRef<boolean>(false);

    const handleOnAutocompleteChange = (_event: React.SyntheticEvent, option: SelectListItem | null, reason: AutocompleteChangeReason) => {
        _event.preventDefault();
        console.log(`hoac called. reason: ${reason}, option: `, option);
        
        if (reason === AutocompleteChangeReasons.Clear) {
            setSelectedItem(defaultItem);
        } else if (reason === AutocompleteChangeReasons.SelectOption) {
            console.log('uh, so SO?');
            if (option === null) {
                console.log('return early from SO');
                return;
            }
            console.log('selected item letsgooooooo');

            setSelectedItem(option);
            quantityRef.current && quantityRef.current.focus();
        }
    }
    // TODO: item images within dropdown??

    const handleQuantityFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget && event.currentTarget.select();
    }

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget && event.currentTarget.value;
        const parsedValue = parseInt(value, 10);

        if (isNaN(parsedValue)) {
            return;
        }

        setQuantity(parsedValue);
    }

    const addItemAndResetForm = () => {
        addItem(selectedItem.id, quantity);

        setSelectedItem(defaultItem);
        setQuantity(defaultQuantity);

        itemRef.current && itemRef.current.focus();
    }

    const handleAddClick = () => {
        if (!valid.current) {
            return;
        }

        addItemAndResetForm();
    }

    const handleQuantityKeyDown = (event: React.KeyboardEvent) => {
        if (event.key !== ReactKeypressDownValues.Enter || valid.current === false) {
            return;
        }

        addItemAndResetForm();
    }

    useEffect(() => {
        valid.current = selectedItem.id > 0;
    }, [selectedItem, quantity])

    return (
        <div id="itemSelectorContainer">
            <Autocomplete
                disablePortal
                options={remainingOptions}
                value={selectedItem}
                onChange={handleOnAutocompleteChange}
                renderInput={(params) => <TextField {...params} inputRef={itemRef} helperText="Select an item" />}
                sx={{
                    width: '25%',
                    display: 'inline-block'
                }} />
            <TextField
                inputRef={quantityRef}
                onFocus={handleQuantityFocus}
                onChange={handleQuantityChange}
                required
                type="number"
                value={quantity}
                name="quantity"
                helperText="Quantity"
                variant="filled"
                onKeyDown={handleQuantityKeyDown}
                sx={{display: 'inline-block'}} />
            <Button
                variant="contained"
                color="primary"
                size="medium"
                disabled={!valid.current}
                onClick={handleAddClick}>
                    Add
            </Button>
        </div>
    );
}

export { ItemsSelector };