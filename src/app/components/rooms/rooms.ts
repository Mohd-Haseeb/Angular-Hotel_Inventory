export interface Rooms {
    totalRooms : number;
    availableRooms : number;
    bookedRooms : number
};


export interface RoomList {
    roomNumber : number;
    roomType : string;
    price : number;
    photo : string;
    checkInTime : Date;
    checkOutTime : Date;
}