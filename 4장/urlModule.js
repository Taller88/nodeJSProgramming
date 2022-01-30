var url = require('url');


/**
 * parse 
 * : URL 문자열을 URL 객체로 변환해 return
 */
var parsedObj = url.parse('https://www.naver.com');
console.log( parsedObj);

/**
 * Url {
      protocol: 'https:',
      slashes: true,
      auth: null,
      host: 'www.naver.com',
      port: null,
      hostname: 'www.naver.com',
      hash: null,
      search: null,
      query: null,
      pathname: '/',
      path: '/',
      href: 'https://www.naver.com/'
    }
 */