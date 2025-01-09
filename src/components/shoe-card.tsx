import { FC } from "react";

interface ShoeCardProps {
    shoeObj: {
        bigShoe: string;
        thumbnail: string;
    };
    changeBigShoeImage(shoe: string): void;
    bigShoeImg: string;
}

const ShoeCard: FC<ShoeCardProps> = ({
    bigShoeImg,
    changeBigShoeImage,
    shoeObj,
}) => {
    const handleClick = () => {
        if (bigShoeImg !== shoeObj.bigShoe) {
            changeBigShoeImage(shoeObj.bigShoe);
        }
    };
    return (
        <div
            className={`border-2 rounded-xl ${bigShoeImg === shoeObj.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={shoeObj.thumbnail}
                    alt="shoe collection"
                    width={127}
                    height={103.34}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default ShoeCard;
