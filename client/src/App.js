import TextEditor from './components/TextEditor';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import Buttons from './components/Buttons';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path='/documents/:id'>
					<Buttons />
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
