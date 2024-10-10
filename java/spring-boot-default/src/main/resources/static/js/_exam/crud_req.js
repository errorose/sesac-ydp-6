function postRegister() {
  const form = document.getElementById('form_register');
  axios
    .post(`/register`, {
        userId: form.userId.value,
        userPw: form.userPw.value,
        userName: form.userName.value,
    })
    .then((res) => {
      console.log('회원가입 : ', res.data);
      // 서버로부터 받은 응답을 페이지에 표시
      document.getElementById('registerMsg').innerText = res.data;
    }).catch((error) => {
        console.error('Error: ', error);
    });
}

function postLogin() {
  const form = document.getElementById('form_login');
  axios
    .post('/login', {
        userId: form.userId.value,
        userPw: form.userPw.value,
    })
    .then((res) => {
        console.log('로그인 : ', res.data);
        document.getElementById('loginMsg').innerText = res.data;
    })
    .catch((err) => {
      console.error('Error: ', err);
    });
}

function patchUser() {
  const form = document.getElementById('form_patch');
  axios
    .patch('/patch', {
        userId: form.userId.value,
        userName: form.userName.value,
    })
    .then((res) => {
        console.log('회원정보 수정 : ', res.data);
        document.getElementById('patchMsg').innerText = res.data;
    })
    .catch((err) => {
      console.error('Error: ', err);
    });
}

function deleteUser() {
  const form = document.getElementById('form_delete');
  axios
    .delete('/delete', {
      data: {
        userId: form.userId.value
      }
    })
    .then((res) => {
        console.log('회원정보 삭제 : ', res.data);
        document.getElementById('deleteMsg').innerText = res.data;
    })
    .catch((err) => {
      console.error('Error: ', err);
    });
}


