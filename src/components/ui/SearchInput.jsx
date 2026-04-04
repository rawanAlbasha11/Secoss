import { FaSearch } from 'react-icons/fa'

const SearchInput = ({ value, onChange, placeholder = "ابحث عن محاضرة..." }) => {
  return (
    <div className="relative w-full max-w-md">
      {/* أيقونة البحث */}
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
        <FaSearch />
      </span>

      {/* input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-gray-300
          pl-10
          pr-4
          py-2.5
          text-gray-700
          placeholder-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-emerald-300
          focus:border-emerald-500
          transition
        "
      />
    </div>
  )
}

export default SearchInput