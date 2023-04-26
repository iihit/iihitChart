import { defineNuxtPlugin } from '#app';

import * as LightWeightCharts from 'lightweight-charts';
export default defineNuxtPlugin (nuxtApp => {
  return {
    provide: {
      LightWeightCharts
    }
}
})
