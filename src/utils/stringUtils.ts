type ClassValue =
  | string
  | false
  | null
  | undefined
  | Record<string, boolean | null | undefined>;

export function cn(...args: ClassValue[]) {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (typeof arg === "string" && arg !== "") {
      classes.push(arg);
    } else if (arg && typeof arg === "object") {
      Object.entries(arg).forEach(([key, value]) => {
        if (value) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(" ");
}

export { cn as className };
