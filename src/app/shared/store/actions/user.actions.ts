import { Action } from '@ngrx/store';

import { User } from '../../models/user.model';


export enum EUserActions {
    GetAccess = '[User] Get Access',
    GetAccessSuccess = '[User] Get Access Success'
}

export class GetAccess implements Action {
    public readonly type = EUserActions.GetAccess;
    constructor(public payload: {email, password}) {}
}

export class GetAccessSuccess implements Action {
    public readonly type = EUserActions.GetAccessSuccess;
    constructor(public payload: User[]) {}
}

export type UserActions = GetAccess | GetAccessSuccess;