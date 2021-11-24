// const tabList = document.querySelectorAll('.list-button div');
// const contents = document.querySelectorAll('.list-info_start .list-info')
// const btnactive = document.querySelectorAll('.seventh_btn')
// let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

// for(var i = 0; i < tabList.length; i++){
//   tabList[i].querySelector('.btn').addEventListener('click', function(e){
//     e.preventDefault(); //페이지 고정
    

//     for(var j = 0; j < tabList.length; j++){
//       btnactive[j].classList.remove('is_on');
//       contents[j].style.display = 'none';
//     }


//     // 버튼 관련 이벤트
//     this.parentNode.classList.add('is_on');

//     // 버튼 클릭시 컨텐츠 전환
//     activeCont = this.getAttribute('href');
//     document.querySelector(activeCont).style.display = 'flex';
//   });
// }

const tabList = document.querySelectorAll('.list-button div');
const contents = document.querySelectorAll('.list-info_start .list-info')
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault(); //페이지 고정
  
    for(var j = 0; j < tabList.length; j++){
      // // 나머지 버튼 클래스 제거
       tabList[j].classList.remove('is_on');
       tabList[j].classList.add('is_off');

      // 나머지 컨텐츠 display:none 처리
      contents[j].style.display = 'none';
    }


    // 버튼 관련 이벤트
     this.parentNode.classList.add('is_on');
     this.parentNode.classList.remove('is_off');

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'flex';
  });
}