import {Route, Link} from 'react-router-dom';
import Todos from './features/todos';
import Albums from './features/albums';
import {useEffect} from 'react';
import categoryAPI from './api/categoryAPI';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const params = {
        _limit: 2,
      };
      const categories = await categoryAPI.getAll(params);
      console.log(categories);
    };
    fetchData();
  }, []);

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
