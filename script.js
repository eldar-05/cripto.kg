document.addEventListener('DOMContentLoaded', () => {
    const cryptoTableBody = document.getElementById('crypto-table-body');

    const cryptocurrencies = [
        { rank: 1, name: 'Bitcoin', symbol: 'BTC', price: 103600.00, change24hr: -1.50, marketCap: 2060000000000 },
        { rank: 2, name: 'Ethereum', symbol: 'ETH', price: 2470.00, change24hr: -4.50, marketCap: 298000000000 },
        { rank: 3, name: 'Tether USDt', symbol: 'USDT', price: 1.00, change24hr: 0.01, marketCap: 153910000000 },
        { rank: 4, name: 'BNB', symbol: 'BNB', price: 645.00, change24hr: -3.00, marketCap: 90500000000 },
        { rank: 5, name: 'Solana', symbol: 'SOL', price: 148.00, change24hr: -2.00, marketCap: 77500000000 },
        { rank: 6, name: 'XRP', symbol: 'XRP', price: 0.52, change24hr: -1.15, marketCap: 28000000000 },
        { rank: 7, name: 'USD Coin', symbol: 'USDC', price: 1.00, change24hr: 0.00, marketCap: 32000000000 },
        { rank: 8, name: 'Dogecoin', symbol: 'DOGE', price: 0.16, change24hr: 4.50, marketCap: 23500000000 },
        { rank: 9, name: 'Cardano', symbol: 'ADA', price: 0.48, change24hr: -0.70, marketCap: 17000000000 },
        { rank: 10, name: 'Shiba Inu', symbol: 'SHIB', price: 0.000025, change24hr: 2.80, marketCap: 14800000000 },
        { rank: 11, name: 'Avalanche', symbol: 'AVAX', price: 37.50, change24hr: 1.90, marketCap: 14000000000 },
        { rank: 12, name: 'TRON', symbol: 'TRX', price: 0.12, change24hr: 0.55, marketCap: 10500000000 },
        { rank: 13, name: 'Chainlink', symbol: 'LINK', price: 17.80, change24hr: -0.90, marketCap: 10300000000 },
        { rank: 14, name: 'Polkadot', symbol: 'DOT', price: 7.20, change24hr: 1.20, marketCap: 9800000000 },
        { rank: 15, name: 'Wrapped Bitcoin', symbol: 'WBTC', price: 68450.00, change24hr: 1.80, marketCap: 9500000000 },
        { rank: 16, name: 'Litecoin', symbol: 'LTC', price: 82.00, change24hr: 0.65, marketCap: 6000000000 },
        { rank: 17, name: 'Bitcoin Cash', symbol: 'BCH', price: 470.00, change24hr: 3.50, marketCap: 9200000000 },
        { rank: 18, name: 'Toncoin', symbol: 'TON', price: 7.50, change24hr: -2.30, marketCap: 25000000000 }, // Higher market cap example
        { rank: 19, name: 'Internet Computer', symbol: 'ICP', price: 14.10, change24hr: 0.30, marketCap: 6500000000 },
        { rank: 20, name: 'Uniswap', symbol: 'UNI', price: 11.80, change24hr: 1.10, marketCap: 7000000000 }
    ];

    function formatCurrency(amount, currency = 'USD') {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: (amount < 1 && amount > 0) ? 8 : 2 
        });
    }

    function formatMarketCap(marketCap) {
        if (marketCap >= 1_000_000_000_000) {
            return `$${(marketCap / 1_000_000_000_000).toFixed(2)}T`;
        } else if (marketCap >= 1_000_000_000) {
            return `$${(marketCap / 1_000_000_000).toFixed(2)}B`;
        } else if (marketCap >= 1_000_000) {
            return `$${(marketCap / 1_000_000).toFixed(2)}M`;
        }
        return formatCurrency(marketCap);
    }
    function renderCryptoTable() {
        cryptoTableBody.innerHTML = '';

        cryptocurrencies.forEach(crypto => {
            const changeClass = crypto.change24hr > 0 ? 'text-green-400' : (crypto.change24hr < 0 ? 'text-red-400' : 'text-gray-400');
            const changeSign = crypto.change24hr > 0 ? '+' : '';

            const rowHtml = `
                <tr class="hover:bg-gray-700 transition duration-150 ease-in-out">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">${crypto.rank}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-semibold text-white">
                        ${crypto.name} <span class="text-gray-400 font-normal">${crypto.symbol}</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-white">${formatCurrency(crypto.price)}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm ${changeClass}">${changeSign}${crypto.change24hr.toFixed(2)}%</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${formatMarketCap(crypto.marketCap)}</td>
                </tr>
            `;
            cryptoTableBody.innerHTML += rowHtml;
        });
    }
    renderCryptoTable();
});
