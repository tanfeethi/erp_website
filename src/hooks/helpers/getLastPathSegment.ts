export const getLastPathSegment = (pathname: string) =>
  pathname.split("/").filter(Boolean).pop() || "home";
