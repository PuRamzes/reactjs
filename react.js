var Hello = React.createClass({
    render: function() {
        return <div>Привет, {this.props.name}!</div>;
    }
});
 
React.render(<Hello name="Мир" />, document.getElementById('container'));