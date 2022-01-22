export function formItemConfig() {
  return [
    {
      disabled: "disabled",
      name: "email",
      value: "Почта",
      classes: "profile-text-input",
      labelConfig: {
        tag: "div",
        textContent: "Почта",
        classes: "profile-input-label"
      }
    },
    {
      disabled: "disabled",
      name: "login",
      value: "Логин",
      classes: "profile-text-input",
      labelConfig: {
        tag: "div",
        textContent: "Логин",
        classes: "profile-input-label"
      }
    },
    {
      disabled: "disabled",
      name: "first_name",
      value: "Имя",
      classes: "profile-text-input",
      labelConfig: {
        tag: "div",
        textContent: "Имя",
        classes: "profile-input-label"
      }
    },
    {
      disabled: "disabled",
      name: "second_name",
      value: "Фамилия",
      classes: "profile-text-input",
      labelConfig: {
        tag: "div",
        textContent: "Фамилия",
        classes: "profile-input-label"
      }
    },
    {
      disabled: "disabled",
      name: "display_name",
      value: "Имя в чате",
      classes: "profile-text-input",
      labelConfig: {
        tag: "div",
        textContent: "Имя в чате",
        classes: "profile-input-label"
      }
    },
    {
      disabled: "disabled",
      name: "phone",
      value: "Телефон",
      classes: "profile-text-input",
      labelConfig: {
        tag: "div",
        textContent: "Телефон",
        classes: "profile-input-label"
      }
    }
  ];
}


export function actionsConfig() {
  return [
    {
      type: "button",
      value: "Изменить данные",
      classes: "main-profile-btn action-container__change-data-btn"
    },
    {
      type: "button",
      value: "Изменить пароль",
      classes: "main-profile-btn action-container__change-password-btn"
    },
    {
      type: "button",
      value: "Выйти",
      classes: "main-profile-btn action-container__exit-btn"
    }
  ];
}
