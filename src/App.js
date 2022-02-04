import './App.css';
import WithoutRQ from '../src/Component/WithoutRQ'
import WithRQ from '../src/Component/WithRQ'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Nav from '../src/Component/Nav';
import Home from '../src/Component/Home';
import RQUser from './Component/RQUser';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/WithoutRQ" component={WithoutRQ} />
            <Route exact path="/WithRQ" component={WithRQ} />
            <Route exact path="/RQUser/:id" component={RQUser} />
          </Switch>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </>
  );
}

export default App;
