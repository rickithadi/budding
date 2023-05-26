import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Timestamp } from "firebase/firestore";

export type FirestoreLobby = {
  id: string;
  data: Lobby;
};
export type Lobby = {
  id: string;
  players: Player[];
  venue: Venue;
  details: Details;
};
export type Player = {
  userId: string;
  paid: boolean;
};
export type Venue = {
  address: string;
  title: string;
  gMapsLink: string;
  id: string;
};
export type Details = {
  createdAt: Timestamp;
  description: string;
  title: string;
  category: Category;
  durationInMinutes: number;
  price: number;
  playerCapacity: number;
  eventDate: Timestamp;
};
export enum Category {
  scrub = "pemula",
  intermediate = "intermediate",
  advanced = "expert",
}
export type RootStackParamList = {
  Lobby: { lobbyId: string };
  Home: any;
};
export type StackNavProps = NativeStackScreenProps<RootStackParamList, "Lobby">;
