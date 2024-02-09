import { Card, Typography } from "@mui/material"
import { getItemById, currencyFormat } from "./ItemHelpers";

interface TotalProfitDashProps {
    items: ItemFromJson[],
    selectedItems: SelectedProfitCalcItems
}
// MEMO?

const TotalProfitDash = ({items, selectedItems}: TotalProfitDashProps) => {
    let averageSum = 0;
    let maxSum = 0;
    let minSum = 0;

    Object.keys(selectedItems).forEach((id: string) => {
        const intId = parseInt(id, 10);
        const matchingJsonObject = getItemById(items, intId);
        const quantity = selectedItems[intId];
        const tempAvg = quantity * matchingJsonObject.avgPrice;
        console.log(`Ok, so for ${matchingJsonObject.name} we have ${quantity} of them, avg is ${matchingJsonObject.avgPrice}, which we have as ${tempAvg} to add to ${averageSum}`)
        averageSum += quantity * matchingJsonObject.avgPrice;
        maxSum += quantity * matchingJsonObject.maxPrice;
        minSum += quantity * matchingJsonObject.minPrice;
    });

    return (
        <Card
            id="totalProfitDash"
            variant="elevation">
                <div className="left">
                    <Typography variant="h1">
                        <span className="adornment">$</span>{currencyFormat(averageSum)}
                    </Typography>
                    <Typography variant="subtitle1">average</Typography>
                </div>
                <div className="right">
                    <Typography variant="subtitle1">max</Typography>
                    <Typography variant="h3">
                        <span className="adornment">$</span>{maxSum}
                    </Typography>
                    <Typography variant="h3">
                        <span className="adornment">$</span>{minSum}
                    </Typography>
                    <Typography variant="subtitle1">min</Typography>
                </div>
        </Card>
    );
}

export { TotalProfitDash };