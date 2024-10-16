export interface IRole { 
    roleID: number,
    role: string
}

export interface IDesignation {
    designationID: number,
    designation: string
}

export interface APIResponseModel {
    message: string,
    result: boolean,
    data: any
}