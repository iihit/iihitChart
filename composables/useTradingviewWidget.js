import { createChart } from 'lightweight-charts';

export default () => {
  const chartContainer = ref(null)
  let chart = null


  onMounted(() => {
    // Create the Lightweight Charts Instance using the container ref.
    chart = createChart(chartContainer.value, {
      width: 600,
      height: 300
    })
  })

  onUnmounted(() => {
      if (chart) {
          chart.remove()
          chart = null
      }
  });

  return {
    chart,
    chartContainer
  }
}
