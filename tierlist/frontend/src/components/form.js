import { Construction } from '@mui/icons-material';
import React, {Component} from 'react';
import './form.css'
import SearchIcon from '@mui/icons-material/Search';
class NoteForm extends Component{
    constructor(){
        super();
        this.buscaCategoria = this.buscaCategoria.bind(this);
    }

    buscaCategoria(){
        this.props.buscarCategoria(this.titleInput.value);
        
        this.titleInput.value = '';
        this.titleInput.focus();
        
    }

    render(){
        return (
            <div className='Padre'>
            
            <div className='NoteFormInput'>
                <input 
                ref={input => {this.titleInput = input;}}
                placeholder='Añade el titulo de la nota'
                
                type='text'/>
            
                <button
                onClick={this.buscaCategoria}
                >
                    {<SearchIcon />}
                </button>
            </div>
            </div>
        );
    }
}

export default NoteForm;