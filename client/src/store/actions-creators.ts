import * as AuthActionsCreators from 'store/slices/auth'
import * as AppActionsCreators from 'store/slices/app'
import * as PagesActionsCreators from 'store/slices/pages'
import * as TasksListsActionsCreators from 'store/slices/tasksLists'
import * as ModalsActionsCreators from 'store/slices/modals'
import * as AlertsActionsCreators from 'store/slices/alerts'

export default {
  ...AuthActionsCreators,
  ...AppActionsCreators,
  ...PagesActionsCreators,
  ...TasksListsActionsCreators,
  ...ModalsActionsCreators,
  ...AlertsActionsCreators
}
