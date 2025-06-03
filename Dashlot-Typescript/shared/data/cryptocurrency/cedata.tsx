export const Ceoptions = [
    { value: 'bitcoin', label: 'BTC' },
    { value: 'Ethereum', label: 'Ethereum' },
    { value: 'Ripple', label: 'Ripple' },
    { value: 'bitcoin Cash', label: 'bitcoin Cash' },
    { value: 'Cardano', label: 'Cardano' },
    { value: 'Litecoin', label: 'Litecoin' }
];

export const Ceoptions2 = [
    { value: 'USD', label: 'USD' },
    { value: 'EURO', label: 'EURO' },

];

//ce cards

interface card {
    id: number;
    src: any
    name: string
    stock: string
    sclr: string
    name2: string
    dollar: string
    dollar2: string
    vol: string
    percentage: string
    progress: number
    pcolor: string
}

export const Cedata: card[] = [
    {
        id: 1,
        src: "../../../assets/images/crypto-currencies/regular/Bitcoin.svg",
        name: "Bitcoin",
        name2: "BTC / USDT",
        stock: "+0.25%",
        sclr: "success",
        dollar: "$135",
        dollar2: "$0.04",
        vol: "(+2.33%)",
        percentage: "70%",
        progress: 70,
        pcolor: "primary"

    },
    {
        id: 2,
        src: "../../../assets/images/crypto-currencies/regular/NEM.svg",
        name: "Nem",
        name2: "NEM / USDT",
        stock: "-0.12%",
        sclr: "danger",
        dollar: "$966",
        dollar2: "$0.12",
        vol: "(-1.33%)",
        percentage: "40%",
        progress: 40,
        pcolor: "secondary"

    },
    {
        id: 3,
        src: "../../../assets/images/crypto-currencies/regular/Ripple.svg",
        name: "Nem",
        name2: "XEM / USDT",
        stock: "+0.34%",
        sclr: "success",
        dollar: "$7,349",
        dollar2: "$0.17",
        vol: "(+2.38%)",
        percentage: "50%",
        progress: 50,
        pcolor: "danger"

    },
    {
        id: 4,
        src: "../../../assets/images/crypto-currencies/regular/Neo.svg",
        name: "Neo",
        name2: "NEO / USDT",
        stock: "+0.34%",
        sclr: "danger",
        dollar: "$5,563",
        dollar2: "$0.17",
        vol: "(-1.25%)",
        percentage: "70%",
        progress: 70,
        pcolor: "info"

    },
    {
        id: 5,
        src: "../../../assets/images/crypto-currencies/regular/Ethereum.svg",
        name: "Ethereum",
        name2: " ETH / USDT",
        stock: "-0.86%",
        sclr: "danger",
        dollar: "$147",
        dollar2: "$0.12",
        vol: "(+1.33%)",
        percentage: "55%",
        progress: 55,
        pcolor: "success"

    },
    {
        id: 6,
        src: "../../../assets/images/crypto-currencies/regular/litecoin.svg",
        name: "Litecoin",
        name2: "LTC / USDT",
        stock: "+0.21%",
        sclr: "success",
        dollar: "$534",
        dollar2: "$0.32",
        vol: "(-1.45%)",
        percentage: "45%",
        progress: 45,
        pcolor: "danger"

    },
    {
        id: 7,
        src: "../../../assets/images/crypto-currencies/regular/Dash.svg",
        name: "Dash",
        name2: "DASH / USDT",
        stock: "-0.43%",
        sclr: "danger",
        dollar: "$3,165",
        dollar2: "$0.17",
        vol: "(+1.52%)",
        percentage: "30%",
        progress: 30,
        pcolor: "vilot"

    },
    {
        id: 8,
        src: "../../../assets/images/crypto-currencies/regular/monero.svg",
        name: "Monero",
        name2: "XRM / USDT",
        stock: "+0.45%",
        sclr: "success",
        dollar: "$1,356",
        dollar2: "$0.27",
        vol: "(-3.17%)",
        percentage: "40%",
        progress: 40,
        pcolor: "pink"

    },

];

