import React from 'react' ;
export default class TitleBar extends React.Component {
    renderSubTitle() {
        if(this.props.subtitle) {
            return  <h2 className="title-bar__sub">{this.props.subtitle}</h2>;
        } //else automatically returns undefined
    }

    render() {
        return (
            <div className="title-bar">
                <div className="wrapper">
                  <h1>{this.props.title}</h1>
                  {this.renderSubTitle()}
                </div>
            </div>
        );
    }
}

TitleBar.propTypes = {
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string
};
