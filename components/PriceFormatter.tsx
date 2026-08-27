import { twMerge } from "tailwind-merge";

interface Props {
  amount: number | undefined;
  className?: string;
}

const PriceFormatter = ({ amount, className }: Props) => {
  if (amount === undefined || amount === null || Number.isNaN(Number(amount))) {
    return (
      <span className={twMerge("text-sm font-semibold text-darkColor", className)}>
        -
      </span>
    );
  }

  const formattedPrice = Number(amount).toLocaleString("en-IN", {
    currency: "INR",
    style: "currency",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <span className={twMerge("text-sm font-semibold text-darkColor", className)}>
      {formattedPrice}
    </span>
  );
};

export default PriceFormatter;
