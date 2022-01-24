export type Meta = {
  tagName: string,
  props: object
  extendedConfig?: ExtendedTextInputConfig
};

export type blockProperty = Record<string, any>;

export type ExtendedTextInputConfig = {
  containerConfig?: Record<string, any>,
  labelConfig?: Record<string, any>,
  validateConfig?: Record<string, any>
}