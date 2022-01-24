function getDefaultInputClasses(): string[] {
  return [
    "base-input",
    "base-input-text",
    "profile-text-input"
  ];
}

function getDefaultInputLabelClasses(): string[] {
  return ["profile-input-label"];
}

export function formItemConfig() {
  return [
    {
      props: {
        disabled: true,
        name: "email",
        value: "Почта",
        classes: getDefaultInputClasses()
      },
      extendedConfig: {
        labelConfig: {
          textContent: "Почта",
          classes: getDefaultInputLabelClasses()
        }
      }
    },
    {
      props: {
        disabled: true,
        name: "login",
        value: "Логин",
        classes: getDefaultInputClasses()
      },
      extendedConfig: {
        labelConfig: {
          textContent: "Логин",
          classes: getDefaultInputLabelClasses()
        }
      }
    },
    {
      props: {
        disabled: true,
        name: "first_name",
        value: "Имя",
        classes: getDefaultInputClasses()
      },
      extendedConfig: {
        labelConfig: {
          textContent: "Имя",
          classes: getDefaultInputLabelClasses()
        }
      }
    },
    {
      props: {
        disabled: true,
        name: "second_name",
        value: "Фамилия",
        classes: getDefaultInputClasses()
      },
      extendedConfig: {
        labelConfig: {
          textContent: "Фамилия",
          classes: getDefaultInputLabelClasses()
        }
      }
    },
    {
      props: {
        disabled: true,
        name: "display_name",
        value: "Имя в чате",
        classes: getDefaultInputClasses()
      },
      extendedConfig: {
        labelConfig: {
          textContent: "Имя в чате",
          classes: getDefaultInputLabelClasses()
        }
      }
    },
    {
      props: {
        disabled: true,
        name: "phone",
        value: "Телефон",
        classes: getDefaultInputClasses()
      },
      extendedConfig: {
        labelConfig: {
          textContent: "Телефон",
          classes: getDefaultInputLabelClasses()
        }
      }
    }
  ];
}


export function actionsConfig() {
  return [
    {
      type: "button",
      value: "Изменить данные",
      classes: [
        "base-input",
        "base-input-button",
        "main-profile-btn",
        "action-container__change-data-btn"
      ]
    },
    {
      type: "button",
      value: "Изменить пароль",
      classes: [
        "base-input",
        "base-input-button",
        "main-profile-btn",
        "action-container__change-password-btn"
      ]
    },
    {
      type: "button",
      value: "Выйти",
      classes: [
        "base-input",
        "base-input-button",
        "main-profile-btn",
        "action-container__exit-btn"
      ]
    }
  ];
}
