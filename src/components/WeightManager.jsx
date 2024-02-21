import WeightAdder from "./WeightAdder";
import WeightDisplayer from "./WeightDisplayer";

function WeightManager(props) {
    const taille = props.taille;
    return (
        <>
            <WeightAdder></WeightAdder>
            <WeightDisplayer taille={taille}></WeightDisplayer>
        </>
    )
}

export default WeightManager;