import { useEffect, useState } from "react";

function WeightDisplayer(props) {
    const taille = props.taille;
    console.log(taille)
    const [isEmpty, setIsEmpty] = useState(true);
    const [weights, setWeights] = useState([{}]);

    const removeWeights = () => {
        localStorage.removeItem('weights');
        window.location.reload();
    }

    useEffect(() => {
        const tempWeights = JSON.parse(localStorage.getItem('weights'));
        console.log(tempWeights);
        if (!tempWeights) return;
        setWeights(tempWeights);
        setIsEmpty(false);
    }, [])

    return (
        <>
            <button onClick={removeWeights}>Tout effacer</button>
            {isEmpty ? <p>Veuillez ajouter un poids pour commencer</p>
            : weights.map( (weight, index, array) => {
                const previousWeight = index > 0 ? array[index-1].poids : null;
                const arrow = previousWeight ? ( (previousWeight<weight.poids) ? "⬇️" : (previousWeight>weight.poids) ? "⬆️" : "➡") : ""
                
               return <p>{weight.poids} kg ajouté le : {weight.date} IMC:{(weight.poids/((taille/100)**2)).toFixed(2)} {arrow}</p> 
            })}
        </>
    )
}

export default WeightDisplayer;