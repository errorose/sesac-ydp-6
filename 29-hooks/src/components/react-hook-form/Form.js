import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
    const {
        register, // input 할당, value 변경 감지.
        handleSubmit, // form submit 시 호출.
        formState: { errors }, // 폼 상태 객체
        watch, // 특정 폼 필드의 값을 실시간으로 사용
    } = useForm();

    // handleSubmit(func A [, func B]) - 두 개의 함수를 받습니다.
    // func A : "필수", 유효할 때 실행
    // func B : "선택", 유효하지 않을 때 실행

    // func A 용
    const onValid = (data) => {
        console.log('onValid >>>>> ', data); // {username: '안녕'}
    };

    // func B 용
    const onInValid = (err) => {
        console.log('onInValid >>>>> ', err);
    };

    console.log('errors >>>>> ', errors);
    console.log('watch >>>>> ', watch('username'));

    return (
        <div>
            <h1>react-hook-form 라이브러리 데모</h1>
            <form onSubmit={handleSubmit(onValid, onInValid)}>
                <input
                    type="text"
                    placeholder="username"
                    // register 함수
                    {...register('username', {
                        required: '이름은 필수 항목입니다',
                        minLength: {
                            message: '이름은 최소 2글자 이상 작성해주세요',
                            value: 2,
                        },
                    })}
                    // 'username' 이라는 필드명 / required, minLength 라는 유효성 검사 규칙
                    // 즉, 'username'이라는 input 필드를 RHF(react-hook-form)에 등록.
                />
                {errors.username?.message}
                {/* 이 표현은 조건부 렌더링과 **옵셔널 체이닝**을 활용하여 폼 필드의 오류 메시지를 표시하는 방법 */}
                {/* errors
                    = formState 객체 중 하나
                    각 폼 필드에 대한 오류 메시지를 담고, 유효성 검사가 실패한 경우에만 해당 필드에 오류 메시지가 저장됨. */}

                {/* 옵셔널 체이닝 연산자 '?.'
                    JS에서 객체의 속성에 접근할 때 해당 속성이 존재하는지 확인하고,
                    없을 경우 undefined를 반환하는 연산자. */}

                <br />

                <input
                    type="email"
                    placeholder="email(gmail)"
                    {...register('email', {
                        required: '이메일을 입력해주세요',
                        validate: {
                            useGmail: (v) =>
                                v.includes('gmail.com') ||
                                'gmail로만 가입 가능합니다',
                        },
                        // pattern: {
                        //     value: '/^@',
                        //     message: ' 유효한 이메일 주소를 입력해주세요.',
                        // },
                    })}
                />
                {/* validate */}
                {/* React Hook Form에서 제공하는 유효성 검사 옵션 중 하나,
                    폼 필드에 대해 커스텀 유효성 검사를 수행할 수 있도록 합니다. 
                    함수 or 함수들을 포함하는 객체를 받을 수 있다.*/}

                {/* validate가 객체로 사용될 경우,
                    객체의 각 속성에 대해 개별적인 유효성 검사를 수행 할 수 있습니다.
                    각 속성은 함수 형태로 정의되며, 이 함수들이 개별적인 유효성 검사 규칙을 적용합니다. */}

                {/* useGmail */}
                {/* validate 옵션의 객체 내부에서 useGmail이라는 이름의 함수로 정의하고, 특정 유효성 검사 규칙을 설정했습니다. */}

                {/* v */}
                {/* 사용자가 email 필드에 입력한 값(이메일 주소)을 의미. */}
                {errors.email?.message}
                <br />

                <input
                    type="password"
                    placeholder="password"
                    {...register('password')}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

// React Hook Form은 주로 언컨트롤드 컴포넌트를 사용함. (컨트롤드, 언컨트롤드)
// 폼 필드가 업데이트 될 때마다 전체 폼이 리렌더링되지 않도록 -> 최적화
// 필요할 때만 폼 필드의 상태를 업데이트 하여 불필요한 렌더링을 줄이고, 결과적으로 앱의 성능을 향상시킨다.

// 일반 폼 작성 vs RHF 라이브러리 차이
// 일반 폼
// - 각 입력 필드의 상태를 useState로 관리해야함.
// - 모든 입력값의 상태를 관리하고, 값이 바뀔 때마다 전체 컴포넌트가 리렌더링 될 수 있음.
// - 검증 로직을 직접 다 작성해야함.
// - 폼 제출 시, 각 입력 필드의 상태들을 모아서 폼 데이터를 수집해야함.
// - 간단한 폼 양식 작성할 때 사용.

// RHF 라이브러리
// - 코드의 간결화
// - 비제어 컴포넌트 / 필요한 경우에만 리렌더링.
// - 다양한 검증 규칙 쉽게 설정.
// - 'handleSumbit' 요 함수 하나로 모든 폼 데이터를 쉽게 관리.
// - 복잡하고 대규모 폼 양식을 작성할 때 사용.

// Q) why? ...을 사용하는가?
// React 컴포넌트에서 ... 연산자는 객체나 배열을 펼쳐서 각각의 요소나 속성을 개별적인 prop으로 전달할 때 사용됩니다.
// 이 문법을 사용하면 코드가 간결해지고, 여러 개의 props를 한 번에 전달할 수 있습니다.

/**
 * Props?
 * - 컴포넌트에 전달되는 입력 값.
 * - 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달 할 때 사용되며,
 * 이 props를 통해 컴포넌트의 동작이나 출력이 결정되죠?
 */

// React에서는 객체의 속성을 컴포넌트의 props로 전달할 때,
// 각 속성을 개별적으로 전달 할 수 있습니다.

// const person = {
//     name: 'damon',
//     hobby: 'game'
// }

// // 직접 전달
// <MyComponent name={person.name} hobby={person.hobby}></MyComponent>
// // 스프레드 연산자를 사용하여 전달.
// <MyComponent {...person}></MyComponent>

/**
 * register 함수는 입력 필드를 폼 상태에 등록하고 제어하는 데 필요한 여러 속성을 포함하는 객체를 반환합니다.
 * 
 *  {...register('username', {
            required: '이름은 필수 항목입니다',
            minLength: {
                message: '이름은 최소 2글자 이상 작성해주세요',
                value: 2,
            },
            onChange: () => {} // 입력 값이 변경될 때 호출되는 함수
            onBlur : () => {} // 입력 필드가 포커스를 잃을 때 호출되는 함수
            ref: () => {} // 해당 DOM 요소에 대한 참조를 설정하는 함수.
        })}

    이 객체를 input 컴포넌트에 전달하기 위해서 스프레드 연산자를 사용하는겁니다.
 */