import './style.scss';

import autoInit from '@material/auto-init';

import { MDCCheckbox } from '@material/checkbox';
import { MDCTextField } from '@material/textfield';

autoInit.register('MDCCheckbox', MDCCheckbox);
autoInit.register('MDCTextField', MDCTextField);
autoInit();