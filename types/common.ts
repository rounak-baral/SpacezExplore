import { FormEvent } from "react";

export type Guests = {
  noOfAdults: number;
  noOfChildren: number;
  noOfPets: number;
  noOfTotalGuests: number;
};

export type SearchDataType = {
  guests: Guests;
  checkInDate: null | Date;
  checkOutDate: null | Date;
  city: string;
};

export type TextsPropType = {
  children: React.ReactNode;
  className: string;
};

export type ButtonsPropType = {
  children: React.ReactNode;
  link: string;
  className?: string;
  onClick?: (event: FormEvent) => void;
};

export interface SpecialPrice {
  roomIds: string[];
  id: string;
  specialPrice: number;
  startDate: string;
  endDate: string;
  createdAt: string;
}

export interface SpecialPriceForRoom {
  specialPrice: number;
  roomId: string;
}

export interface HighlightType {
  icon: string;
  title: string;
  description: string;
}

export interface ReviewType {
  reply: null | { replyDescription: string; replyDate: string };
  reviewDescription: string;
  rating: number;
  reviewDate: string;
  reviewerName: string;
  reviewerImage: null | string;
  reviewPlatform: string;
}

export interface CategoryType {
  selectedIcon: string;
  icon: string;
  category: string;
}

export interface TagDataType {
  tagId: string;
  tagName: string;
  tagIcon: string;
}

export interface TagAndProperties {
  tag: {
    tagId: string;
    tagName: string;
    tagIcon: string;
    properties: string[];
  };
}

export interface BookingData {
  noOfPeople: number;
  bookedRooms: string[];
  checkInDate: string;
  checkOutDate: string;
  propertyId: string;
  propertyName: string;
  price: number;
  noOfDays: number;
  id: string;
  noOfAdults: number;
  noOfChildren: number;
  noOfPets: number;
  roomNames: string[];
}
