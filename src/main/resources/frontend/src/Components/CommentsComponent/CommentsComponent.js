import React from  'react';
import './comments.css';
import $ from 'jquery';
import CommentComponent from "./CommentComponent";

export default class CommentsComponent extends React.Component {
    constructor() {
        super();
        this.state = {comments: []};
        //this.componentDidMount = this.componentDidMount.bind(this);

        this.ws = new WebSocket(`ws://${window.location.host}/comments`);
        this.ws.onopen = ev => {this.ws.send(this.props.title)};
        const onMes = mes => {
            console.log(mes.data);
            this.setState({comments: JSON.parse(mes.data)});
        };
        this.ws.onmessage = onMes.bind(this);
        this.sendData = this.sendData.bind(this);
    }
    /*
    componentDidMount() {
        console.log(this.props.title);
        this.ws = new WebSocket(`ws://${window.location.host}/comments`);
        this.ws.onopen = ev => {this.ws.send(this.props.title)};
        const onMes = mes => {
            console.log(mes.data);
            this.setState({comments: JSON.parse(mes.data)});
        };
        this.ws.onmessage = onMes.bind(this);
    }
*/
    sendData() {
        $.post('/api/add_comment', {comment: $("#comment").val(), origin: this.props.title});
    }

    render() {
        //console.log(this.props.title);
        return (
        <div id='commentSection' className='content'>
            <p align='center'><b>Comments</b></p>
            {this.state.comments.map(c => <CommentComponent comment={c.comment} date={c.date} nick={c.author.nickname} activity={c.author.activity}/>)}
            <textarea readOnly={!this.props.isLogged} id='comment' className='inputRow'></textarea>
            <br/>
            {/*<input type='hidden' name='origin' value={this.props.title}/>*/}
            <button disabled={!this.props.isLogged} onClick={this.sendData}>Add</button>
        </div>);
    }
}