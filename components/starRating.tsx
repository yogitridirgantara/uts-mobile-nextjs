import { FaStar } from "react-icons/fa";

export default function StarRating({
	value,
	onChange,
	readOnly = false,
}: {
	value: number;
	onChange?: (rating: number) => void;
	readOnly?: boolean;
}) {
	const handleClick = (index: number) => {
		if (!readOnly && onChange) {
			onChange(index);
		}
	};

	return (
		<div className="flex space-x-1">
			{[1, 2, 3, 4, 5].map((index) => (
				<FaStar
					key={index}
					size={20}
					className={`transition-colors ${
						index <= value
							? "text-yellow-400"
							: "text-gray-400"
					} ${readOnly ? "cursor-default" : "cursor-pointer"}`}
					onClick={() => handleClick(index)}
				/>
			))}
		</div>
	);
}
