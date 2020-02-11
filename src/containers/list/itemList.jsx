import React, {Component} from 'react';
import ToDoItem from '../../components/item/item';
import {NewToDoForm} from '../../components/form/form';
import styled from 'styled-components';
const Container = styled.div`
 background: #2b2e39;
 margin: 0 auto;
 width: 80%;
 max-width: 600px;
 padding: 14px;
 border-radius: 14px;
 margin-top: 14px;
`;
const Header = styled.h1`
 color: green;
`;

class ToDoList extends Component {
 static defaultProps = {
  tasks: [
   {done: true, text: 'aaaa'}, //
   {done: false, text: 'abbbb'},
  ],
 };
 state = {
  tasks: this.props.tasks,
  draft: '',
 };
 onHandleInput = e => {
  console.log(e.target.value);

  this.setState({draft: e.target.value});
 };
 onHandleSubmit = () => {
  const {tasks, draft} = this.state;
  const x = {done: false, text: draft};
  const list = [...tasks, x];
  console.log(list);
  this.setState({tasks: list, draft: ''});
 };
 render() {
  return (
   <Container>
    <Header>{this.props.title}</Header>
    {this.state.tasks.map(item => (
     <ToDoItem key={item.text} item={item} done={item.done} />
    ))}
    <NewToDoForm
     onHandleInput={this.onHandleInput}
     onHandleSubmit={this.onHandleSubmit}
     draft={this.state.draft}
    />
   </Container>
  );
 }
}
export default ToDoList;
