import React, { Component } from 'react';
import Bouton from './boutons/bouton';
import {withFormik} from 'formik';
import * as Yup from 'yup';

class FormAjoutLivre extends Component {
    // state  = {
    //     titreSaisi:"",
    //     auteurSaisi:"",
    //     nbPageSaisi:""
    // }

    // handleValidationForm = (event) => {
    //     event.preventDefault();
    //     this.props.validation(this.state.titreSaisi,this.state.auteurSaisi,this.state.nbPageSaisi);
    //     this.setState({
    //         titreSaisi:"",
    //         auteurSaisi:"",
    //         nbPageSaisi:""
    //     });

    // }
    
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
                    name = "titre"
                    value = {this.props.values.titre}
                    onChange = {this.props.handleChange}
                    onBlur = {this.props.handleBlur}
                    // value = {this.state.titreSaisi}
                    // onChange = {(event) => this.setState({titreSaisi:event.target.value})}
                />
                {
                    this.props.touched.titre && this.props.errors.titre 
                    && <span style = {{color:"red"}}>{this.props.errors.titre}</span>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="auteur" className="form-label">Auteur du livre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="auteur"
                    name = "auteur"
                    value = {this.props.values.auteur}
                    onChange = {this.props.handleChange}  
                    onBlur = {this.props.handleBlur}                   
                    // value = {this.state.auteurSaisi}
                    // onChange = {(event) => this.setState({auteurSaisi:event.target.value})}
                />
                 {
                    this.props.touched.auteur && this.props.errors.auteur 
                    && <span style = {{color:"red"}}>{this.props.errors.auteur}</span>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="nbpage" className="form-label">Nombre de page</label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="nbpage" 
                    name = "nbPage"
                    value = {this.props.values.nbPage}
                    onChange = {(event)=>this.props.setFieldValue('nbPage',parseInt(event.target.value))}
                    onBlur = {this.props.handleBlur}                   
                    // value = {this.state.nbPageSaisi}
                    // onChange = {(event) => this.setState({nbPageSaisi:event.target.value})}
                />
                 {
                    this.props.touched.nbPage && this.props.errors.nbPage 
                    && <span style = {{color:"red"}}>{this.props.errors.nbPage}</span>
                }
            </div>           
            <Bouton typeBtn= 'btn-primary' click= {this.props.handleSubmit}>Valider</Bouton>
            </form>            
            </>
        )
    }
}


export default withFormik({
      mapPropsToValues: () => ({
        titre:"",
        auteur:"",
        nbPage:""
      }),
      validationSchema : Yup.object().shape({
        titre: Yup.string()
                    .min(3,"Le titre doit avoir plus de trois caractères")
                    .max(15,"Le titre doit avoir moins de 15 caractères")
                    .required("Le titre est obligatoire"),
        auteur: Yup.string()
                    .min(3,"L'auteur doit avoir plus de trois caractères")
                    .required("L'auteur est obligatoire"),
        nbPage: Yup.number()
                    .lessThan(1000,'Le nombre de pages doit être inférieur à 1000')
                    .moreThan(50,'Lnombre de pages doit être supérieur 50')
      }), 
    //   validate: values => {
    //       const errors = {};
    //       if (values.titre.length < 3){
    //           errors.titre = "Le titre doit contenir au moins 3 caractères";
    //       }
    //       if (values.titre.length > 15){
    //           errors.titre = "Le titre doit contenir moins de 15 caractères";
    //       }
    //       if (!values.auteur){
    //           errors.auteur = "Le champs auteur est obligatoire";
    //       }                   
    //       return errors;
        
    //   },
      handleSubmit: (values,{props}) => {
        props.validation(values.titre,values.auteur,values.nbPage);
      }
})(FormAjoutLivre);