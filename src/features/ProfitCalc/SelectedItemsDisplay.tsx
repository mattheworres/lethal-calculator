import { Chip } from "@mui/material";
import { getItemById } from "./ItemHelpers";
import React, { memo } from "react";

interface SelectedItemsDisplayProps {
    items: ItemFromJson[],
    selectedItems: SelectedProfitCalcItems
}

const SelectedItems = memo(({items, selectedItems}: SelectedItemsDisplayProps) => {
    const onDelete = (event: React.SyntheticEvent) => {
        // TODO: implement.
        console.log('Chip delete', event);
    }
    
    return Object.keys(selectedItems).map((id: string) => {
        const fullItem = getItemById(items, parseInt(id, 10));
        const quantity = selectedItems[parseInt(id, 10)];

        const label = <span>{fullItem.name} <span className="itemQty">x{quantity}</span></span>

        return <Chip
            color="primary"
            key={fullItem.id}
            className="itemChip"
            data-testid='item-chip'
            label={label}
            onDelete={onDelete}
            sx={{
                mx: "2px"
            }} />
    });
});

const SelectedItemsDisplay = (props: SelectedItemsDisplayProps) => {
    return (
        <div id="selectedItemsContainer">
            <SelectedItems {...props} />
        </div>
    )
}

export { SelectedItemsDisplay };