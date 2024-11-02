import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { useStateContext } from "../Context/index";
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
  const {
    withdrawToken,
    transferToken,
    buyToken,
    CREATE_ICOSALE,
    GET_ALL_USER_ICOSALE_TOKEN,
    GET_ALL_ICOSALE_TOKEN,
    createERC20,
    connectWallet,
    PINATA_API_KEY,
    PINATA_AIP_KEY,
    PINATA_SECRECT_KEY,
    ICO_MARKETPLACE_ADDRESS,
    openBuyToken,
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
    shortenAddress,
  } = useStateContext();

  const notifySuccess = (msg) => toast.success(msg, { duration: 200 });

  const notifyError = (msg) => toast.error(msg, { duration: 200 });

  const [allICOs, setAllICOs] = useState();
  const [allUserIcos, setAllUserIcos] = useState();

  // COMPONENT OPEN
  const [openAllICO, setOpenAllICO] = useState(false);
  const [openTokenHistory, setOpenTokenHistory] = useState(false);
  const [openICOMarketplace, setOpenICOMarketplace] = useState(false);

  //BUY ICO TOKEN
  const [buyIco, setBuyIco] = useState();

  const copyAddress = () => {
    navigator.clipboard.writeText(ICO_MARKETPLACE_ADDRESS);
    notifySuccess("Copied successfully");
  };

  return (
    <div>
      <Header
        accountBalance={accountBalance}
        setAddress={setAddress}
        address={address}
        connectWallet={connectWallet}
        ICO_MARKETPLACE_ADDRESS={ICO_MARKETPLACE_ADDRESS}
        shortenAddress={shortenAddress}
        setOpenAllICO={setOpenAllICO}
        openAllICO={openAllICO}
        setOpenTokenCreator={setOpenTokenCreator}
        openTokenCreator={openTokenCreator}
        setOpenTokenHistory={setOpenTokenHistory}
        openTokenHistory={openTokenHistory}
        setOpenICOMarketplace={setOpenICOMarketplace}
        openICOMarketplace={openICOMarketplace}
      />
      {openAllICO && <ICOMarket />}
      {openTokenCreator && <TokenCreator createERC20={createERC20} shortenAddress={ shortenAddress} 
      setOpenTokenCreator={setOpenTokenCreator}
      setLoader={setLoader}
      address={address}
      connectWallet={connectWallet}
      PINATA_AIP_KEY={PINATA_AIP_KEY}

      PINATA_SECRECT_KEY={PINATA_SECRECT_KEY}
      />}
      {openTokenHistory && <TokenHistory />}
      {openCreateICO && <CreateICO />}
      {openICOMarketplace && <ICOMarket />}
      {openBuyToken && <BuyToken />}
      {openTransferToken && <TokenTransfer />}
      {openWidthdrawToken && <WidthdrawToken />}

      <Footer />
      {loader && <Loader/> }
    </div>
  );
};

export default index;
