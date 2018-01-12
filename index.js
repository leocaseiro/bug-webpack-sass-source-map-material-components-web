import './style.scss';

import autoInit from '@material/auto-init';
import * as checkbox from '@material/checkbox';

autoInit.register('MDCCheckbox', checkbox.MDCCheckbox);
autoInit();