import PropTypes from 'prop-types';

const TrueFalseComponent = ()=>{
    const result = 3 + 5 == 8;
    console.log('result >> ', result);

    return (
        <>
            <h2>{result === true ? <span>정답입니다!</span> : <span>오답입니다!</span>}</h2>
        </>
    )
}

export default TrueFalseComponent;