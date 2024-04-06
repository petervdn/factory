import { type ReactElement, useCallback } from "react";

type Props = {
  value: string;
  options: Array<{ label: string; value: string }>;
  onChange(value: string): void;
};

export function Select({
  value,
  onChange: propsOnChange,
  options,
}: Props): ReactElement {
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      propsOnChange(event.target.value);
    },
    [propsOnChange],
  );
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value}>{option.label}</option>
      ))}
    </select>
  );
}
