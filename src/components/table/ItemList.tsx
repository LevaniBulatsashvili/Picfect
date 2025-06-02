interface IItemList<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const ItemList = <T,>({ items, renderItem }: IItemList<T>) => {
  return (
    <>
      {!items.length ? (
        <div className="flex items-center justify-center bg-gray-100 rounded-lg not-first:shadow-md">
          <h1 className="text-xl font-semibold text-gray-600">
            No Items Available...
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 h-[78dvh] max-h-[78dvh] w-full overflow-y-auto scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-gray-100 overflow-hidden">
          {items.map((item, idx) => (
            <div key={idx}>{renderItem(item)}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default ItemList;
