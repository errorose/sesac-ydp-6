const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('#button-group');

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
                <td><button type="button" onclick="ediVisitor(${data.id});">수정</button></td>
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
            // obj.parentElement.parentElement.remove();
            obj.closest(`#tr_${id}`).remove();
        }
    })
}

// 테이블의 [수정] 버튼 클릭시
// - form input에 value 넣기
// - [변경], [취소] 버튼 보이기
function editVisitor(id){
    axios({
        method: 'GET',
        url: `/visitor/${id}`
    }).then(res=>{
        console.log(res.data);
        // { "id": 6, "name": "lily", "comment": "hello" }

        const {name, comment} = res.data;
        const form = document.forms['visitor-form'];
        form.name.value = name;
        form.comment.value = comment;
    })

    const html = `
    <button type="button" onclick="editDo(${id});">변경</button>
    <button type="button onclick="editCancel();">취소</button>
    `;
    buttonGroup.innerHTML = html;
}

// [변경] 버튼 클릭시
// - 데이터 수정 요청 
function editDo(id) {
    const form = document.forms['visitor-form'];

    axios({
        method: 'PATCH',
        url: '/visitor',
        data: {
            id, // id: id
            name: form.name.value,
            comment: form.comment.value
        }
    }).then(res => {
        console.log(res.data);

        if (res.data.result) {
            alert('수정 성공!');

            const children = document.querySelector(`#tr_${id}`).children;
            children[1].textContent = form.name.value;     // 이름 열
            children[2].textContent = form.comment.value;  // 방명록 열

            // 입력창 초기화
            editCancel();
        }
    })
}

// [취소] 버튼 클릭시
// - input 초기화
// - [등록] 버튼 되돌리기
function editCancel() {
    // 1. input 초기화
    const form = document.forms['visitor-form'];
    form.name.value = ''
    form.comment.value = ''

    // 2. [등록] 버튼 보이기
    const html = `<button type="button" onclick="createVisitor();">등록</button>`;
    buttonGroup.innerHTML = html;
}