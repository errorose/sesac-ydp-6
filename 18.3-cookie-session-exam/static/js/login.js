const resultBox = document.querySelector('.msg');

 function login(){
    console.log('login btn');

    const form = document.forms['form_login'];
    const formInfo = document.forms['form_info'];
    
    const data = {
        userid: form.userid.value,
        userpw: form.userpw.value
    };
    console.log('front data >> ', data);

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
            console.log('front2 res >> ', res);
            console.log('front2 res.data >> ', res.data); // 컨트롤러의 res.send()
            return res.data;
        }).then((data)=>{
            console.log('front3 res.data >> ', data); // res.data
            if(data.flag){
                console.log('data.flag >> ', data.flag); // true
                alert('로그인 성공!');
                formInfo.userid.value = form.userid.value; // formInfo에 userid 설정
                formInfo.submit();
                // window.location.href = '/user/profile';
            }else{
                console.log('data.flag >> ', data.flag); // false
                alert('로그인 실패!');
                form.userid.value = '';
                form.userpw.value = '';
            }
        }).catch((error)=>{
            console.error(error);
            alert('알수없는 오류로 로그인 실패... 다시 시도해 주세요!');
        })
    }

}