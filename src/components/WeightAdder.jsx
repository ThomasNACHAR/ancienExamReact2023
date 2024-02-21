import { useState } from "react";

function WeightAdder() {
    const [poids, setPoids] = useState(0);

    const addWeight = () => {
        const storedWeights = JSON.parse(localStorage.getItem('weights')) || [];
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        const date = `${day}/${month}/${year}`;
        storedWeights.push({poids, date});
        localStorage.setItem('weights', JSON.stringify(storedWeights))

        
    }
    return (
        <>
            <h3>Ajouter un poids (en kg) : </h3>
            <form onSubmit={addWeight}>
                <input type="number" name="poids" id="poids" value={poids} onChange={e => setPoids(e.target.value)} />
                <button type="submit">Ajouter</button>
            </form>
            
        </>
    )
}

export default WeightAdder;