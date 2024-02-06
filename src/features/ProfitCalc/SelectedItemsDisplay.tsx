import { Chip } from "@mui/material";
import { getItemById } from "./ItemHelpers";
import React, { memo } from "react";

interface SelectedItemsDisplayProps {
    selectedItems: SelectedProfitCalcItems
}

const SelectedItems = memo(({selectedItems}: SelectedItemsDisplayProps) => {
    const onDelete = (event: React.SyntheticEvent) => {
        console.log('Chip delete', event);
    }
    
    return Object.keys(selectedItems).map((id: string) => {
        const fullItem = getItemById(parseInt(id, 10));
        const quantity = selectedItems[parseInt(id, 10)];

        const label = <span>{fullItem.name} <span className="itemQty">x{quantity}</span></span>

        return <Chip
            color="primary"
            key={fullItem.id}
            label={label}
            onDelete={onDelete}
            sx={{
                mx: "2px"
            }} />
    });
});

const SelectedItemsDisplay = ({ selectedItems }: SelectedItemsDisplayProps) => {
    return (
        <div id="selectedItemsContainer">
            <SelectedItems selectedItems={selectedItems} />
        </div>
    )
}

export { SelectedItemsDisplay };