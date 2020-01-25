import React, {Component} from "react";
import PropTypes from 'prop-types';
import { render } from "react-dom";

export class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], name: 'я', text: '',
      answer = {name:'Robot', text: "Привет! Я - Робот, я передам Ваше сообшение людям!" },      
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].name === 'я') {
      setTimeout(() =>
              this.setState({
                  messages: [ ...this.state.messages, {text: this.state.answer.text, name: this.state.answer.sender} ] }),
          1000);
    }
  }
  render() {
    return (
      <div>
        <h3>чат</h3>
        <TodoList items={this.state.items} />
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

class TodoList extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.items.map(item => (
          <p key={item.id}>я: {item.text}</p>
        ))}
      </React.Fragment>

    );
  }
}
