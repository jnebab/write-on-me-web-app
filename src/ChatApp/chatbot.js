import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import '../css/main.css';

class Review extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: '',
        gender: '',
        age: '',
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { name, gender, age } = steps;
  
      this.setState({ name, gender, age });
    }
  
    render() {
      const { name, gender, age } = this.state;
      return (
        <div style={{ width: '100%' }}>
          <h3>Summary</h3>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{name.value}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{gender.value}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{age.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  Review.propTypes = {
    steps: PropTypes.object,
    floating: PropTypes.bool
  };
  
  Review.defaultProps = {
    steps: undefined,
    floating: false
  };

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };


  const steps = [
      {
        id: '1',
        message: 'Hello! Good day! What is your name?',
        trigger: 'name',
      },
      {
        id: 'name',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}! What is your gender?',
        trigger: 'gender',
      },
      {
        id: 'gender',
        options: [
          { value: 'male', label: 'Male', trigger: '5' },
          { value: 'female', label: 'Female', trigger: '5' },
        ],
      },
      {
        id: '5',
        message: 'How old are you?',
        trigger: 'age',
      },
      {
        id: 'age',
        user: true,
        trigger: '7',
        validator: (value) => {
          if (isNaN(value)) {
            return 'value must be a number';
          } else if (value < 0) {
            return 'value must be positive';
          } else if (value > 120) {
            return `${value}? Come on!`;
          }

          return true;
        },
      },
      {
          id: '7',
          message: 'How are you feeling right now?',
          trigger: 'feeling'
      },
      {
          id: 'feeling',
          options: [
              {value:'down', label: 'down', trigger: '8'},
              {value:'sad', label:'sad', trigger:'8'},
              {value: 'depressed', label:'depressed', trigger: '8'}
          ]
      },
      {
          id:'8',
          message: 'I see you are {previousValue}? Do you want to talk to one of our therapists right now?',
          trigger: 'talk'
      },
      {
          id:'talk',
          options: [
              { value: 'yes', label: 'Yes', trigger: '9' },
              { value: 'no', label: 'No', trigger: 'end-message' },
            ],
      },
      {
        id: '9',
        message: 'Great! We can help you with that! Please minimize this chatbox and click the Sign Up button in the left! In the meantime, this is your summary',
        trigger: 'review',
      },
      {
        id: 'review',
        component: <Review />,
        asMessage: true,
        trigger: 'end-message',
      },
      {
        id: 'update',
        message: 'Would you like to update some field?',
        trigger: 'update-question',
      },
      {
        id: 'update-question',
        options: [
          { value: 'yes', label: 'Yes', trigger: 'update-yes' },
          { value: 'no', label: 'No', trigger: 'end-message' },
        ],
      },
      {
        id: 'update-yes',
        message: 'What field would you like to update?',
        trigger: 'update-fields',
      },
      {
        id: 'update-fields',
        options: [
          { value: 'name', label: 'Name', trigger: 'update-name' },
          { value: 'gender', label: 'Gender', trigger: 'update-gender' },
          { value: 'age', label: 'Age', trigger: 'update-age' },
        ],
      },
      {
        id: 'update-name',
        update: 'name',
        trigger: '7',
      },
      {
        id: 'update-gender',
        update: 'gender',
        trigger: '7',
      },
      {
        id: 'update-age',
        update: 'age',
        trigger: '7',
      },
      {
        id: 'end-message',
        message: 'Enjoy your time with us!',
        end: true,
      },
    ]

  class SimpleForm extends Component {
    render() {
      return (
        // <ThemeProvider theme={theme}>
          <ChatBot steps={steps} floating={true} headerTitle="Write On Me" />
        // </ThemeProvider>
      );
    }
  }
  
  export default SimpleForm;
  