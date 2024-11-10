import ListItem from "./ListItem.jsx";

export default function MenusList({menus}) {

    return (
        <>
            <ul className="">
            {
                menus.map((item, index) => {
                    return (
                            <ListItem key={index} item={item} />
                    )
                })
            }
            </ul>
        </>
    )
}