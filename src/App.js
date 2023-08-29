import './App.css';
import ErrorAsyncAwait from './components/ErrorAsyncAwait';
import ErrorThen from './components/ErrorThen';
import GetData from './components/GetData';
import ReadData from './components/ReadData';
import SearchUser from './components/SearchUser';
function App() {
  return (
    <div className="App">
      <h1>Fetching data using fetch API:</h1>
          <GetData/>
      <h1>  Fetching data based on some parameter:</h1>
      <ReadData/>
     <h1>Fetching data in React based on user input (onChange):</h1>
      <SearchUser/>
      <h1>Handling Error</h1>
      <ErrorThen/>
      <h1>Handling Error Async/await</h1>
      <ErrorAsyncAwait/>

    </div>
  );
}

export default App;
