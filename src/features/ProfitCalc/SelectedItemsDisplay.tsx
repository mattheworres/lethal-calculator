import { Chip } from "@mui/material";
import { getItemById } from "./ItemHelpers";
import { memo } from "react";

interface SelectedItemsDisplayProps {
    selectedItems: ProfitCalcItem
}

const SelectedItemsDisplay = memo(({selectedItems}: SelectedItemsDisplayProps) => {
    return Object.keys(selectedItems).map((id: string) => {
        const fullItem = getItemById(parseInt(id, 10));

        return <Chip key={fullItem.id} label={fullItem.name} />
    });
});

export { SelectedItemsDisplay };