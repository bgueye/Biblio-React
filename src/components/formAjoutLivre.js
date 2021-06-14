import React, { Component } from 'react';
import Bouton from './boutons/bouton';

export default class FormAjoutLivre extends Component {
    state  = {
        titreSaisi:"",
        auteurSaisi:"",
        nbPageSaisi:""
    }

    handleValidationForm = (event) => {
        event.preventDefault();
        this.props.validation(this.state.titreSaisi,this.state.auteurSaisi,this.state.nbPageSaisi);
        this.setState({
            titreSaisi:"",
            auteurSaisi:"",
            nbPageSaisi:""
        });

    }
    
    render() {

        return (
            <>
            <h2 className ="text-center text-primary" style ={{fontFamily:'Sigmar One'}}>Affichage du formulaire d'ajout</h2>
            <form>
            <div className="mb-3">
                <label htmlFor="titre" className="form-label">Titre du livre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="titre" 
                    value = {this.state.titreSaisi}
                    onChange = {(event) => this.setState({titreSaisi:event.target.value})}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="auteur" className="form-label">Auteur du livre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="auteur" 
                    value = {this.state.auteurSaisi}
                    onChange = {(event) => this.setState({auteurSaisi:event.target.value})}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="nbpage" className="form-label">Nombre de page</label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="nbpage" 
                    value = {this.state.nbPageSaisi}
                    onChange = {(event) => this.setState({nbPageSaisi:event.target.value})}
                />
            </div>           
            <Bouton typeBtn= 'btn-primary' click= {this.handleValidationForm}>Valider</Bouton>
            </form>            
            </>
        )
    }
}


