export function formItemConfig() {
  return [
    {
      name: "oldPassword",
      type: "password",
      value: "Старый пароль",
      classes: "profile-text-input",
      labelConfig: {
        tag: "div",
        textContent: "Старый пароль",
        classes: "profile-input-label"
      }
    },
    {
      name: "newPassword",
      type: "password",
      value: "Новый пароль",
      classes: "profile-text-input",
      labelConfig: {
        tag: "div",
        textContent: "Новый пароль",
        classes: "profile-input-label"
      }
    },
    {
      name: "newPasswordConfirmation",
      type: "password",
      value: "Повторите пароль",
      classes: "profile-text-input",
      labelConfig: {
        tag: "div",
        textContent: "Повторите пароль",
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
      classes: "sign-btn action-container__save-pass-btn"
    }
  ];
}
