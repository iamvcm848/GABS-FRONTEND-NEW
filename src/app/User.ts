import { AppointmentEntity } from "./AppointmentEntity";
import { AppointmentCalendar } from "./AppointmentCalendar";

export class User{
    private _userID:number;
    private _userName:string;
    private _mobileNumber:string;
    private _DoB:Date;
    private _email:string;
    private _isAdmin:boolean;
    private _listMyBookedAppointmentEntries:AppointmentEntity[];
    private _listMyAppointmentCalendars:AppointmentCalendar[];

    constructor(userID:number, userName:string, mobileNumber:string,DoB:Date,
            email:string, isAdmin:boolean, listMyBookedAppointmentEntries:AppointmentEntity[],
            listMyAppointmentCalendars:AppointmentCalendar[]){
        this._userID = userID;
        this._userName = userName;
        this._mobileNumber = mobileNumber;
        this._DoB = DoB;
        this._email = email;
        this._isAdmin = isAdmin;
        this._listMyBookedAppointmentEntries = listMyBookedAppointmentEntries;
        this._listMyAppointmentCalendars = listMyAppointmentCalendars;
}   
    public getuserID():number {
        return this._userID;
    }
    public setuserID(aeID:number) {
        this._userID = aeID;
    }
    public getUserName():string {
        return this._userName;
    }
    public setUserName(ownerid:string) {
        this._userName = ownerid;
    }
    public getMobileNumber():string {
        return this._mobileNumber;
    }
    public setMobileNumber(mobileNumber:string) {
        this._mobileNumber = mobileNumber;
    }
    public getDoB():Date {
        return this._DoB;
    }
    public setDoB(date:Date) {
        this._DoB = date;
    }
    public getEmail():string {
        return this._email;
    }
    public setEmail(email:string) {
        this._email = email;
    }
    public getIsAdmin():boolean {
        return this._isAdmin;
    }
    public setIsAdmin(isAdmin:boolean) {
        this._isAdmin = isAdmin;
    }

    public getListMyBookedAppointmentEntries():AppointmentEntity[]
    {
        return this._listMyBookedAppointmentEntries;
    }
    public setListMyBookedAppointmentEntries(listAppointmentEntries:AppointmentEntity[])
    {
        this._listMyBookedAppointmentEntries = listAppointmentEntries;
    }

    public getListMyAppointmentCalendars():AppointmentCalendar[]
    {
        return this._listMyAppointmentCalendars;
    }
    public setListMyAppointmentCalendars(listMyAppointmentCalendars:AppointmentCalendar[])
    {
        this._listMyAppointmentCalendars = listMyAppointmentCalendars;
    }
}