import { IDataRibbon, IProfileFormFields, ITransactionCard } from "@/modules";
import { months } from "@/helper/Util";

export const mockDataRibbon: IDataRibbon[] = [
  {
    title: "Total Sales",
    value: "462",
    description:
      "The totals of all DataSoft products in the current financial year",
  },
  {
    title: "Total Value",
    value: "$25,732.53",
    description: "The total sales of the current financial year",
  },
  {
    title: "Avg. Order Value",
    value: "$159.30",
    description:
      "The average order value for all sales this current financial year",
  },
  {
    title: "Conversion rate",
    value: "0.61%",
    description: "How many pitches become sales",
  },
];

export const mockTransactionCard: ITransactionCard[] = [
  {
    title: "Total Products",
    value: "1.275",
    changeValue: "428.7%",
  },
  {
    title: "Buy-to-detail",
    value: "4.40%",
    changeValue: "899.4%",
  },
  {
    title: "Refunds",
    value: "1",
    changeValue: "2.2",
  },
];

export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: "",
      data: [65, 59, 80, 81, 56, 55, 60, 49, 112, 72, 52, 43],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export const doughnutChartData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [300, 50, 100],
      backgroundColor: ["rgb(255,137,168)", "rgb(178,3,106)", "rgb(165,7,42)"],
      hoverOffset: 4,
    },
  ],
};

export const profileFormFields: IProfileFormFields[] = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    required: true,
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    required: true,
  },
  { label: "Email", name: "email", type: "email", required: true },
  {
    label: "Password",
    name: "password",
    type: "password",
    required: true,
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    required: true,
  },
  {
    label: "Receive sales analytics emails",
    name: "receiveEmails",
    type: "checkbox",
    required: false,
  },
];
