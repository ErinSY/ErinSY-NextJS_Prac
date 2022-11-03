# 라우팅

> Next js에서는 File system을 기반으로 라우팅이 된다.

- File system은 pages폴더 아래 있어야하며 `src/pages/` 와 `pages/` 가 있다면 후자가 우선순위.

<br>
<br>

## ✅ 절대경로 설정

> src아래 폴더들을 정렬하다보면 뎁스가 많아지면 컴포넌트를 import 할때 `../`를 여러번 적어주어야하는데, 이를 방지하기 위해 절대경로를 설정할 수 있다.

<br>

### `jsconfig.json`파일에 아래코드 추가

```js
{
  "compilerOptions": {
    "baseUrl": "src"
  },
}
```

<br>
<br>

---

## ✅ slug

### 👉 slug 파일

> wild card처럼 다양한 값을 받을수 있는데, 하나의 파일로 여러 파일을 대체할 수 있다.

#### 1. [slug]

```js
pages / category / [slug].js; // http://www.~~~~.com/category/:slug 와 같음 (ex: http://www.~~~~.com/category/food)
```

#### 2. [...slug]

> 무한으로 하위 파일명 추가 가능

```js
pages / category / [...slug].js; // http://www.~~~~.com/category/:slug/:slug/:slug...... 와 같음 (ex: http://www.~~~~.com/category/food/fruit/apple/sweet/.....)
```

#### 2. [[...slug]].js

> 옵셔널 slug로, 폴더아래 `index.js`를 지정해주지 않더라도 접근가능하다.

```js
pages / category / [...slug].js; // http://www.~~~~.com/category 로 접근하면 404에러
pages / category / [[...slug]].js; // category아래 index파일이 없더라도 http://www.~~~~.com/category 로 접근가능.
```

<br>

### 👉 slug 값의 활용

> `useRouter` 훅을 이용하여 다양하게 사용할 수 있다.

```js
import { useRouter } from 'next/router';
const router = useRouter();
const { slug } = router.query;
// 여기서 slug는 지정해준 파일이름이 된다
```

#### query가 있는경우?🤔

ex) category/food?from=event

```js
import { useRouter } from 'next/router';
const router = useRouter();
const { slug, from } = router.query;

// slug=food
// from = event
```

#### query에 'slug'가 있는경우?🤔

> pages 안의 [slug]가 우선시 된다.
> ex) category/food?slug=event

```js
import { useRouter } from 'next/router';
const router = useRouter();
const { slug } = router.query;
// slug=food (o)
// slug=event (x)
```

#### 다중 slug의 경우?🤔

#### 1. [slug]

ex) 파일구조 => pages/[username]/[info].js

```js
import { useRouter } from 'next/router';
const router = useRouter();
const { username, info } = router.query;
```

#### 2. [...slug]

ex) 파일구조 => pages/cart/[...slug].js

```js
import { useRouter } from 'next/router';
const router = useRouter();
const { slug } = router.query;
// slug는 배열로 반환
```

<br>
<br>

---

## ✅ 페이지간의 이동

#### 1. Link

```js
<Link href='url'>url로가기</Link>
```

#### 2. router.push

```js
router.push('url'); // 이벤트리스너로 추가
```

<br>
<br>

---

## ✅ Shallow Routing
> `getServerSideProps` / `getStaticProps`등을 다시 실행시키지 않고, 현재 상태를 잃지 않은 상태로 url을 바꾸는법

ex) 사용자가 어떠