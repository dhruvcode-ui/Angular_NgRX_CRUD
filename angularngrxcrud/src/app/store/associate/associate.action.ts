import { createAction, props } from "@ngrx/store";
import { Associates } from "../model/associate.model";

export const LOAD_ASSOCIATE='[associate Page]'
export const LOAD_ASSOCIATE_SUCCESS='[associate Page] load asscoiate success'
export const LOAD_ASSOCIATE_FAIL='[associate Page] load asscoiate fail'
export const ADD_ASSOCIATE='[associate Page]add associate'
export const ADD_ASSOCIATE_SUCCESS='[associate Page] add asscoiate success'

export const UPDATE_ASSOCIATE='[associate Page]update associate'
export const UPDATE_ASSOCIATE_SUCCESS='[associate Page] update asscoiate success'

export const DELETE_ASSOCIATE='[associate Page]delete associate'
export const DELETE_ASSOCIATE_SUCCESS='[associate Page] delete asscoiate success'

export const GET_ASSOCIATE='[associate Page]get associate'
export const GET_ASSOCIATE_SUCCESS='[associate Page] get asscoiate success'

export const OPEN_POPUP='[associate Page] open popup'


export const loadassociate=createAction(LOAD_ASSOCIATE)
export const loadassociatesuccess=createAction(LOAD_ASSOCIATE_SUCCESS,props<{list:Associates[]}>())
export const loadassociatefail=createAction(LOAD_ASSOCIATE_FAIL,props<{errormessage:string}>())

export const addassociate=createAction(ADD_ASSOCIATE,props<{inputdata:Associates,length:number}>())
export const addassociatesuccess=createAction(ADD_ASSOCIATE_SUCCESS,props<{inputdata:Associates}>())

export const updateassociate=createAction(UPDATE_ASSOCIATE,props<{inputdata:Associates,length:number}>())
export const updateassociatesuccess=createAction(UPDATE_ASSOCIATE_SUCCESS,props<{inputdata:Associates}>())

export const deleteassociate=createAction(DELETE_ASSOCIATE,props<{code:number}>())
export const deleteassociatesuccess=createAction(DELETE_ASSOCIATE_SUCCESS,props<{code:number}>())


export const getassociate=createAction(GET_ASSOCIATE,props<{id:number}>())
export const getassociatesuccess=createAction(GET_ASSOCIATE_SUCCESS,props<{obj:Associates}>())


export const openpopup=createAction(OPEN_POPUP)





