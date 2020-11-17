export const reverse = (str: string): string => {
  if (str.length <= 1) return str;
  return `${str[str.length - 1]}${reverse(str.slice(0, -1))}`;
};

let res = reverse("awesome");
console.log(res);
