import { useDispatch, useSelector } from "react-redux"

const SortBy = () => {

  const dispatch = useDispatch()
  const sortKey = useSelector(state => state.products.sort.key)

  const actions = [
    {type: 'SORT_PRODUCTS_NONE',    key: 'None'},
    {type: 'SORT_PRODUCTS_PRICE',   key: 'Lowest Price'},
    {type: 'SORT_PRODUCTS_PRICE',   key: 'Highest Price'},
    {type: 'SORT_PRODUCTS_RATE',    key: 'Lowest Rate'},
    {type: 'SORT_PRODUCTS_RATE',    key: 'Highest Rate'},
    {type: 'SORT_PRODUCTS_POPULAR', key: 'Lowest Popular'},
    {type: 'SORT_PRODUCTS_POPULAR', key: 'Highest Popular'}
  ]

  return (
    <div>

      <div className="dropdown">
        <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Sort by {sortKey}
        </button>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {actions.map(action => (
            <li key={action.key}>
              <div className={`dropdown-item ${action.key === sortKey ? 'active' : ''}`} onClick={() => dispatch(action)} >{action.key}</div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default SortBy