interface ICoinResponse {
	success: boolean;
	message: string;
	data: Data;
}
interface Data {
	publicKey: string;
	signature: string;
	rates: Rates;
}
interface Rates {
	BTCNGN: IRatesOBJ;
	BTCBUSD: IRatesOBJ;
	DASHBUSD: IRatesOBJ;
	DASHNGN: IRatesOBJ;
	ETHNGN: IRatesOBJ;
	USDTNGN: IRatesOBJ;
	TRON_USDTNGN: IRatesOBJ;
	BUSDNGN: IRatesOBJ;
	BNBNGN: IRatesOBJ;
	CUSDNGN: IRatesOBJ;
	BTCBTC: IRatesOBJ;
	DASHDASH: IRatesOBJ;
	TRON_USDTTRON_USDT: IRatesOBJ;
	BUSDBUSD: IRatesOBJ;
	CUSDCUSD: IRatesOBJ;
	ETHETH: IRatesOBJ;
	BNBBNB: IRatesOBJ;
	USDTUSDT: IRatesOBJ;
	BTCNGN_: IRatesOBJ;
	BTCUSD: IRatesOBJ;
	ETHUSD: IRatesOBJ;
	BNBUSD: IRatesOBJ;
	USDTUSD: IRatesOBJ;
	CUSDUSD: IRatesOBJ;
	BUSDUSD: IRatesOBJ;
	ETHBUSD: IRatesOBJ;
	BNBBUSD: IRatesOBJ;
	USDTBUSD: IRatesOBJ;
	TRON_USDTBUSD: IRatesOBJ;
	CUSDBUSD: IRatesOBJ;
	BTCUSD_: IRatesOBJ;
	ETHUSD_: IRatesOBJ;
	BNBUSD_: IRatesOBJ;
	USDTUSD_: IRatesOBJ;
	CUSDUSD_: IRatesOBJ;
	BUSDUSD_: IRatesOBJ;
	TRON_USDTUSD: IRatesOBJ;
	USDNGN: IRatesOBJ;
	TRON_USDTUSD_: IRatesOBJ;
	BNBNGN_: IRatesOBJ;
	ETHNGN_: IRatesOBJ;
	USDTNGN_: IRatesOBJ;
	BUSDNGN_: IRatesOBJ;
	USDNGN_: IRatesOBJ;
	CUSDNGN_: IRatesOBJ;
	TRON_USDTNGN_: IRatesOBJ;
	USDCUSD: IRatesOBJ;
	USDCUSD_: IRatesOBJ;
	USDCNGN: IRatesOBJ;
	USDCNGN_: IRatesOBJ;
	MATICUSD: IRatesOBJ;
	MATICUSD_: IRatesOBJ;
	MATICNGN_: IRatesOBJ;
	MATICNGN: IRatesOBJ;
	CELOUSD: IRatesOBJ;
	CELOUSD_: IRatesOBJ;
	CELONGN_: IRatesOBJ;
	CELONGN: IRatesOBJ;
	ETHBTC: IRatesOBJ;
	ETHBTC_: IRatesOBJ;
	BNBBTC: IRatesOBJ;
	BNBBTC_: IRatesOBJ;
	BNBETH: IRatesOBJ;
	BNBETH_: IRatesOBJ;
}
interface IRatesOBJ {
	rate: number;
	key: string;
}

export type { ICoinResponse };
