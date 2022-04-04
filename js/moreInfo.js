const btns=document.querySelectorAll('.plans__course-choose-plan-button')
const closeBtns=document.querySelectorAll('.plans__more-info-close-btn')

const moreInfo=function(){
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const parentEle=e.currentTarget.parentElement;
        parentEle.classList.add('plans__more-info-show');
        
        parentEle.classList.add('plans__backdrop-visible');
        
    
    closeBtns.forEach(closeBtn=>{
        closeBtn.addEventListener('click',()=>{
            parentEle.classList.remove('plans__more-info-show');
            
            parentEle.classList.remove('plans__backdrop-visible');
        })
    })
})
    })

   
}

export default moreInfo;