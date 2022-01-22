export class RequestMeta {
  constructor(
    readonly ipaddress: string = "127.0.0.1",
    readonly language: string = "en-GB,en;q=0.5",
    readonly software: string =
      `Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Chromium/97.0`,
  ) {}
}
