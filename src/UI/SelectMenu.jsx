import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

export function SelectMenu({ data, dataValue, setDataValue }) {
  // const dataValues = [...new Set(data.map((val) => val.id))];
  return (
    <NativeSelect
      className="bg-white h-12.75 w-38.25 rounded-lg p-2.5 "
      value={dataValue}
      onChange={(e) => setDataValue(e.target.value)}
    >
      <NativeSelectOption className="bg-white" value="all">
        All
      </NativeSelectOption>

      {data?.map((val) => (
        <NativeSelectOption
          className="bg-white"
          key={val.value}
          value={val.value}
        >
          {val.name}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  );
}
