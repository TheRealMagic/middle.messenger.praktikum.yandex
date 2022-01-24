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
      value: "Сохранить",
      classes: [
        "base-input",
        "base-input-button",
        "sign-btn",
        "action-container__save-data-btn"
      ]
    }
  ];
}
