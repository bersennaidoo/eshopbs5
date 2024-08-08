import React, { FC } from "react";

interface ICategoryListProps {
  selected: string;
  categories: string[];
  selectCategory: (category: string) => void;
}

const CategoryList: FC<ICategoryListProps> = (props: ICategoryListProps) => {
  return (
    <div className="d-grid gap-2">
      {["All", ...props.categories].map((c) => {
        let btnClass = props.selected === c ? "btn-primary" : "btn-secondary";
        return (
          <button
            key={c}
            className={`btn btn-block ${btnClass}`}
            onClick={() => props.selectCategory(c)}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryList;
