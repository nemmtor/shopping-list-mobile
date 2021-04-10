type PaddingKey =
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft';

type Padding = {
  [key in PaddingKey]: number;
};

export const getPadding = (
  a: number,
  b?: number,
  c?: number,
  d?: number,
): Padding => ({
  paddingTop: a,
  paddingRight: b ? b : a,
  paddingBottom: c ? c : a,
  paddingLeft: d ? d : b ? b : a,
});
