interface LineInputProps {
  placeholder?: string;
  input?: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function LineInput({
  placeholder,
  input,
  setInput,
}: LineInputProps) {
  return (
    <input
      className="w-full px-2 border-2 border-j-gray rounded-xl outline-none focus:border-j-navy"
      type="text"
      placeholder={placeholder}
      onChange={(e) => {
        setInput(e.currentTarget.value);
      }}
    />
  );
}
