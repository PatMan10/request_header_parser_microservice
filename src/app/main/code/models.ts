import { ErrorMessages } from "./utils.ts";

export class Timestamp {
  readonly unix: number;
  readonly utc: string;

  constructor(date: string = Date.now().toString()) {
    const dateObj = new Date(
      /^\d+$/.test(date) ? new Number(date).valueOf() : date,
    );
    if (dateObj.toUTCString() === ErrorMessages.INVALID_DATE) {
      throw new Error(dateObj.toUTCString());
    }
    this.unix = Math.floor(dateObj.getTime());
    this.utc = dateObj.toUTCString();
  }
}
