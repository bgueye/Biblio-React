import React, { Component } from 'react';
import Livre from '../components/livre';
import FormAjoutLivre from '../components/formAjoutLivre';

export default class Livres extends Component {
    state = {
        livres: [
            {id:1, titre: 'L\'algorithme selon H2prog', auteur: 'Mathieu Gaston', nbpage: 200, },
            {id:2, titre: 'La France du 19ème', auteur: 'Albert Patrick', nbpage: 150, },
            {id:3, titre: 'LLe monde des animaux', auteur: 'Marc MERLIN', nbpage: 300, },
            {id:4, titre: 'L\'algorithme selon H2prog', auteur: 'Gaston', nbpage: 200, },
            {id:5, titre: 'Le virus d\'Asie', auteur: 'Tya MILO', nbpage: 200, }
        ],
        lastId: 6,
        idLivreAModifier:0  
    };


    handleDelete = (id)=> {

        const livreIndexTab = this.state.livres.findIndex(l => {
            return l.id === id;
        });

        const newLivres = [...this.state.livres];
        newLivres.splice(livreIndexTab, 1);
        this.setState({livres: newLivres});

    }
 
    handleUpdate = (id)=> {
        console.log('modification du livre '+id);
    }

    handleAjoutLivre =(titre,auteur,nbpage) =>{
        const livresTab = [...this.state.livres];
        const newLivre = {
            id:this.state.lastId + 1, 
            titre: titre, 
            auteur: auteur, 
            nbpage: nbpage 
        };
        livresTab.push(newLivre);

        this.setState(oldState => {
            return {
                livres: livresTab,
                lastId: oldState.lastId + 1
            }
        });
        this.props.fermerFormAjout();
    }


    render() {
        const afficheForm = this.props.afficheForm;

        return (
            <>
            <table className="table text-center">
                <thead>
                    <tr className="table-dark">
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Nombre de page</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                   {this.state.livres.map(livre => {
                       return (
                        <tr key = {livre.id}>
                            <Livre 
                                livre = {livre} 
                                delete = {this.handleDelete}
                                update = {this.handleUpdate}
                            />
                        </tr>
                        )})
                    } 
                </tbody>
            </table>
            {afficheForm && <FormAjoutLivre validation = {this.handleAjoutLivre}/>}
            </>
        )
    }
}
