import React, {Component} from 'react';
import HeaderContainer from '../HeaderContainer';
import ChatContainer from '../ChatContainer';
import ProfileContainer  from '../ProfileContainer';

export class CurrentChatFields extends Component{
    render(){
        let pageToShow = '';
        if (this.props.location.pathname.includes('profile')){
            pageToShow = <ProfileContainer id={this.props.match.params.id} />;
        }else {
            pageToShow= <ChatContainer id={this.props.match.params.id}/>;
        }
        //return (<>{pageToShow}</>)
        return (<>
            <HeaderContainer id={this.props.match.params.id}/>
            {pageToShow}
        </>);
    }
}
