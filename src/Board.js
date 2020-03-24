import React, {Component} from 'react';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: null
        };
        this.canvas = React.createRef();
    }

    componentDidMount() {
        this.fetchAndSaveImage();
        this.drawBackgroundImage();
    }

    componentDidUpdate() {
        this.drawBackgroundImage();
    }

    fetchAndSaveImage() {

    }

    drawBackgroundImage() {

    }

    render() {
        return (
            <p> board </p>
        )
    }
}

export default Map;