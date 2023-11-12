import {withHook} from '../../../../config/hooks';
import MoreView from './more.view';
import {useMore} from './useMore';

const More = withHook(useMore, MoreView);

export default More;
