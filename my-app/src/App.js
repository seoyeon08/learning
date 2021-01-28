import logo from './logo.svg';
import './App.css';
import Comment from './Comment';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: [
        {name: "SeoYeon Moon", content:'Hello World'},
        {name: "Luna", content: 'I want see Movie'},
        {name: "Diana", content: 'Today is Wed'},
      ],
    };
  }
  render() {
    const {comments} = this.state;
    return (
    <div className="App" style={{padding: 16, backgroundColor: '#282c34'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {comments.map((comment,index) => {
          return  (
            <Comment
              name={comment.name}
              content={comment.content}/>
          )
        })}
      </div>
    </div>
    );
  }
}

export default App;
