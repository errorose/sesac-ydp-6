// 함수형
// 직관적으로 함수 이름 만들고, 보여줄 html 요소 return문에 작성.
// +화살표 함수(함수표현식)로 작성해도되고, 함수선언문으로 작성해도 된다.

const FunctionComponent = (props) => {
    console.log("Function props >>> ", props); // {name : 'xxx"}
    const { name } = props;
    const teacher = "Damon";

    return (
        <>
            <h1>Hi~ {teacher}!</h1>
            <p>여기는 Funtional Component!</p>
            {/* props 사용할 때 */}
            <p>
                {/* 새로운 컴포넌트의 이름은 <b>{props.name}</b> */}
            </p>
            <p>새로운 컴포넌트의 이름은 <b>{name}</b></p>
        </>
    )
}

export default FunctionComponent;


// TMI
// 리액트 18부터, React.StrictMode가 기본적으로 활성화가 됩니다.
// 이는 개발 모드에서 컴포넌트의 렌더링과 라이플사이클(생명주기) 메서드가 두 번 호출되도록 하여,
// 부작용을 테스트하고 식별하는 데 도움을 줍니다.
// 이로 인해서 console.log가 두 번 찍힐 수 있습니다.