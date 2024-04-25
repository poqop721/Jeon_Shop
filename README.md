# Jeon Shop

### 웹사이트 URL
> https://jeon-shop.vercel.app/

### 기술 스택
- 라이브러리 : `React`, `TypeScript`
- Styling : `styled-component`
- 상태 관리 : `Jotai`
- routing : `react-router`
- 패키지 매니저 : `NPM`

### 성능 최적화
1. **throttle**<br>scrollY 값을 저장하기 위한 스크롤 이벤트 핸들러에 throttle을 js로 구현, 적용하여 성능 최적화
2. **컴포넌트 메모이제이션**<br>input에 입력이 일어날 때 마다 모든 상품 컴포넌트가 불필요하게 리렌더링 됨 <br>=> `React.memo` 를 사용하여 컴포넌트를 메모이제이션하여, 상품이 변하지 않는 한 불필요한 리렌더링이 일어나지 않게 함

### 트러블슈팅
1. [children을 prop으로 갖는 컴포넌트에 React.memo가 적용되지 않는 점](https://www.notion.so/children-prop-React-memo-9f66f6f1a62546d09275f2a2f9bb8d7c?pvs=4)
2. [Warning: Received 타입 for a non-타입 attribute 변수명](https://www.notion.so/Warning-Received-for-a-non-attribute-867dc2d744654b4eb4cdef70fe89bdcb?pvs=4)
3. [이미지를 감싸는 div에 box-shadow inset 적용하기](https://www.notion.so/div-box-shadow-inset-3e898c47dac5440daaf9c5531f99b554?pvs=4)

### 구현
- **최적화** : 디버깅의 어려움 및 가독성을 우선시 하여, 불필요한 리렌더링이 발생하더라도 정말 성능 차이가 확실한게 아닌 이상 useCallback을 사용하지 않았습니다.
- **모듈화** : 프로젝트 규모를 생각하여 컴포넌트 내부에 Styled Component 포함하여 모듈화 하였습니다.
- **통일성** : styled component 들은 컴포넌트명 뒤에 태그명을 붙여 통일시켰습니다.

### 업데이트
- 2024/04/25
  - 미디어쿼리를 이용하여 모바일 반응형 웹 구현
  - `더보기` 버튼 빠르게 연타하면 여러 페이지 동시에 늘어나는 문제 수정
