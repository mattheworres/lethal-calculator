import { useState } from 'react';
import { Card, Paper, Typography } from "@mui/material";
import { ItemTypeahead } from "./ItemTypeahead";
import { SelectedItemsDisplay } from "./SelectedItemsDisplay";

const ProfitCalc = () => {
  const [selectedItems, setSelectedItems] = useState<ProfitCalcItem>({});

  const addItem = (id: number, quantity: number) => {
    console.log('Add item called', id, quantity);
    const newSelectedItems = {...selectedItems, [id]: quantity};
    setSelectedItems(newSelectedItems);
  };

  return (
    <>
      <Paper elevation={1} className="Body" sx={{
        m: '10px',
        p: '10px'
      }}>
        <Typography variant="h3">Profit Calculations</Typography>
        <Typography variant="subtitle1">Add your items to get started.</Typography>
        <ItemTypeahead addItem={addItem} />
        <SelectedItemsDisplay selectedItems={selectedItems} />
        <div>Profit quota input here</div>
      </Paper>
      <Card>Total Profit Calc</Card>
      <Card>Closest to Quota</Card>
      <Card>Fastest to Quota</Card>
    </>
  )
}

export { ProfitCalc };