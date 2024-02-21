import WeightManager from "./WeightManager";
function Home(props) {
    const updateProfile = () => {
        localStorage.removeItem('data');
        window.location.reload();
    }
    return (
        <>
        <h1>Application de suivi IMC</h1>
        <h2>Bienvenue {props.prenom} !</h2>
        <h2>Votre taille : {props.taille} cm</h2>
        <button onClick={updateProfile}>Modifier le profil</button>
        <WeightManager taille={props.taille}></WeightManager>
        </>
    )
}

export default Home;