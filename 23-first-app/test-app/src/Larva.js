// 컴포넌트 작성법
// #1. Function 만들기
// #2. return ()안에 html 작성.
// #3. <함수명></함수명> or <함수명 /> 도 가능.
// -> 호출 할 곳에.

// 화살표 함수도 가능!
// const Larva = () => {}

// Q) 언제 사용하면 좋은가?
// A) 반복적인 Html 축약 버전으로 사용
// A) 큰 페이지
// A) 자주 변경 되는 UI.
// + 장점) html 더러운걸 깔끔하게 정리 할 수 있다. (div)
// 다른사람이 봐도, 나중에 미래의 내가 봐도 한눈에 이 컴포넌트가 무슨 용도의 html인지 쉽게 알 수 있다.

// 지역변수 개념.
import './Larva.css'

function Larva(){
    return(
        <>
            <div className="lavar">
                <div className="body body1">
                    <div className="eye eye-white">
                        <div className="eye eye-black"></div>
                    </div>
                </div>
                <div className="body body2"></div>
                <div className="body body3"></div>
                <div className="body body4"></div>
                <div className="body body5"></div>
                <div className="body body6"></div>
            </div>
        </>
    )
}

export default Larva;