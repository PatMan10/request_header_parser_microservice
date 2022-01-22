// urls
export enum URLPlaceHolder {
  DATE = ":date?",
}

export class URLs {
  static readonly WILD = "*";
  static readonly INDEX = "/";
  static readonly GET_TIMESTAMP = `/api/${URLPlaceHolder.DATE}`;
  static readonly getTimestamp = (date?: string) =>
    URLs.GET_TIMESTAMP.replace(URLPlaceHolder.DATE, date || "");
}

export class ErrorMessages {
  static readonly INTERNAL_SERVER_ERROR =
    "Uh oh, some unexpected error ocurred...";
  static readonly INVALID_DATE = "Invalid Date";
}

// logger
class Logger {
  info(...data: unknown[]) {
    console.info(...data);
  }
  warn(...data: unknown[]) {
    console.warn(...data);
  }
  error(...data: unknown[]) {
    console.error(...data);
  }
}
export const logger = new Logger();
