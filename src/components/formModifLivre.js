import React, { Component } from 'react';
import Bouton from './boutons/bouton';

export default class FormModifLivre extends Component {

    state  = {
        titreSaisi:this.props.livre.titre,
        auteurSaisi:this.props.livre.auteur,
        nbPageSaisi:this.props.livre.nbpage
    }

    handleValidation=()=>{
        this.props.handleUpdate(this.props.livre.id,this.state.titreSaisi,this.state.auteurSaisi,this.state.nbPageSaisi);
    }

    render() {
        return (
            <>
                <td><input type="text" className="form-control" value={this.state.titreSaisi} onChange={(event)=>this.setState({titreSaisi:event.target.value})}/></td>
                <td><input type="text" className="form-control" value={this.state.auteurSaisi} onChange={(event)=>this.setState({auteurSaisi:event.target.value})}/></td>
                <td><input type="text" className="form-control" value={this.state.nbPageSaisi} onChange={(event)=>this.setState({nbPageSaisi:event.target.value})}/></td>
                <td colSpan="2" className="text-start"><Bouton typeBtn = 'btn-primary ms-2' click = {this.handleValidation}>Valider </Bouton></td>
            </>
        )
    }
}
