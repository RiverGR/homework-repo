# 공개 API 응답 분석

## 1. 공개 API URL에 접속한다.(jsonplaceholder)

https://jsonplaceholder.typicode.com/posts/1

위의 링크로 접속하면 다음과 같은 JSON 데이터가 반환된다.

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

여기서 userId는 게시글 작성자 ID이며
id는 게시글 고유 번호이다.
또한 title은 게시글 제목, body는 게시글 내용으로 분류된다.

### Request(요청)와 Response(반환)의 차이

Request는 클라이언트가 서버에 데이터를 요청하는 것
예 : 브라우저에서 위의 링크 중 /posts/1의 주소로 접속하면 그 게시글 정보를 요청하는 것이다.

Response는 서버가 요청을 처리한 후 클라이언트에게 반환을 하는 것이다.
위의 API에서는 게시글 정보가 JSON 형식으로 응답을 한 것과 같다.

#### API 키가 필요한 이유와 보안의 대한 주의사항
API 키는 API 사용자를 식별하며, 엄청 많은 요청을 제한하기 위해 필요한 것이다.
API 키는 외부에는 절대 노출 금지이며 프론트엔드 코드나 github같은 공개적인 저장소에는 직접적으로 작성을 절대로 하면 안된다.
```
