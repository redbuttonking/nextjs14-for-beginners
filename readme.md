# Next JS 강의 \_ 노마드 코더

👉 [API링크](https://nomad-movies.nomadcoders.workers.dev/)  
👉 [프로젝트 링크 ](https://nextjs14-movies-3s5lg2uvc-redbuttonkings-projects.vercel.app/)

## 1. 프로젝트 Set up

1. 프로젝트 폴더 만들기

2. VScode 터미널에서 (해당 폴더) `npm init -y`  
   : package.json 생성

3. package.json 폴더에서 `"license": "MIT"` 으로 바꿔주기

4. VScode 터미널에 `npm i react@latest next@latest react-dom@latest`  
   : 리액트와 , 넥스트 , 리액트 돔을 설치해줌

5. package.json 폴더에서 scripts에 `"dev": "next dev"` 써주기  
   : next js를 실행 시켜쥼. **(test는 지워주기)**

6. 폴더와 파일 생성 해주기 _ `app` 폴더 생성 -> 그안에 `page.tsx` 파일 생성  
   : next js는 실행할 때 `app` 폴더 안에 `page`라는 파일을 찾아봄 _ **_⭐스펠링, 대소분자지켜야함_**

7. page.tsx에 간단한 코드를 만들어서 터미널에 `npm run dev` 실행 \_ _빨간줄이 나와도 그냥 하셈_  
   : 실행해주면 자동으로 next js 서버가 만들어짐. 그 주소를 클릭하면 `layout.tsx`를 생성해줌

## 2. 24년 9월 12일 강의

### 💬 라우트 정의

기존에 리액트에서 했던 방식과는 다르게 간단하게 파일 시스템을 사용해서 경로를 표시해주면 됨  
동시에 `page.tsx` 파일도 해당 디렉토리 안에 꼭 생성해야함

1. 루트 폴더에 폴더를 하나 만들어준다. (폴더명이 주소가 됨)

2. 폴더 안에 `page.tsx`를 만들어서 리액트 컴포넌트를 만들어준다.

⭐ 폴더안에 폴더를 만들어서 경로로 사용할 수 있음

```
// 폴더 경로
app/about-us/company/sales;
```

🔎 **결론**

- 폴더는 페이지 주소를 나타내며 그 주소에서 실제로 보여줄 페이지가 있다면 `page.tsx`파일을 생성해야함  
  (`page.tsx` 가 없다면 주소가 되지 않음)

- 폴더안에 `page.tsx`는 없고 또 다른 폴더가 있다면 => 그 폴더(`page.tsx`가 없는)는 경로의 일부분이 됨

## 3. 24년 9월 13일 강의

### 💬 not-found.tsx

페이지 경로가 잘못 되었을 때 보여주는 페이지.  
app 폴더 (root)에 만들어 사용함.

### 💬 Navigation \_ (Link , usePathname)

웹 페이지를 전환하는 Navigation을 만들기 위해서 components 폴더를 만듦.(navigation.tsx)

**<링크 만들기 \_ Link>**

- 이후 Next에서 제공하는 Link 라이브러리를 import 하여 사용함.

**_📖 예시코드_**

```ts
import Link from 'next/link';

export default function Navigation() {
  return (
    <div>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about-us">
          <li>About Us</li>
        </Link>
      </ul>
    </div>
  );
}
```

**<현재 페이지가 어디인지 표시하기 \_ usePathname>**

- 마찬가지로 usePathname을 import 해줌.
- 해당 페이지의 링크주소를 변수에 저장 할 수 있음.

```ts
'use client';
import { usePathname } from 'next/navigation';

//코드 생략 ...

const path = usePathname();

//코드 생략 ...
```

⭐ 코드 상단에 `'use client';`를 써줘야함.  
**_-> usePathname은 `client component` 에서만 작동을 하기 때문에_**

⭐⭐⭐  
 `'use client;'` : 이게 작성되어 있는 component, page는 **_Backend에서 Render_** 되고 **_frontend에서 hydrate_** 즉 **_interactive_** 된다는 것을 의미함.

### ➕ Next.js의 특징 \_ Server Side Randering

> 노마드 코더 Next.js 강의 #2.6 Recap 참고

모든 component(client , server)와 page는 서버에서 먼저 Rendering 됨. (⭐`'use client';` 있다고 해서 client rendering이라고 착각함. ❌ 아님!! )

`Rendering` : 브라우져가 JS function 코드를 이해하기 위해서 HTML코드로 변환해주는 작업

즉 Next.js로 빌드가 된 페이지에 접속하면 Next.js가 Backend애서 component와 그 페이지를 랜더링 함

**🔎 결론**

1. 순수 HTML 코드(JS가 없는)를 브라우저에 띄움

   - 사용자는 바로 UI를 볼 수 있음 (빈 화면 ❌)

   * 단 interactive(상호작용) 할 수 없음

2. 이후에 이후에 JS(리액트 or 프레임워크)를 받아서 프레임워크를 초기화함 (hydrate)

3. 이제 page에서 interactive 할 수 있음 (onClik 등등)

⭐ 이것이 SSR(Server Side Randering)

**👍 장점**

1. 사용자가 다운로드 해야할 JS가 적어짐 \_ 페이지 로딩속도 Up ⏫
2. data fecting 할 때 강력함! (서버에서 직접 하기 때문에 모든 API key를 다 넣을 수 있음 )

## 4. 24년 9월 18일 강의

### 💬 layout.tsx

여러 페이지에서 다 사용하는 부분들(ex\_네비게이션)을 일일이 페이지 마다 복사 해서 넣어야 할 때 layout.tsx를 사용하면 됨

**<렌더링 순서>**

1. 어떤 링크든 링크로 들어가면 Nextjs는 layout 컴포넌트를 렌더링 함.(해당 페이지에서 가장 가까운 layout을 찾음)

2. 이동하려는 페이지의 URL을 인식하고 layout 컴포넌트 안에서 해당 컴포넌트를 렌더링함. 즉, 해당 페이지가 layout 컴포넌트의 props가 됨

**<특징>**

- layout은 상쇄되지 않고 중첩 된다.

- 그래서 특정 경로에 내가 원하는 부분을 보여주고 싶으면 그 경로에 layout.tsx를 만들어주면 됨

**_📖 구조_**

```HTML
// 실제 코드가 아니라 렌더링 예시를 보여줌
<Layout> // root 레이아웃
  <AboutUsLayout> // aboutus 페이지 레이아웃
    <SalesLayout> // sales 페이지 레이아웃
      <Sales></Sales>  // sales 페이지
    </SalesLayout>
  </AboutUsLayout>
</Layout>
```

### 💬 route Groups

경로에 대한 그룹화를 하는 방법

폴더 명에 `()`를 넣어서 만들어줌 `ex. (home)`

괄호가 들어간 폴더는 URL을 만들지 않음

### 💬 metadata

`<head>` 에 들어갈 내용들을 넣어줌.

layout과는 다르게 metadata는 **병합**이 됨.

⭐ 레이아웃과 페이지만 metadata를 export해줄 수 있음. ⭐  
⭐ client component에서는 metadata를 사용 할 수 없음. ⭐

**_📖 예시코드_**

```ts
// root에 있는 layout.tsx

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies ',
    default: 'Not Found',
  },
  description: 'the best movies on the best framework',
};
```

TypeScript를 사용한다면 `Metadata`로 타입지정이 가능

title 에는 문자열이 될 수 있고 template가 들어간 객체일수 있음(default 값도 들어가야함) \_ _자세한건 공식문서에 다양하게 나와있음_

**🔎 결론**

이를 통해 개발자 입장에서 좋은 경험을 주고 컴포넌트를 추가하거나 UI를 혼란스럽게 만들어줄 필요도 없어짐

### 💬 Dynamic(동적) Routes

예전 리액트를 배울때 `<Movie/>` 에서 `/Movie/:id` 와 같은 개념임

주소에 데이터를 넣어서 다양하게 페이지를 표현하는 방법

**<사용 방법>**

1. 폴더를 하나 만들어 준다 (ex. `movie`)
2. 그 안에 `[]`를 사용해서 폴더를 만든다 (ex. `[id]`)

주소에 movie/`[id]` id의 값을 가지고 여러가지를 할 수 있음. (ex. 각 영화의 고유 id를 넣어 해당 영화 정보를 나타내는 페이지.)

**<주소에 있는 데이터를 받아 사용하는 방법>**

1. `[id]` 폴더 안에 page는 두가지의 props (파라미터)를 받음.
   `{params :{id : } , searchParams:{}}`  
   ex . 주소가 `movie/32331?region=kr&page=2` 이라면  
   `{params :{id :'32331'} , searchParams:{region:'kr',page:'2'}}`

2. 해당 page.tsx에서 사용 하면 됨.

```ts
// 예시 코드
export default function MovieDetail({ params: { id } }: { params: { id: string } }) {
  return <h1>Movie{id}</h1>;
}
```

## 5. 24년 9월 19일 강의

### 💬 Data Fecthing

- Nextjs는 리액트에서 했던 Fetching과는 다르게 Data를 받아옴
- server componenet를 사용 한다면 fetch된 URL을 캐싱을 **자동으로** 해준다. (프레임워크-Next.js의 힘!)
- 이 코드(아래)들은 사용자에게 전달되지 않기 때문에 보안상 안전함!

**_📖 예시코드_**

```ts
const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();

  return <div>{JSON.stringify(movies)}</div>;
}
```

useState, useEfect 없이 **깔.끔.**

_💥단, 데이터를 불러오는 시간이 걸린다는 단점이 있음._

### 💬 Loding Components

- Data Fetching를 백엔드에서 하고 있을때 브라우저에서 아무것도 보이지가 않음.
- 사용자 입장에서는 아무것도 없는 흰 바탕만 보고 있어야 함.
- 브라우저에게 백엔드의 작업이 끝날때까지 미리 보여줄 page(로딩)를 만들어 주어야 함

해당 page 와 같은 폴더에 `loading.tsx` 파일을 만들어주면 됨.

브라우저는 server component의 작업이 끝날때 까지 loading component를 보여주고  
백엔드의 작업이 끝나면 component를 새로 업데이트를 해서 보여줌.

## 6. 24년 10월 02일 강의

### 💬 Promise \_ 비동기 작업을 처리하는 객체

비동기 작업을 할때 완료, 실패했을 때 결과를 처리할 수 있음.

**Promise는 3가지의 상태를 가짐**

1. **Pending** : 초기 상태 \_ 작업이 완료 되지 않은 상태
2. **Fulfilled** : 작업이 성공적으로 완료된 상태
3. **Rejected** : 작업이 실패한 상태

**_📖 예시코드_**

```js
// 1) 기본적인 사용
new Promise ((resolve , reject)=>{...})

// 2) Promise.all
const [movie, videos] = await Promise.all([getMovie(),getVideos()])

```

1. 기본적인 사용

   - Promise 객체를 생성해서 비동기 작업을 정의함.
   - resolve : 작업이 성공했을때 호출
   - reject : 작업이 실패 했을때 호출

2. Promise.all
   - 여러개의 Promise 객체를 배열로 받아 모든 Promise가 완료 될때까지 기다렸다가 결과를 배열로 반환받음.
   - 예시의 경우 `getMovie()` , `getVideos()`가 **동시에** 실행됨

**Promise.all \_ Parallel Requests**

데이타를 fecth 할 때 병렬적으로 (동시에 작업을 수행) 하는 방법

`Promise.all([])`
배열 안에 작업들을 await를 하고 작업 이 끝나면 결과 값이 들어있는 배열을 줌.

**_📖 예시코드_**

```js
// 전 = 하나씩 하나씩 순차적으로 이루어져 응답 시간이 느림
const movie = await getMovie(id);
const videos = await getVideos(id);

// 후 = 병렬적으로 동시에 작업을 수행함
const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
```

**Promise에 resolve만 넣은 경우**

resolve만 넣었다는 건 해당 비동기 작업이 실패를 고려하지 않고 항상 성공 상태로 끝날 것을 의미함. 즉 **무조건 성공** 처리 된다는 가정하에 작성

**_📖 예시코드_**

```js
await new Promise((resolve) => setTimeout(resolve, 2000));
```

만약 비동기 작업 중 실패할 가능성이 있다면 reject를 사용해 명시적으로 에러 처리를 해주는게 좋음.

## 7. 24년 10월 03일 강의

### 💬 Suspense

Page 단위로 로딩을 할 때는 `lodading.tsx`를 이용 했는데, 서버 컴포넌트 단위로 로딩을 할 때는 React가 제공하는 `Suspense`를 사용함.

**_📖 예시코드_**

```HTML
  <Suspense fallback={<h2>movie info Loading...</h2>}>
    <MovieInfo id={id} /> // async 인 컴포넌트
  </Suspense>

  <Suspense fallback={<h2>movie videos Loading...</h2>}>
    <MovieVideos id={id} /> // async 인 컴포넌트
  </Suspense>

```

- Suspense가 감싼 컴포넌트가 아직 await 일때 fallback에서 Loading UI를 제공
- 작업이 완료되면 그 UI를 사용자에게 제공함

**🔎 결론**  
page 단위 Loading(`loading.tsx`)은 모든 작업이 끝나야 완성된 page를 보여주지만 서버 컴포넌트 단위 Loading은 각 컴포넌트의 작업이 끝나는대로 컴포넌트를 보여준다 (병렬적)

### 💬error.tsx

혹 에러가 나는 상황일때(fecth 오류 등등...) 모든 컴포넌트가 먹통이 되지 않게 하려면 해당 page 폴더 안에 `error.tsx` 파일을 만들면 됨.

## 7. 24년 10월 08일 강의

### 💬 useRouter() \_ Link와 비슷한 방식의 navgation 작동(page이동)

next에서 제공하는 hook으로 `useRouter()`는 Router에 대한 access를 제공함

**_📖 예시코드_**

```ts
import useRouter form "next/navigation";

//... 코드 생략

const router = useRouter();

const onClick = () => {
  router.push(`/movie/${id}`);
};

```

💥 import를 할 때 자동으로 `import useRouter from 'next/router'`이 되는데 `next/navigation` 라고 써줘야함

💥 또한 코드처럼 `onClick`함수를 만들어서 event listener를 사용한다면 server componet가 아닌 client compnent가 되어야함 _(`use cilent` 적어주기)_

### 💬 generateMetadata() \_ Dynamic metadata

원래 metadata는 정적인 data로 바꿀수 없었는데 Dynamic 하게 metadata를 불러 올 수 있음.

**_📖 예시코드_**

```ts
import MovieInfo, { getMovie } from '../../../components/movie-info';

// export 꼭 써줘야함 ㅇㅇ
export async function generateMetadata({ params: { id } }: Iparams) {
  const movie = await getMovie(id); // MovieInfo component에서 가져온 함수

  return {
    title: movie.title,
  };
}
```

⭐중요⭐  
metadata를 위해서 API를 호출 하고 이후 영화 정보를 불러오려고 API를 또 호출하는 것이 안 좋은 방법이라고 생각 할 수 있지만 최신 Next의 기능으로 두번째 fetch는 캐시된 응답을 받기 때문에 괜찮음!

### 💬 prefetch

**_📖 예시코드_**

```ts
      <Link prefetch href={`/movie/${id}`}>
```

이 Lick가 사용자에게 보이게 되면 Next는 자동으로 fetch를 시작함

⭐중요⭐  
너무 난무하게 prefetch를 사용하면 DB가 터질수도 있음 ㅎ (적절한 곳에 사용 할 것.)
