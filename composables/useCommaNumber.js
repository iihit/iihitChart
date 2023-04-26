export default () => {
  const setComma = (number) => {
    if (typeof number !== 'number' && typeof number !== 'string') {
      return ''
    }
    number = number.toString()
    const regx = new RegExp(/(-?\d+)(\d{3})/)
    let bExists = number.indexOf('.')
    let strArr = [number]
    if (bExists > -1) {
      strArr = number.split('.')
    }
    if (strArr[0].length > 3) {
      while (regx.test(strArr[0])) {
        strArr[0] = strArr[0].replace(regx, "$1,$2")
      }
    }
    if (bExists > -1) {
      return strArr.join('.')
    }
    return strArr[0]
  }

  // const setComma = (number) => {
  //   if (typeof number === 'number') {
  //     number = number.toString()
  //   }
  //   let regx = new RegExp(/(-?\d+)(\d{3})/)
  //   let bExists = null
  //   let strArr = null
  //   if (typeof number !== 'undefined' && number.indexOf('.', 0) !== -1) {
  //     // number가 정의되어 있고 '.'이 존재하는 경우
  //     bExists = number.indexOf('.', 0) // 0번째부터 .을 찾는다.
  //     strArr = number.split('.')
  //   }
  //   if (strArr && strArr.length > 0) {
  //     while (regx.test(strArr[0])) { // 문자열에 정규식 특수문자가 포함되어 있는지 체크
  //         //정수 부분에만 콤마 달기
  //         strArr[0] = strArr[0].replace(regx, "$1,$2") // 콤마추가하기
  //     }
  //   }
  //   if (bExists > -1) { // 소수점 문자열이 발견되지 않을 경우 -1 반환
  //     number = strArr[0] + "." + strArr[1]
  //   } else { // 정수만 있을경우 소수점 문자열 존재하면 양수 반환
  //     number = strArr[0]
  //   }
  //   return number // 문자열 반환
  // }

  const setUnComma = (str) => {
    if (!str) return 0 // undefined나 빈 문자열인 경우 0 반환
    str = '' + str.replace(/,/gi, '') // 콤마 제거
    str = str.trim() // 문자열 양 끝의 공백 제거
    return str ? Number(str) : 0 // 문자열을 숫자로 변환하여 반환
  }

  return {
    setComma,
    setUnComma
  }
}
