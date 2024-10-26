
const category =
  [
    {title: 'Star Wars', id: 'star-wars'},
    {title: 'Famous People', id: 'famous-people'},
    {title: 'Saying', id: 'saying'},
    {title: 'Humour', id: 'humour'},
    {title: 'Motivational', id: 'motivational'},
  ];

const SideNavigation = () => {
  return (
    <div>
      <ul className="nav flex-column text-start mt-5">
        <li className="nav-item">
          <a className="nav-link active" href="#">All</a>
        </li>
        {category.map((item) => (
          <li key={item.id} className="nav-item">
            <a className="nav-link" href="#">{item.title}</a>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default SideNavigation;