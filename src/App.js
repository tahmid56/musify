
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Musify</h1>
        <form action="http://127.0.0.1:3000/create" method="post" enctype="multipart/form-data">
                        <div style={{width: "center"}} className="form-group">
                            <input type="text" name="Username" placeholder="Username"/>
                        </div>
                        <br/>
                        <div style={{width: 'center'}} className="form-group">
                            <input type="text" name="Song" placeholder="Song Name"/>
                        </div>
                        <br/>
                        <div style={{width: 'center'}} className="song">
                            <input type="file" accept="audio/*"/>
                        </div>
                        <div style={{width: 'center'}}>
                            <button type="submit">Create</button>
                        </div> 
                    </form>
      </div>
    </div>
  );
}

export default App;
