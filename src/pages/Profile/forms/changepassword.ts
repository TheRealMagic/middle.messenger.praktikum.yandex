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
        name: "oldPassword",
        type: "password",
        value: "Старый пароль",
        classes: getDefaultInputClasses()
      },
      extendedConfig: {
        labelConfig: {
          textContent: "Старый пароль",
          classes: getDefaultInputLabelClasses(),
        }
      }
    },
    {
      props: {
        name: "newPassword",
        type: "password",
        value: "Новый пароль",
        classes: getDefaultInputClasses()
      },
      extendedConfig: {
        labelConfig: {
          textContent: "Новый пароль",
          classes: getDefaultInputLabelClasses(),
        }
      }
    },
    {
      props: {
        name: "newPasswordConfirmation",
        type: "password",
        value: "Повторите пароль",
        classes: getDefaultInputClasses()
      },
      extendedConfig: {
        labelConfig: {
          textContent: "Повторите пароль",
          classes: getDefaultInputLabelClasses(),
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
        "action-container__save-pass-btn"
      ]
    }
  ];
}
