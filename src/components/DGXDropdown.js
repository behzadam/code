import React, { useMemo, useState } from "react";

/* eslint-disable import/no-anonymous-default-export */
export default function Dropdown({
  list,
  onChange,
  value,
  defaultText,
  renderItem,
}) {
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState(null);

  const defaultValue = useMemo(() => {
    if (list.length > 0) {
      return list.find((item) => item.key === value);
    } else {
      return value;
    }
  }, [list, value]);

  const handleClick = () => {
    setShowList((value) => !value);
  };

  const selectItem = (item) => {
    setShowList((value) => !value);
    setSelected(item);
    if (onChange) {
      onChange(item);
    }
  };

  return (
    <div
      className="drop-down"
      tabIndex={-1}
      onFocus={() => {
        console.log("onFocus");
        setShowList(false);
      }}
    >
      <div
        className={`input size text color ${showList && "active"}`}
        onClick={() => handleClick()}
      >
        {defaultValue || (selected && selected.name) || defaultText}
      </div>
      {showList && (
        <div className="list size color">
          {list.map((item) => (
            <div
              className="item size text"
              onClick={() => selectItem(item)}
              key={item.key}
            >
              {renderItem && renderItem(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
