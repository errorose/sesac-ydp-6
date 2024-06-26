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
                <td><button type="button" onclick="deleteVisitor(this, ${data.id});">삭제</button></td>
            </tr>
        `;

        // insertAdjacentHTML: 특정 요소에 html 추가
        tbody.insertAdjacentHTML('beforeend', html);
    })
}

// [삭제] 버튼 클릭시
// - 테이블에서 해당 행 삭제
function deleteVisitor(obj, id){
    console.log(obj); // 클릭한 삭제 버튼
    console.log(id);  // 행의 id

    // console.log(confirm('진짜로 삭제?'));
    if(!confirm('진짜로 삭제?')){ // false: 취소버튼 클릭
        return; // deleteVisitor 함수 종료 -> 백으로 요청 x
    }

    axios({
        method: 'DELETE',
        url: '/visitor',
        data: {
            id      // id: id
        }
    }).then((res)=>{
        console.log(res.data);

        if(res.data.result){
            // alert('삭제 성공!');
            obj.parentElement.parentElement.remove();
        }
    })
}