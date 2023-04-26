export default () => {
  const standardtimeTohhmm = (dateStr) => {
    const date = new Date(dateStr);
    const options = { hour12: false, hour: '2-digit', minute: '2-digit' };
    const timeStr = date.toLocaleTimeString('ko-KR', options);

    return timeStr
  }

  const unixtimeToYYYYMMDDHHmmss = (unix) => {
    const date = new Date(unix * 1000);
    const formattedDate = date.toISOString().replace(/T/, ' ').replace(/\..+/, '');

    return formattedDate
  }

  return {
    standardtimeTohhmm,
    unixtimeToYYYYMMDDHHmmss
  }
}