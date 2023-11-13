export const ru = {
  general: {
    exit: "выйти",
    greeting: "Здравствуйте, {{name}}!",
    notFound: "Ничего не найдено",
    save: "Сохранить",
    undefined: "Неизвестно"
  },
  pages: {
    users: "Пользователи",
    news: "Новости",
    collections: "Коллекции",
    exhibitions: "Выставки",
    tickets: "Билеты"
  },
  server: {
    error: "Что-то пошло не так!"
  },
  form: {
    error: "Ошибка",
    pickImage: {
      description: "Перетащите изображение сюда или загрузите по кнопке",
      button: "Выберите изображение",
    }
  },
  login: {
    title: "Вход",
    email: "E-mail",
    emailPlaceholder: "Введите e-mail",
    password: "Пароль",
    passwordPlaceholder: "Введите пароль",
    invalidEmailOrPassword: "Неверный email и/или пароль"
  },
  users: {
    search: "Поиск по пользователям",
    title: "Пользователи",
    name: "Имя",
    email: "E-mail",
    successDelete: "Пользователь успешно удален",
    errorDelete: "Не удалось удалить пользователя"
  },
  news: {
    search: "Поиск по новостям",
    title: "Новости",
    preview: "Изображение",
    itemTitle: "Заголовок",
    successDelete: "Новость успешно удалена",
    errorDelete: "Не удалось удалить новость",
    successCreate: "Новость успешно создана",
    errorCreate: "Не удалось создать новость",
    successUpdate: "Новость успешно обновлена",
    errorUpdate: "Не удалось обновить новость",
    addNew: "Создать новость",
    form: {
      title: "Заголовок",
      titlePlaceholder: "Введите заголовок",
      link: "Ссылка на статью",
      linkPlaceholder: "Вставьте ссылку на статью",
      pickImageDescription: "Перетащите изображение сюда или загрузите по кнопке",
      pickImage: "Выберите изображение",
    }
  },
  exhibitions: {
    search: "Поиск по выставкам",
    title: "Выставки",
    preview: "Изображение",
    itemTitle: "Название",
    address: "Адрес",
    price: "Цена билета",
    priceValue: "{{value}} ₽",
    successDelete: "Выставка успешно удалена",
    errorDelete: "Не удалось удалить выставку",
    successCreate: "Выставка успешно создана",
    errorCreate: "Не удалось создать выставку",
    successUpdate: "Выставка успешно обновлена",
    errorUpdate: "Не удалось обновить выставку",
    addNew: "Создать выставку",
    form: {
      title: "Название",
      titlePlaceholder: "Введите название",
      description: "Описание",
      descriptionPlaceholder: "Введите описание",
      address: "Адрес",
      addressPlaceholder: "Введите адрес",
      price: "Цена билета (₽)",
      pricePlaceholder: "Введите цену за 1 билет",
      pickImageDescription: "Перетащите изображение сюда или загрузите по кнопке (Максимум 3)",
      pickImage: "Выберите изображение",
    }
  },
  tickets: {
    title: "Билеты",
    exhibition: "Выставка",
    user: "Пользователь",
    dateAndTime: "Дата и время",
    dateAndTimeValues: "{{date}} в {{time}}",
    filters: {
      exhibition: "Выберите выставку",
      reset: "Сбросить"
    },
    successDelete: "Билет успешно удален",
    errorDelete: "Не удалось удалить билет",
  },
  collections: {
    title: "Коллекции",
    search: "Поиск по коллекциям",
    addNew: "Создать коллекцию",
    name: "Название",
    successDelete: "Коллекция успешно удалена",
    errorDelete: "Не удалось удалить коллекцию",
    successCreate: "Коллекция успешно создана",
    errorCreate: "Не удалось создать коллекцию",
    successUpdate: "Коллекция успешно обновлена",
    errorUpdate: "Не удалось обновить коллекцию",
    form: {
      name: "Название",
      namePlaceholder: "Введите название",
    },
    items: {
      preview: "Изображение",
      name: "Название",
      author: "Автор",
      year: "Год создания",
      successDelete: "Элемент коллекции успешно удален",
      errorDelete: "Не удалось удалить элемент коллекции",
      successCreate: "Элемент коллекции успешно создан",
      errorCreate: "Не удалось создать элемент коллекции",
      successUpdate: "Элемент коллекции успешно обновлен",
      errorUpdate: "Не удалось обновить элемент коллекции",
    }
  },
  errors: {
    required: "Обязательное поле",
    invalidEmail: "Некорректный e-mail",
    invalidPassword: "Некорректный пароль",
    minPasswordLength: "Пароль должен содержать минимум {{value}} символов",
    maxPasswordLength: "Пароль должен содержать максимум {{value}} символов",
    maxLength: "Значение должно содержать максимум {{value}} символов",
    minPrice: "Значение должно быть больше 0",
    news: {
      invalidTitle: "Неккоректный заголовок",
      invalidLink: "Неккоректная ссылка",
    },
    exhibitions: {
      invalidTitle: "Неккоректное название",
      invalidDescription: "Неккоректное описание",
      invalidAddress: "Неккоректный адрес",
    },
    uploadImage: "Не удалось загрузить изображение",
    deleteImage: "Не удалось удалить изображение"
  }
}