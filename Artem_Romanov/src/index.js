import React from "react";
import ReactDom from "react-dom";
import {
    script
} from './script';

script();
console.log('А это index.js');

function Link(props) {
    return React.createElement("a", {
        "href": "mail.ru"
    }, props.title);
}

ReactDom.render(React.createElement(Link, {
    title: "Это ссыль"
}), document.getElementById("root"));

