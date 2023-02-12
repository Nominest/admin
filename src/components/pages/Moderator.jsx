import "../../style/pages/products.css";
import { useContext } from "react";
import { ModeratorContext } from "../../App";

export default function Moderator() {
  const { moderators } = useContext(ModeratorContext);
  // const [data, setData] = useState([{}]);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const response = await axios.get("http://localhost:2500/moderators");
  //     setData(response.data);
  //   };
  //   fetchItems();
  // }, []);
  // function editProduct(id) {
  //   navigate(`/edit` + (id + 1));
  // }
  const items = moderators.slice(0, 6).map((item, i) => {
    return (
      <tr key={i}>
        <td>{item.id}</td>
        <td>{item.lastname}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.date}</td>
        <td>{item.cnt}</td>
        {/* <td onClick={() => editProduct(i)}>Edit</td> */}
        {/* <td>Delete</td> */}
      </tr>
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Last Name</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
}
