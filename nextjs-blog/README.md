# Data Fetching & Layout

<br>

## 1. Data Fetching

> Data Fetching 방식에 4가지가 있는데, Nextjs에서는 Pre-rendering을 위해 SSG / SSR 방식을 사용할 수 있다.
> Pre-rendering이 되면 검색엔진이 페이지의 정보를 읽어가기 용이하고 초기로딩 속도가 빠르다는 장점이 있다.

<br>

### ✅ SSR

> 서버에서 데이터를 가져와서 데이터를 페이지로 props를 통해 전달해 준다.

#### ✔️ 사용되는 함수 : `getSeverSideProps`

#### ✔️ 단점 :

새로고침할때마다 서버에서 계속해서 데이터를 불러오기 때문에 서버에 과부하가 올 수 있다.
![](https://velog.velcdn.com/images/seoyul0203/post/9e7906af-a3fe-4a80-82d8-bd9813e1cc7c/image.png)

<br>

---

<br>

### ✅ CSR

> 클라이언트가 데이터를 가져와서 그린다.

기존 React에서 사용하던 방식이기 때문에 그대로 사용가능

<br>

---

<br>

### ✅ SSG

> 정적인 사이트를 데이터를 가져와서 그린다.

- build를 함과 동시에 데이터를 모두 가져와서 static한 페이지를 생성하기 때문에, SSG를 제대로 보려면 `build`를 해야한다.
  (yarn dev - yarn build - yarn start)
- 개발환경에서(dev)에서는 SSR처럼 서버에서 데이터를 가져오는 것 처럼 보이기 때문에 헷갈릴 수 있다.

#### ✔️ 사용되는 함수 : `getStaticProps` +`getStaticPaths`

#### getStaticProps

: 빌드 시 데이터를 불러와 static 페이지를 생성함

#### getStaticPaths

: `pages/**/[id].jsx` 형태의 동적 라우팅 페이지 중, 빌드 시에 static하게 생성할 페이지의 path를 미리 지정

#### ✔️ 사용하는 이유 :

: 이미 빌드되어있는 데이터를 보여주기 때문에 서버에서 데이터를 불러왔지만 과부하가 걸릴 일이 없다.
블로그와 같은 정적인 사이트는 SSG를 사용하는것이 훨씬 서버의 과부하를 줄이고 효용성이 높다.

<br>

---

<br>

### ✅ ISR

> 증분정적사이트를 재생성한다(특정주기로 데이터를 가져와서 다시 그려둔다)

- SSR + SSG의 장점을 합쳐놓음

<br>

#### ✔️ 사용되는 함수 : `getStaticProps(+revalidate)`

SSG와 같지만 revalidate에 지정한 시간에따라 해당 시간마다 다시 데이터를 가져온다.

![](https://velog.velcdn.com/images/seoyul0203/post/806b1b10-9dd9-42b9-8c3f-4e29c470f57f/image.png)

<br>

---

<br>

<br>

## 2. Layout

> `pages` 와 `_app.js`를 활용해서 모든페이지에서 혹은 일부페이지에서만 공통으로 사용할 Layout을 설정해 줄 수 있다.
