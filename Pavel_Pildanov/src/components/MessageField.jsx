import React, { Component } from 'react';
import {Message} from './Message';

export class MessageField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        name: 'я',
        text: '',
        answer: { name:'Robot', text: "Привет! Я - Робот, я передам Ваше сообшение людям!" },        
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidUpdate() {
      if (this.state.items.name === 'я') {
        setTimeout(() =>
                this.setState({
                    items: [ ...this.state, {text: this.state.answer.text, name: this.state.answer.name} ] }),
            1000);
      }
    }
    render() {
      return (
        <div>
          <h3>чат</h3>
          <Message items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              Написать
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.name, this.state.text}
            />
            <button>
              Отправить
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        name: this.state.name,
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        name:'Я:',
        text: ''
      }));
    }
  }
  
