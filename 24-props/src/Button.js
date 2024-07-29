import './Button.css';
import PropTypes from 'prop-types';
// props.children
// : 부모 컴포넌트에서 자식 컴포넌트 호출 시 태그 사이에 작성한 문자열
// 문자열, 숫자, JSX, 배열 등 다양한 형태.

// const Button = (props) => {
//     // console.log('Button props >>> ', props);
//     return (
//         <>
//             <a href={props.link}>
//                 <button className="Button">{props.children}</button>
//             </a>
//         </>
//     )
// };


const Button = (props) => {
    console.log('Button props >>> ', props);
    const {link, children} = props;
    return (
        <>
            <a href={link}>
                <button className="Button">{children}</button>
            </a>
        </>
    )
};

Button.defaultProps = {
    children: '네이버',
    link: 'https://www.naver.com',
}

Button.propTypes = {
    children: PropTypes.string,
    link: PropTypes.string,
}

export default Button;