function Filter({ setFilter, activeFilter }) {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="filter-row" role="group" aria-label="Filter tasks">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={`filter-btn ${activeFilter === filter ? 'filter-btn--active' : ''}`}
          aria-pressed={activeFilter === filter}
          onClick={() => setFilter(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Filter;
