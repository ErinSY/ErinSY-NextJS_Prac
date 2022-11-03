
# 라우팅
>Next js에서는 File system을 기반으로 라우팅이 된다.
- File system은 pages폴더 아래 있어야하며 `src/pages/` 와 `pages/` 가 있다면 후자가 우선순위.
- 


## 절대경로 설정
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


## slug 활용
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
