type ButtonTypeProps = {
  [key: string]: string;
};
type ButtonSizeProps = {
  [key: string]: string;
};

export const ButtonType: ButtonTypeProps = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
  secondary: "bg-orange-500 hover:bg-blue-700 text-white font-bold rounded",
  basic: "bg-green-500 hover:bg-green-400 text-white font-bold rounded",
  delete: "bg-red-300 hover:bg-red-500 text-white font-bold rounded",
};

export const ButtonSize: ButtonSizeProps = {
  sm: "py-2 px-4 text-xs",
  lg: "py-3 px-6 text-lg",
};
