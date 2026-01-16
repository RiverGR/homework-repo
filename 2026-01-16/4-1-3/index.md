## 200 OK 확인 : status 200

링크 : https://tools-httpstatus.pickup-services.com/200

## 404 Not found 확인 : status 404

링크 : https://tools-httpstatus.pickup-services.com/404

## 500 Internal Server Error 확인 : status 500

링크 : https://tools-httpstatus.pickup-services.com/500

## 4xx(클라이언트 에러)와 5xx(서버 에러)의 차이점

4xx : 서버를 요청한 쪽(클라이언트)의 문제
예시 : 잘못된 URL, 인증/권한 없음, 형식 오류 등이 있다.
5xx : 클라이언트(요청)은 정상이나, 서버 상태의 문제
예시 : 서버 로직에 오류가 생겼거나, 서버가 다운되는 등

## 4xx와 5xx의 오류코드들

400 : 클라이언트가 잘못된 요청을 했을 경우(Bad Request)
401 : 클라이언트가 서버에 인증을 실패할 때(Unauthorized)
403 : 클라이언트가 서버에 권한이 없을 때(Forbidden)
404 : 애초에 그 서버가 존재하지 않을 떄(Not found)
500 : 서버 내부에 오류가 발생했을 때(Internal Server Error)
502 : 중간 서버에서 응답을 받지 못할 때(Bad Gateway)
503 : 서버가 일시적으로 사용이 불가할 때(Service Unavailable)
504 : 서버의 처리 시간이 너무 오래 걸릴 때(Gateway Timeout)
