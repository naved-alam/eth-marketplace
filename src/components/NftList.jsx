import { useEffect, useState } from "react";
import { createClient } from "urql";

const APIURL = "https://api.thegraph.com/subgraphs/name/anubhavitis/easygames";

const transfersQuery = `
  query {
    newNfts(first: 20) {
      id
      name
      from
      to
    }
    transferNfts(first: 20) {
      id
      from
      to
      tokenId
      name
    }
  }
`;

const client = createClient({
  url: APIURL,
});
export default function NftList() {
  const [nftList, setNftList] = useState([]);
  const fetchNftList = async () => {
    const data = await client.query(transfersQuery).toPromise();
    const newNfts = data.data.newNfts;
    console.log(newNfts);
    setNftList([...newNfts]);
  };

  useEffect(() => {
    fetchNftList();
  }, []);

  return (
    <ul>
      {nftList.map((nft) => { return (
        <div key={nft.id} className="list">
        <li>from: {nft.from}</li>
        <li>name: {nft.name}</li>
        <li>to: {nft.to}</li>
        </div>
      )})}
    </ul>
  );
}
