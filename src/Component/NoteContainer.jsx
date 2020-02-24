import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Container from '@material-ui/core/Container';
import TakeANote from '../Component/TakeANote';
import TakeAFullNote from '../Component/TakeAFullNote';


class NoteContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            clickAway:false,
        }
    };

    handleClickOn =() => {
        this.setState({
            clickAway:true
        })
    }

    handleClickOff= () => {
        this.setState({
            clickAway:false
        })

    }

    handleChangeText =(event) => {
        this.setState({
           [event.target.name] : event.target.value

        })
    }



    render() {


        return (
            <Container style ={{ marginTop:'2em'}}>
                <ClickAwayListener onClickAway ={this.handleClickOff}>

                    <div style={{display: 'flex',justifyContent: 'center'}}>
                        {
                                //ternary operator used
                            !this.state.clickAway?
                            <TakeANote
                            handleClick = {this.handleClickOn}
                            style={{marginTop: '2%'}}
                            />:
                            <TakeAFullNote
                            handleChangeText = {this.handleChangeText}
                            onHandleClickAway = {this.handleClickOff}
                            style={{marginTop: '2%'}}
                            /> 
                       
                        }

                    </div>


                </ClickAwayListener>
                
            </Container>
        );
    }
}

export default NoteContainer;
