import { IsNumber } from "class-validator";

export class CommonRequestModel {
    @IsNumber({}, { message: "Latitude must be a number" })
    latitude!: number;

    @IsNumber({}, { message: "Longitude must be a number" })
    longitude!: number;
}