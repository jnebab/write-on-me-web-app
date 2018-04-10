import React, { Component } from 'react';
import Therapist from './Therapist';
import Footer from './Footer';

export default class TherapyList extends Component {
    render() {
        return (
            <div className="container therapy-container">
                <Therapist />
                <Footer />
            </div>
        )
    }
}