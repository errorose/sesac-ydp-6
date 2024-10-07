function voRes1() {
  const form = document.getElementById('form_vo1');
  axios
    .post(`/axios/vo/res`, { name: form.name.value, gender: form.gender.value, birth: form.birth.value, like: form.like.value })
    .then((res) => {
      console.log('voRes1 : ', res.data);
    });
}