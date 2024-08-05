import PropTypes from 'prop-types';

const AnimalComponent = (props)=>{
    console.log('Animal props >> ', props);
    const {name, animal} = props;
    const styles = {
        textDecoration: 'underline',
        textAlign: 'left'
    }

    return (
        <>
            <h2>제 반려 동물의 이름은 <span style={styles}>{name}</span>입니다.<br />
                <span style={styles}>{name}</span>는 <span style={styles}>{animal}</span>입니다.
            </h2>            
        </>
    )
}

export default AnimalComponent;