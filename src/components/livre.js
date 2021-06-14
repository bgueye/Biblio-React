import Bouton from '../components/boutons/bouton';

const Livre = (props) => {
    const livre = props.livre;
        return (
            <> 
                <td>{livre.titre}</td>
                <td>{livre.auteur}</td>
                <td>{livre.nbpage}</td>
                <td><Bouton typeBtn = 'btn-warning' click={()=>props.update()}>Modifier</Bouton></td>
                <td><Bouton typeBtn = 'btn-danger' click={()=>props.delete(livre.id)}>Supprimer</Bouton></td>
            </>
        );
}

export default Livre;
