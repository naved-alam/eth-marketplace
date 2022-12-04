import logo from './logo.svg';
import NftList from './components/NftList';
import MintNft from './components/MintNft';
import './App.css';

function App() {
  return (
    <div className="App">

      <h1>Mint Nft</h1>
      <MintNft/>
      <hr />
      <h1>Nft List</h1>
      <NftList/>
    </div>
  );
}

export default App;
