import { createAction } from '@reduxjs/toolkit'

// store the api action in one place to make consistant naming convention
export const apiCallBegan = createAction('api/callBegan')
export const apiCallSuccess = createAction('api/callSuccess')
export const apiCallFailed = createAction('api/callFailed')
