const SelectFilter = ({ label, options, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-textSecondary">{label}</p>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-gray-200 px-3 py-2 bg-white"
      >
        <option value="">الكل</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;
