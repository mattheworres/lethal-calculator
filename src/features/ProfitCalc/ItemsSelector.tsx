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
        console.log(`ACR is ${reason}`);
        if (reason === AutocompleteChangeReasons.Clear) {
            setSelectedItem(defaultItem);
        } else if (reason === AutocompleteChangeReasons.SelectOption) {
            if (option === null) {
                return;
            }

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

        //Ensure we only have numeric input
        if (isNaN(parsedValue) || parsedValue < 1) {
            return;
        }

        setQuantity(parsedValue);
    }

    const addItemAndResetForm = () => {
        addItem(selectedItem.id, quantity);

        setSelectedItem(defaultItem);
        setQuantity(defaultQuantity);

        valid.current = false;

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

    const autocompleteEquality = (option: SelectListItem, value: SelectListItem) => {
        return option.id === value.id;
    }

    useEffect(() => {
        const old = valid.current;
        valid.current = selectedItem.id > 0 && quantity > 0;
        console.log(`Valid just set to ${valid.current}, was ${old} and ID is ${selectedItem.id}, qhile qty is ${quantity}`);
    }, [selectedItem, quantity])

    return (
        <div id="itemSelectorContainer">
            <Autocomplete
                disablePortal
                autoHighlight
                isOptionEqualToValue={autocompleteEquality}
                options={remainingOptions}
                value={selectedItem}
                data-testid="autocomplete"
                onChange={handleOnAutocompleteChange}
                renderInput={params => <TextField {...params} inputRef={itemRef} inputProps={{ ...params.inputProps, "data-testid": "autocompleteInput" }} label="Select an item" />}
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
                inputProps={{"data-testid": "quantity"}}
                label="Quantity"
                onKeyDown={handleQuantityKeyDown}
                sx={{display: 'inline-block', ml: "10px"}} />
            <Button
                variant="contained"
                color="primary"
                size="medium"
                data-testid="addButton"
                disabled={!valid.current}
                onClick={handleAddClick}
                
                sx={{
                    ml: '10px'
                }}>
                    Add
            </Button>
        </div>
    );
}

export { ItemsSelector };