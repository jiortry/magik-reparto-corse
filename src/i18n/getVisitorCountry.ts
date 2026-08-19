import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestHeader, setResponseHeader } from "@tanstack/react-start/server";

type CfRequest = Request & { cf?: { country?: string } };

function headerCountry(req: Request): string {
  const names = ["cf-ipcountry", "x-vercel-ip-country", "cloudfront-viewer-country", "x-country-code"];
  for (const name of names) {
    const v = req.headers.get(name);
    if (v) return v;
  }
  return "";
}

export const getVisitorCountry = createServerFn({ method: "GET" }).handler(async () => {
  setResponseHeader("cache-control", "private, no-store");
  const req = getRequest() as CfRequest;
  const country = (req.cf?.country || headerCountry(req)).toUpperCase();
  const acceptLanguage = req.headers.get("accept-language") ?? getRequestHeader("accept-language") ?? "";
  return { country, acceptLanguage };
});
