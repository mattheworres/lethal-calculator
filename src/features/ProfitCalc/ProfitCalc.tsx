import { useState } from 'react';
import { Card, Paper, TextField, Typography } from "@mui/material";
import { ItemsSelector } from "./ItemsSelector";
import { SelectedItemsDisplay } from "./SelectedItemsDisplay";
import { generateRemainingOptions } from './ItemHelpers';
import items from '../Data/items.json';
import './ProfitCalc.css';
import { TotalProfitDash } from './TotalProfitDash';

const ProfitCalc = () => {
  const [selectedItems, setSelectedItems] = useState<SelectedProfitCalcItems>({});
  const [profitQuota/* , setProfitQuota */] = useState<number>(0);
  const remainingOptions = generateRemainingOptions(items, selectedItems);
  const showProfitRelatedItems = Object.keys(selectedItems).length > 0;

  const addItem = (id: number, quantity: number) => {
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
        <ItemsSelector remainingOptions={remainingOptions} addItem={addItem} />
        <SelectedItemsDisplay items={items} selectedItems={selectedItems} />
        {showProfitRelatedItems && <TextField
          type="number"
          value={profitQuota}
          label="Profit Quota (optional)"
          sx={{
            mt: "10px"
          }}
        />}
      </Paper>
      {showProfitRelatedItems && <TotalProfitDash items={items} selectedItems={selectedItems} />}
      <Card>Closest to Quota</Card>
      <Card>Fastest to Quota</Card>
    </>
  )
}

export { ProfitCalc };