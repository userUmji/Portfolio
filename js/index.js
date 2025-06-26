// 모달창 부모
modal_wrap = document.querySelector(".modal-wrap");
// 실제 모달
modals = document.querySelectorAll(".modal");
// 모달 창 닫기 버튼
close_btns = document.querySelectorAll(".close-btn");
// 상세보기 버튼
view_details_btn = document.querySelectorAll(".view-details-btn");

view_details_btn.forEach((btn,index)=>{
  btn.addEventListener("click",()=>{
    for(modal of modals){
      modal.classList.remove("active");
    }
    modal_wrap.classList.add("active");
    modals[index].classList.add("active");
  })
})
console.log(close_btns);
close_btns.forEach((btn, index)=>{
  btn.addEventListener("click",()=>{
    modal_wrap.classList.remove("active");
    modals[index].classList.remove("active");
  })
})