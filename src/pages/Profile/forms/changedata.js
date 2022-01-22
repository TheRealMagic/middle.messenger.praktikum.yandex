export function formItemConfig() {
  return [
    {
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
      value: "Сохранить",
      classes: "sign-btn action-container__save-data-btn"
    }
  ];
}
