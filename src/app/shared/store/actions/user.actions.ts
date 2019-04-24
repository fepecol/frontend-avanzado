import { Action } from '@ngrx/store';

import { User } from '../../models/user.model';


export enum EUserActions {
    GetAccess = '[User] Get Access',
    GetAccessSuccess = '[User] Get Access Success',
    GetAccessError = '[User] Get Access Error'
}

export class GetAccess implements Action {
    public readonly type = EUserActions.GetAccess;
    constructor(public payload: {email: string, password: string}) {}
}

export class GetAccessSuccess implements Action {
    public readonly type = EUserActions.GetAccessSuccess;
    constructor(public payload: User) {}
}

export class GetAccessError implements Action {
    public readonly type = EUserActions.GetAccessError;
}

export type UserActions = GetAccess | GetAccessSuccess | GetAccessError;