export interface IDataRibbon {
  title: string;
  value: string;
  description: string;
}

export interface ITransactionCard extends Omit<IDataRibbon, "description"> {
  changeValue: string;
}

export interface IProfileFormFields {
  name: string;
  type: "text" | "email" | "password" | "checkbox";
  label: string;
  required: boolean;
}
