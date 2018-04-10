import React, { Component } from 'react';
import Therapist from './Therapist';
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';
import therapist from '../images/therapist.jpg';
import '../css/main.css';

export default class TherapyList extends Component {
    render() {
        return (
            <div className="container">
                <div className="therapist">
                    <img src={therapist} alt="Therapist1"/>
                    <div className="info">
                        <li>Username:thera.jessica</li>
                        <li>Occupation: Psychologist</li>
                        <li>Email: thera.jessica@gmail.com</li>
                        <br/>
                     
                        <li><Link to={routes.CHAT_APP} className="msg-therapist">Message Therapist</Link></li>
                    </div>
                </div>

            </div>
        )
    }
}