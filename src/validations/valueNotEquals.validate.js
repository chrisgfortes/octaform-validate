import Octaform from '../';

Octaform.validator.add('valueNotEquals', (value, element, param) => {
  return param !== value;
}, 'Value must not be equal {0}');