const popupElement = document.querySelector('.popup');
const popupButtonClose = popupElement.querySelector('.popup__button-close');
const editName = popupElement.querySelector('.popup__field_name');
const editJob = popupElement.querySelector('.popup__field_profession');
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');
const popupButtonOpen = profile.querySelector('.profile__button-edit');


const openPopup = function () {
  editName.value = profileName.textContent;
  editJob.value = profileJob.textContent;
  popupElement.classList.add('popup__opened');
}

const closePopup = function () {
  popupElement.classList.remove('popup__opened');
}

const closePopupClick = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profileJob.textContent = editJob.value;
  closePopup();
}

popupButtonOpen.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupClick);
popupElement.addEventListener('submit', formSubmitHandler);
