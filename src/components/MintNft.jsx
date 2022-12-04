import { useEffect, useState } from "react";
import axios from "axios";

export default function MintNft() {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Component mounted");
  }, []);
  const onClick = async () => {
    try {
        const result = await axios.get(`http://localhost:3030/mint-tokens?receiver=${receiverAddress}&name=${name}`);
        console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter receiver address"
        id="fname"
        onChange={(e) => setReceiverAddress(e.target.value)}
        name="fname"
      ></input>
      <input
        type="text"
        placeholder="Enter NFT Name"
        id="fname"
        onChange={(e) => setName(e.target.value)}
        name="fname"
      ></input>
      <button onClick={onClick}>
        Mint <span className="arrow"></span>
      </button>
    </div>
  );
}
