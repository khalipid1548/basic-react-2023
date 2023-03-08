import {Route, Link} from 'react-router-dom';
import Todos from './features/todos';
import Albums from './features/albums';

function App() {
  return (
    <div className="App">
      home page <br />
      <Link to="/todos">todos</Link> <br />
      <Link to="/albums">albums</Link>
      <Route path="/todos" component={Todos} />
      <Route path="/albums" component={Albums} />
    </div>
  );
}

export default App;
