// urls

export enum HeaderKeys {
  LANGUAGE = "accept-language",
  SOFTWARE = "user-agent",
}

export class URLs {
  static readonly WILD = "*";
  static readonly INDEX = "/";
  static readonly GET_HEADER_INFO = `/api/whoami`;
}

export class ErrorMessages {
  static readonly INTERNAL_SERVER_ERROR =
    "Uh oh, some unexpected error ocurred...";
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
