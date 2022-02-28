export const backButtonContainerTemplate = "<div {{ classes backButton }}></div>";

export const avatarWrapperTemplate = "<div {{ classes newAvatar img }}></div>";

export const contentWrapperTemplate =  "<div {{ classes profileForm changePassForm nameLabel avatarWrapper }}></div>";;

export const profileContainerTemplate = "<div {{ classes contentWrapper }}></div>";

export const profileFormTemplate = "<form {{ classes actionsContainer phone displayName secondName firstName login email }}></form>";

export const changePassFormTemplate = "<form {{ classes actionsContainer newPassConfirmation newPass oldPass }}></form>";

export const actionsContainerTemplate = "<div {{ classes exitButton changePassButton changeDataButton saveDataButton " +
  "  }}></div>";

export const changeAvatarTemplate = "<form {{ classes changeAvatarButton changeAvatarLink changeAvatarTitle }}></form>";

export const template = "<div {{ classes profileContainer backBtnContainer }}></div>";
