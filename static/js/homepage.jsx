class Homepage extends React.Component {
	render(){
		return 
        <div>
            <p>"Welcome to the homepage."</p> 
            <a href="/cards"> CARDS HERE </a>
            <img src= "/static/img/ballonicorn.jpg"> ;
         </div>
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));