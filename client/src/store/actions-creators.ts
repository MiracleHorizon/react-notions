import * as UserActionsCreators from 'store/slices/user'
import * as AppActionsCreators from 'store/slices/app'
import * as NotionsActionsCreators from 'store/slices/notions'
import * as TasksListsActionsCreators from 'store/slices/tasksLists'
import * as ModalsActionsCreators from 'store/slices/modals'
import * as AlertsActionsCreators from 'store/slices/alerts'

export default {
  ...UserActionsCreators,
  ...AppActionsCreators,
  ...NotionsActionsCreators,
  ...TasksListsActionsCreators,
  ...ModalsActionsCreators,
  ...AlertsActionsCreators
}
