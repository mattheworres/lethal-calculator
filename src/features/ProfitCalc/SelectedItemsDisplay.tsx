import { Chip } from "@mui/material";
import { getItemById } from "./ItemHelpers";
import { memo } from "react";

interface SelectedItemsDisplayProps {
    selectedItems: SelectedProfitCalcItems
}

const SelectedItemsDisplay = memo(({selectedItems}: SelectedItemsDisplayProps) => {
    return Object.keys(selectedItems).map((id: string) => {
        const fullItem = getItemById(parseInt(id, 10));
        const quantity = selectedItems[parseInt(id, 10)];

        const label = <span>{fullItem.name} <span className="itemQty">x{quantity}</span></span>

        return <Chip 
            color="primary"
            key={fullItem.id}
            label={label}
            sx={{
                mx: "2px"
            }} />
    });
});

export { SelectedItemsDisplay };