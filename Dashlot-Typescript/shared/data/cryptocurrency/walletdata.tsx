
interface wallet {

  crypname: string
  crypicon: string
  placeholder: string
  exchange: string
  Ramount: string
  sent: string
  total: string
  qrclass: string
  src: any
}

export const Walletdata: wallet[] = [
  {
    crypname: "Bitcoin Wallet",
    crypicon: "cc BTC-alt",
    placeholder: "ac34290d04cc54f02d22",
    exchange: "1 BTC = 9,526.37 USD",
    Ramount: "+ 1,50,500",
    sent: "- 25,500",
    total: "$ 1,00,500",
    qrclass: "qr-code",
    src: "../../../assets/images/png/06.png"
  },
  {
    crypname: "Ethereum Wallet",
    crypicon: "cc ETH-alt",
    placeholder: "1N4LsCG8ko4aia4vJYR",
    exchange: "1 ETH = 169.75 USD",
    Ramount: "+ 1,25,500",
    sent: "- 59000",
    total: "$ 66500",
    qrclass: "qr-code",
    src: "../../../assets/images/png/06.png"
  },
  {
    crypname: "Ripple Wallet",
    crypicon: "cc XRP-alt",
    placeholder: "1LgejHMvhRoWxRqNM",
    exchange: "1 XRP = 0.257134 USD",
    Ramount: "+ 3,25,765",
    sent: "- 1,12,490",
    total: "- 1,12,490",
    qrclass: "qr-code",
    src: "../../../assets/images/png/06.png"
  },
  {
    crypname: "Litecoin Wallet",
    crypicon: "cc LTC-alt",
    placeholder: "1EeWrxcDDjyhWwcKu",
    exchange: "1 LTC = 64.04 USD",
    Ramount: "+ 2,32,598",
    sent: "- 1,34,568",
    total: "$ 98030",
    qrclass: "qr-code",
    src: "../../../assets/images/png/06.png"
  }
];
