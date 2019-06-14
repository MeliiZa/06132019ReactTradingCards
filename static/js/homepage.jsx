class Homepage extends React.Component {
	render() {
		return ( 
            <div className="greeting">
                <p>Welcome to the homepage.</p> 
                <a href="/cards"> CARDS HERE </a>
                <img src="static/img/seedpy.jpg"/>
             </div>
        );
	}
}


ReactDOM.render(<Homepage />, document.getElementById('app'));