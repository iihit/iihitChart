import crypto from 'crypto'

const apiKey = 'y_UrFk5dqlm7OAV-pPl_3979';
const apiSecret = 'jFx8FDou1rB-GdNDKFHAwM5fbfhexUdPq4QxlNCO8dAseKpR';

const kstTimezoneOffset = 9 * 60 * 60 * 1000; // 한국 표준시와 UTC의 차이 (밀리초 단위)
const expires = Math.round((new Date().getTime() + kstTimezoneOffset) / 1000) + 60;
const signature = crypto.createHmac('sha256', apiSecret).update(`GET/realtime${expires}`).digest('hex');

export default defineEventHandler(() => {
  return {
    apiKey,
    signature,
    expires
  }
})
