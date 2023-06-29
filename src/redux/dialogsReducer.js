let inicialState = {
  messagesData: [
    { message: "Привет" },
    { message: "Как дела" },
    { message: "Пон" },
    { message: "Пон" },
    { message: "Пон" },
    { message: "Пон" },
    { message: "Пон" },
    { message: "Пон" },
    { message: "Пон" },
    { message: "Пон" },
    { message: "Пон" },
  ],
  dialogData: [
    {
      id: 1,
      name: "Павел",
      img: "https://coolsen.ru/wp-content/uploads/2021/06/130-4.jpg",
    },
    {
      id: 2,
      name: "Саша",
      img: "https://coolsen.ru/wp-content/uploads/2021/06/130-4.jpg",
    },
    {
      id: 3,
      name: "Михаил",
      img: "https://coolsen.ru/wp-content/uploads/2021/06/130-4.jpg",
    },
    {
      id: 4,
      name: "Илья",
      img: "https://www.ejin.ru/wp-content/uploads/2020/03/29-6.jpg",
    },
    {
      id: 5,
      name: "Николай",
      img: "https://coolsen.ru/wp-content/uploads/2021/06/130-4.jpg",
    },
    {
      id: 6,
      name: "Иван",
      img: "https://coolsen.ru/wp-content/uploads/2021/06/130-4.jpg",
    },
    {
      id: 7,
      name: "nak",
      img: "https://coolsen.ru/wp-content/uploads/2021/06/130-4.jpg",
    },
    {
      id: 8,
      name: "vui",
      img: "https://coolsen.ru/wp-content/uploads/2021/06/130-4.jpg",
    },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = inicialState, action) => {
  let stateCopy = { ...state };
  if (action.type === "ADD-MESSAGE") {
    let newMessage = {
      message: state.newMessageText,
    };
    stateCopy.messagesData = [...state.messagesData];
    stateCopy.messagesData.push(newMessage);
    stateCopy.newMessageText = "";
  } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
    stateCopy.newMessageText = action.newTextMessage;
  }
  return stateCopy;
};

export const addMessageActionCreator = () => {
  return {
    type: "ADD-MESSAGE",
  };
};

export const changeMessageTextActionCreator = (text) => {
  return {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newTextMessage: text,
  };
};
export default dialogsReducer;
