const formInfo = document.querySelector('.form-info');
const btnClose = document.querySelector('.btn-close');

const showPopup = (fName,lName,email,option,message) => {
    const popupMessage = document.createElement('p');
    formInfo.classList.remove('not-visible');
    // formInfo.classList.add('active');
    const popupData = `Dear ${fName} ${lName}, thanks for enrolling for our ${option} course! \nWe will inform you about start date on ${email}. Also, our administration will note your additional message: ${message}`;
    popupMessage.textContent = popupData;
    formInfo.appendChild(popupMessage);
}
btnClose.addEventListener('click', () => {
    formInfo.remove();
});
export default showPopup;