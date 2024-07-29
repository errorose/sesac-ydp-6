//
import './Button.css';

const Button = (props)=>{
    console.log('Button props >> ', props);
    const {link, children} = props;
    return(
        <>
            <a href={link}>
                <button className="Button">{children}</button>
            </a>
        </>
    )
}

// Button.defaultProps = {
//     children: '네이버',
//     link: 'https://www/naver.com',
// }

// Button.propTypes = {
//     children: PropTypes.string,
//     link: PropTypes.string,
// }

export default Button;