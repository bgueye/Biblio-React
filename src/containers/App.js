import React, {Component} from 'react';
import Titreh1 from "../components/titres/titreh1";
import Bouton from '../components/boutons/bouton';
import Livres from './Livres';

class App extends Component {
 state = {
   ajoutLivre: false
 }
 
 handleClicAjout = ()=>{
    //this.setState({ajoutLivre: !this.state.ajoutLivre});
    this.setState((oldState, props) =>{
      return {ajoutLivre: !oldState.ajoutLivre}
    })
 }

  render() {
    return (
      <div className="container">
          <Titreh1>Page listant les livres</Titreh1>
          <Livres afficheForm = {this.state.ajoutLivre} fermerFormAjout ={()=> this.setState({ajoutLivre:false})}/>
          <Bouton 
            typeBtn= 'btn-success w-100' 
            click={this.handleClicAjout}>
            {!this.state.ajoutLivre ? 'Ajouter' : 'Fermer l\'ajout' }
          </Bouton>
      </div>
    );
  }
}

export default App;
