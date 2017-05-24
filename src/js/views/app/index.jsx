import React, {Component} from "react";
import PropTypes from "prop-types";
//import '../../../styles/css/custom.css';

export default class App extends Component {
    static propTypes = {
        children: PropTypes.object,
    };


    render() {
        const {children} = this.props;

        return (
            <div>
                { children }
            </div>
        );
    }
}
