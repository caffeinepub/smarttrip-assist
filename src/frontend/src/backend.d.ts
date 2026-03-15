import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Inquiry {
    id: bigint;
    subject: Subject;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface InquiryData {
    subject: Subject;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export enum Subject {
    holidayPackage = "holidayPackage",
    visaAssistance = "visaAssistance",
    flightReservation = "flightReservation",
    hotelBooking = "hotelBooking",
    general = "general"
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    getInquiryCount(): Promise<bigint>;
    submitInquiry(data: InquiryData): Promise<bigint>;
}
