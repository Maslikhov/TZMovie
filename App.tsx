import RootContainer from './src/Navigation';
import {Auth0Provider} from 'react-native-auth0';
import {DOMAIN_URL, CLIENT_ID} from './src/Auth0/config';
import {Provider} from 'react-redux';
import {store} from './src/Components/Redux/store';

function App() {
  return (
    <Provider store={store}>
      <Auth0Provider domain={DOMAIN_URL} clientId={CLIENT_ID}>
        <RootContainer />
      </Auth0Provider>
    </Provider>
  );
}
export default App;
