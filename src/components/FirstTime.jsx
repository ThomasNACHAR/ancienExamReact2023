import { useState } from "react";

function FirstTime() {
    const [prenom, setPrenom] = useState("");
    const [taille, setTaille] = useState(0);

    const createProfile = (e) => {
        e.preventDefault();
        const profil = {prenom, taille};
        localStorage.setItem('data', JSON.stringify(profil));
        window.location.reload();
    }
    return (
        <>
        <h1>Bienvenue sur notre application !</h1>
        <h2>Veuillez saisir votre prénom et votre taille</h2>
        <form onSubmit={createProfile}>
        <label htmlFor="prenom">Prénom : </label>
        <input type="text" name="prenom" id="prenom" value={prenom} onChange={e => setPrenom(e.target.value)} />
        <label htmlFor="taille">Taille : </label>
        <input type="number" name="taille" id="taille" value={taille} onChange={e => setTaille(e.target.value)} /><span> cm</span>
        <button type="submit">Envoyer</button>
        </form>
        </>
    )
}

export default FirstTime;