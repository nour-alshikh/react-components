export  default  function Suggestions({users , handleClick}){
    return <ul>
        {users.map((user) =>
        <li onClick={handleClick} key={user.id}>{user.firstName}</li>)}
    </ul>
}