function Filter({ setFilter, activeFilter }) {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="filter-row">
      {filters.map((f) => (
        <button
          key={f}
          className={`filter-btn ${activeFilter === f ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Filter;
