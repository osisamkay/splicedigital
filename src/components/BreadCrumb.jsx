import React from "react";

function Breadcrumb({ items }) {
  return (
    <nav
      className="text-sm font-medium text-ByeWindGrey-dark"
      aria-label="Breadcrumb"
    >
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          return (
            <li key={item.label}>
              <span className="">{item.separator}</span>
              {isLastItem ? (
                <span className="capitalize">{item.label}</span>
              ) : (
                <a href={item.url} className="capitalize hover:text-gray-900">
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
