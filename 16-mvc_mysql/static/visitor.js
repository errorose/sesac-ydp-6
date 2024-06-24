const tbody = document.querySelector('tbody');

// 폼의 [등록] 버튼 클릭시 -> POST/vistor 요청
function createVisitor(){
    console.log('click 등록 btn');

    const form = document.forms['visitor-form'];

    axios({
        method: 'POST',
        url: '/visitor',
        // 추가하려는 정보를 req.body에 실어서 요청을 보냄
        data:{
            name: form.name.value,
            comment: form.comment.value,
        }
    }).then((res)=>{
        console.log(res);

        const {data} = res; // {id: 5, name:'cat', comment:'hi'}

        const html = `
            <tr id="tr_${data.id}">
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.comment}</td>
                <td><button type="button">수정</button></td>
                <td><button type="button">삭제</button></td>
            </tr>
        `;

        // insertAdjacentHTML: 특정 요소에 html 추가
        tbody.insertAdjacentHTML('beforeend', html);
    })
}