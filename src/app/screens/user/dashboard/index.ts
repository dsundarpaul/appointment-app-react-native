import {withHook} from '../../../../config/hooks';
import DashbaordView from './dashbaord.view';
import {useDashboard} from './useDashbard';

const Dashboard = withHook(useDashboard, DashbaordView);

export default Dashboard;
