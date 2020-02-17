import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import './AddChat.css';

export const AddChat =({chatKeys, addNewChat}) => {
    const [name, setName] = useState('');
    const [userExists, setUserExists] = useState('');
    const userAvatar='/src/components/ChatList/img/chatList_icon.png';
    const robotClass = 'robot';
    const AddNewChatItem=(e)=>{
        e.preventDefault();
        if(name ===""){
            setUserExists('Вы не задали имя нового пользователя');
        } else if(chatKeys.indexOf(name, 0)<0){
            setUserExists('');
            addNewChat({name, messages:[{msgClass: robotClass, name:'Робот', message:`Привет, ${name}! Как дела?`}], userAvatar});
        }
        else{
            setUserExists('Пользователь с таким именем уже существует');
        }
    };
    return (
        <div className="AddChat">
            <h3>{name}</h3>
            <Avatar alt={name} src={userAvatar} className="Header__avatar"/>
            <form onSubmit={AddNewChatItem}>
                <label>
                    Имя:
                    <input type="text" className="AddChat_nameInput" value={name} onChange={({currentTarget: {value}})=>setName(value)} />
                </label>
                <p>{userExists}</p>
                <input type="submit" className="AddChat__btn" value="Добавить" />
            </form>
        </div> );
};