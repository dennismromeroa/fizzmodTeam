import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Inicio from './Inicio';
import { fetchSessions } from "../../action/inicio";

const mapStateToProps = (state, ownProps) => {
console.log("ESTADO: ", state)
  return {
    //sessionId: state.loginReducer,  //VERIFICAR NOMBRE DEL ESTADO
    session: state.inicioReducer.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
 	return {
 		getSessions: () => dispatch(fetchSessions()),
 	}
};

const InicioContainer = ({sessionId, session, getSessions}) => {

	 useEffect(()=>{
	 	getSessions()
	},[])

	return (
		<Inicio session={session}></Inicio>
		)
};


export default connect(mapStateToProps, mapDispatchToProps)(InicioContainer);

