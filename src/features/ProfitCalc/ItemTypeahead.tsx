import Button from "@mui/material/Button";
import { useState } from "react";

interface ItemTypeaheadProps {
    addItem: (id: number, quantity: number) => void
}

const ItemTypeahead = ({addItem}: ItemTypeaheadProps) => {
    const [counter, setCounter] = useState(1);

    const handleClick = () => {
        addItem(counter, 3);

        if (counter === 3) {
            setCounter(1);
        } else {
            setCounter(counter + 1);
        }
    }
    
    return (
        <div>
            Item typeahead
            <Button variant="text" onClick={handleClick}>Hooray!</Button>
        </div>
    );
}

export { ItemTypeahead };