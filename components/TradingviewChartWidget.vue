<style lang="scss" scoped>
.tradingview-widget-container {
    width: 100%;
    height: 600px;
}

#tradingview_21a17 {
    height: 600px;
}
</style>

<template>
    <div class="tradingview-widget-container">
        <div id="tradingview_21a17"></div>
    </div>
</template>

<script setup>
onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
        const widget = new TradingView.widget({
            // "autosize": true,
            "width": 980,
            "height": 610,
            "symbol": "INDEX:BTCUSD",
            "interval": "240",
            "timezone": "Asia/Seoul",
            "theme": "light",
            "style": "1",
            "locale": "kr",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "hide_legend": true,
            "withdateranges": true,
            "hide_side_toolbar": false,
            "allow_symbol_change": true,
            "container_id": "tradingview_21a17"
        })
        console.log('widget:', widget)
        widget.onChartReady(() => {
            // 차트가 준비되면 실행되는 함수
            document.head.appendChild(script)
        })
        // new TradingView.widget({
        //     // "autosize": true,
        //     "width": 980,
        //     "height": 610,
        //     "symbol": "INDEX:BTCUSD",
        //     "interval": "240",
        //     "timezone": "Asia/Seoul",
        //     "theme": "light",
        //     "style": "1",
        //     "locale": "kr",
        //     "toolbar_bg": "#f1f3f6",
        //     "enable_publishing": false,
        //     "hide_legend": true,
        //     "withdateranges": true,
        //     "hide_side_toolbar": false,
        //     "allow_symbol_change": true,
        //     "container_id": "tradingview_21a17"
        // });
    }
})
</script>