import React, { Component } from 'react';
import Livre from '../components/livre';
import FormAjoutLivre from '../components/formAjoutLivre';
import FormModifLivre from '../components/formModifLivre';
import Alert from '../components/alert';

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
        idLivreAModifier:0,
        messageAlert:""
    };


    handleDelete = (id)=> {

        const livreIndexTab = this.state.livres.findIndex(l => {
            return l.id === id;
        });

        const newLivres = [...this.state.livres];
        newLivres.splice(livreIndexTab, 1);
        this.setState({
            livres: newLivres,
            messageAlert:{
                message:"Le livre a été supprimé avec succès",
                type:"alert-danger"
            }
        });

    }
 
    handleUpdate = (id,titre,auteur,nbpage)=> {
        const indexLivre = this.state.livres.findIndex(l=>{
            return l.id === id;
        });

        const newLivres = [...this.state.livres];
        const newlivre = {id,titre,auteur,nbpage};
        newLivres[indexLivre]=newlivre;
        this.setState({livres:newLivres,
            idLivreAModifier:0,
            messageAlert:{
                message:"Le livre a été modifié avec succès",
                type:"alert-info"
            }
        })


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
                lastId: oldState.lastId + 1,
                messageAlert:{
                    message:"Le livre a été ajouté avec succès",
                    type:"alert-success"
                }
            }
        });
        this.props.fermerFormAjout();
    }


    render() {
        const afficheForm = this.props.afficheForm;

        return (
            <>
            {this.state.messageAlert && <Alert typeAlert = {this.state.messageAlert.type}>{this.state.messageAlert.message}</Alert>}
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
                    if (livre.id !== this.state.idLivreAModifier){   
                        return (
                            <tr key = {livre.id}>
                                <Livre 
                                    livre = {livre} 
                                    delete = {this.handleDelete}
                                    update = {()=>this.setState({idLivreAModifier:livre.id})}
                                />
                            </tr>
                        )
                    }else{
                        return (
                            <tr key = {livre.id}>                            
                                <FormModifLivre 
                                livre = {livre}
                                handleUpdate= {this.handleUpdate}
                                idLivreAModifier = {this}
                                />
                            </tr>
                        )                        
                    }
                    })
                    } 
                </tbody>
            </table>
            {afficheForm && <FormAjoutLivre validation = {this.handleAjoutLivre}/>}
            </>
        )
    }
}
