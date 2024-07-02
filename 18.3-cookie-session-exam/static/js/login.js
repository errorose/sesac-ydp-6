const resultBox = document.querySelector('.msg');

 function login(){
    console.log('login btn');

    const form = document.forms['form_login'];
    const formInfo = document.forms['form_info'];
    
    const data = {
        userid: form.userid.value,
        userpw: form.userpw.value
    };
    console.log('data >> ', data);

    if(data.userid === ''){
        resultBox.textContent = '아이디를 입력해주세요!'
        resultBox.style.color = 'red'
    }else if(data.userpw === ''){
        resultBox.textContent = '비밀번호를 입력해주세요!'
        resultBox.style.color = 'red'
    }else{
        axios({
            method: 'POST',
            url: '/user/signin',
            data,
        }).then((res)=>{
            console.log('res.data >> ', res.data);
            return res.data;  
        }).then((data)=>{
            if(data.flag){ // true
                alert('로그인 성공!');
                // window.location.href = '/user/profile';
            }else{ // false
                alert('로그인 실패!');
                form.userid.value = '';
                form.userpw.value = '';
            }
        }).catch((error)=>{
            console.error(error);
            alert('알 수 없는 오류로 에러 발생... 다시 시도해 주세요!!');
        })
    }

}