import { useSelector } from 'react-redux';
import GameMain from './pages/GameMain';
import Introduction from './pages/Introduction';

function App() {

  const {user} = useSelector((state: any) => state.user)

  return <>{user ? <GameMain />: <Introduction />}</>
}

export default App;
