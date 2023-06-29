import mainReducer from "./mainReducer";
import dialogsReducer from "./dialogsReducer";

const store = {
  _callSubscriber() {
    console.log(" state is changed");
  },
  _state: {
    main: {
      postsData: [
        {
          id: 1,
          message: "Приветикс",
          likePost: 0,
        },
        {
          id: 2,
          message: "Здарова вуй",
          likePost: 30,
        },
        {
          id: 3,
          message: "Здарова Стээээс",
          likePost: 777,
        },
      ],
      newPostText: "",
    },
    messagespage: {
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
          name: "Ниk",
          img: "https://coolsen.ru/wp-content/uploads/2021/06/130-4.jpg",
        },
        {
          id: 8,
          name: "vui",
          img: "https://coolsen.ru/wp-content/uploads/2021/06/130-4.jpg",
        },
      ],
      newMessageText: "gggggggggggggggggg",
    },
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    //{type:'ADD-POST'}
    this._state.main = mainReducer(this._state.main, action);
    this._state.messagespage = dialogsReducer(this._state.messagespage, action);
    this._callSubscriber(this._state);
  },
};
export const addPostActionCreator = () => {
  return {
    type: "ADD-POST",
  };
};
export const changeTextActionCreator = (text) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText: text,
  };
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
export default store;
