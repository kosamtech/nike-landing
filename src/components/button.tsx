import { FC } from "react";

interface ButtonProps {
    label: string;
    iconURL?: string;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    fullWidth?: string;
}

const Button: FC<ButtonProps> = ({
    label,
    backgroundColor,
    borderColor,
    fullWidth,
    iconURL,
    textColor,
}) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-red text-white border-coral-red"} rounded-full ${fullWidth && "w-full"}`}
        >
            {label}{" "}
            {iconURL && (
                <img
                    src={iconURL}
                    alt="arrow-right icon"
                    className="ml-2 rounded-full bg-white w-5 h-5"
                />
            )}
        </button>
    );
};

export default Button;
