import React, { useState, useEffect} from "react";
import toast from "react-hot-toast";

//Internal Import
import { useStateContext} from '../Context/index';
import Header from "../Components/Header";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Table from "../Components/Table";
import PreSaleList from "../Components/PreSaleList";
import UploadLogo from "../Components/UploadLogo";
import Loader from "../Components/Loader";
import Footer from "../Components/Footer";
import ICOMarket from "../Components/ICOMarket";
import TokenCreator from "../Components/TokenCreator";
import TokenHistory from "../Components/TokenHistory";
import Marketplace from "../Components/Marketplace";
import CreateICO from "../Components/CreateICO";
import Card from "../Components/Card";
import BuyToken from "../Components/BuyToken";
import WidthdrawToken from "../Components/WidthdrawToken";
import TokenTransfer from "../Components/TokenTransfer";


const index = () => {
  const { withdrawToken,transferToken,buyToken,CREATE_ICOSALE,GET_ALL_USER_ICOSALE_TOKEN,GET_ALL_ICOSALE_TOKEN,createERC20,connectWallet,PINATA_API_KEY,PINATA_SECRECT_KEY,ICO_MARKETPLACE_ADDRESS,openBuyToken,
    setOpenBuyToken,
    openWidthdrawToken,
    setOpenWidthdrawToken,
    openTransferToken,
    setOpenTransferToken,
    openTokenCreator,
    setOpenTokenCreator,
    openCreateICO,
    setOpenCreateICO,
    address,
    setAddress,
    accountBalance,
    loader,
    setLoader,
    currency,
    shortenAddress} = useStateContext();

    const notifySuccess = (msg) => toast.success(msg, { duration: 200 });
    const notifyError = (msg) => toast.error(msg, { duration: 200 });

    const [allICOs, setAllICOs] = useState();
    const [allUserIcos, setAllUserIcos] = useState();

    //Component Open

    const [openAllICOs, setOpenAllICOs] = useState(false);
    const [openTokenHistory, setOpenTokenHistory] = useState(false);
    const [openICOMarketplace, setOpenICOMarketplace] = useState(false);
    

  return <div>index</div>;
};

export default index;
